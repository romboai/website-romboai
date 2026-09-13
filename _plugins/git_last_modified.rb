# frozen_string_literal: true

require "open3"
require "time"

# Supplies stable content modification dates to templates. Explicit editorial
# dates always win; otherwise use the latest Git commit that touched the source
# file. A normal build therefore does not rewrite every sitemap lastmod value.
Jekyll::Hooks.register :site, :post_read do |site|
  items = site.pages.dup
  site.collections.each_value { |collection| items.concat(collection.docs) }

  items.each do |item|
    next if item.data["last_modified_at"]

    relative_path =
      if item.respond_to?(:relative_path) && item.relative_path
        item.relative_path.sub(%r{\A/}, "")
      elsif item.respond_to?(:path)
        item.path
      end
    next if relative_path.nil? || relative_path.empty?

    stdout, status = Open3.capture2(
      "git", "-C", site.source, "log", "-1", "--format=%cI", "--", relative_path
    )
    next unless status.success? && !stdout.strip.empty?

    item.data["last_modified_at"] = Time.iso8601(stdout.strip)
  rescue ArgumentError
    Jekyll.logger.warn "lastmod:", "Invalid Git timestamp for #{relative_path}"
  end
end
