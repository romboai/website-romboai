# frozen_string_literal: true

# Vendored native gems may have been built for a different CPU architecture.
# LiveReload is optional: keep the site and file watcher usable in that case.
if ARGV.include?("--livereload")
  begin
    require "rubyeventmachine"
    require "em-websocket"
  rescue LoadError
    warn "[dev] LiveReload native extensions unavailable; starting without browser auto-refresh."
    warn "[dev] Reinstall the native gems for #{RUBY_PLATFORM} to enable LiveReload."
    ARGV.delete("--livereload")
    port_index = ARGV.index("--livereload-port")
    ARGV.slice!(port_index, 2) if port_index
  end
end

load Gem.bin_path("jekyll", "jekyll")
