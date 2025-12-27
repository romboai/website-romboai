import React from "react";
import { defineConfig } from "tinacms";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

/**
 * Friendlier editor for people who don't know Markdown:
 * - toolbar buttons (bold, headings, lists, links)
 * - live preview
 *
 * Still saves a plain markdown string in frontmatter (`markdown_content`),
 * so your Jekyll rendering stays unchanged.
 */
const MarkdownStringEditor = (props: any) => {
  const { input, field } = props;
  const value = (input?.value ?? "") as string;

  // NOTE: this file is `.ts` (not `.tsx`) so we avoid JSX here.
  return React.createElement(
    "div",
    { className: "my-4" },
    React.createElement(
      "label",
      { htmlFor: input?.name, className: "block text-sm font-medium mb-2" },
      field?.label ?? field?.name
    ),
    field?.description
      ? React.createElement(
          "p",
          { className: "text-xs text-gray-500 mb-2" },
          field.description
        )
      : null,
    React.createElement(
      "div",
      { "data-color-mode": "light" },
      React.createElement(MDEditor as any, {
        value,
        preview: "live",
        onChange: (next: string | undefined) => {
          // Tina expects a ChangeEvent-like object
          input?.onChange({ target: { value: next ?? "" } });
        },
      })
    )
  );
};

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "_posts",
        format: "md",
        ui: {
          filename: {
            slugify: (values: any) => {
              const title = (values?.title ?? "post").toString();
              const slug = title
                .toLowerCase()
                .trim()
                .replace(/['"]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

              const d = values?.date ? new Date(values.date) : new Date();
              const yyyy = String(d.getFullYear()).padStart(4, "0");
              const mm = String(d.getMonth() + 1).padStart(2, "0");
              const dd = String(d.getDate()).padStart(2, "0");
              return `${yyyy}-${mm}-${dd}-${slug || "post"}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
            description: "Recommended format: /blog/your-post-slug/ (starts with /blog/ and ends with /).",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: ["article"],
            description: "Keep as 'article' for blog posts.",
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "image_alt",
            label: "Featured Image Alt Text",
            required: true,
            description: "Accessibility + SEO. Describe the image in a short sentence.",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "markdown_content",
            label: "Body (Markdown)",
            required: true,
            ui: {
              component: MarkdownStringEditor,
            },
          },
        ],
      },
      {
        name: "page",
        label: "Site Pages",
        path: "_pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta description",
            required: false,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: false,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: false,
            options: [
              "default",
              "about",
              "contact",
              "privacy",
              "product",
              "voucher",
              "blog",
              "default_landing",
            ],
          },

          // Home / Landing common fields
          { type: "string", name: "hero_home_title", label: "Hero title", required: false },
          { type: "string", name: "hero_cta_label_left", label: "Hero CTA left label", required: false },
          { type: "string", name: "hero_cta_label_right", label: "Hero CTA right label", required: false },
          { type: "string", name: "hero_cta_link", label: "Hero CTA link (path)", required: false },
          { type: "string", name: "intro_main_title", label: "Intro main title", required: false },
          { type: "string", name: "intro_sub_title", label: "Intro sub title", required: false },

          { type: "string", name: "intro_message_part_one", label: "Intro message 1 (title)", required: false },
          { type: "string", name: "intro_message_part_two", label: "Intro message 2", required: false },
          { type: "string", name: "intro_message_part_three", label: "Intro message 3 (highlight)", required: false },
          { type: "string", name: "intro_message_part_four", label: "Intro message 4", required: false, ui: { component: "textarea" } },
          { type: "string", name: "intro_message_part_five", label: "Intro message 5 (title)", required: false },
          { type: "string", name: "intro_message_part_six", label: "Intro message 6", required: false, ui: { component: "textarea" } },
          { type: "string", name: "intro_message_part_seven", label: "Intro message 7 (highlight)", required: false },
          { type: "string", name: "intro_message_part_eight", label: "Intro message 8", required: false },
          { type: "string", name: "intro_message_part_nine", label: "Intro message 9 (title)", required: false },
          { type: "string", name: "intro_message_part_ten", label: "Intro message 10", required: false, ui: { component: "textarea" } },
          { type: "string", name: "intro_message_part_eleven", label: "Intro message 11 (title)", required: false },
          { type: "string", name: "intro_message_part_twelve", label: "Intro message 12", required: false, ui: { component: "textarea" } },

          { type: "string", name: "technology_main_title", label: "Technology main title", required: false },
          { type: "string", name: "technology_sub_title", label: "Technology sub title", required: false },
          { type: "string", name: "technology_message_part_three", label: "Tech message 3", required: false },
          { type: "string", name: "technology_message_part_four", label: "Tech message 4", required: false, ui: { component: "textarea" } },
          { type: "string", name: "technology_message_part_five", label: "Tech message 5", required: false },
          { type: "string", name: "technology_message_part_six", label: "Tech message 6", required: false, ui: { component: "textarea" } },
          { type: "string", name: "technology_message_part_seven", label: "Tech message 7", required: false },
          { type: "string", name: "technology_message_part_eight", label: "Tech message 8", required: false, ui: { component: "textarea" } },
          { type: "string", name: "technology_message_part_nine", label: "Tech message 9", required: false },
          { type: "string", name: "technology_message_part_ten", label: "Tech message 10", required: false },

          // Product page fields
          { type: "string", name: "hero_product_title", label: "Product hero title", required: false },
          { type: "string", name: "hero_product_sub_title", label: "Product hero subtitle", required: false, ui: { component: "textarea" } },
          { type: "string", name: "product_section_one_main_title", label: "Product section 1 main title", required: false },
          { type: "string", name: "product_section_one_sub_title", label: "Product section 1 sub title", required: false },
          { type: "string", name: "product_section_one_message", label: "Product section 1 message", required: false, ui: { component: "textarea" } },
          { type: "string", name: "product_section_two_main_title", label: "Product section 2 main title", required: false },
          { type: "string", name: "product_section_two_sub_title", label: "Product section 2 sub title", required: false },
          { type: "string", name: "product_section_two_message", label: "Product section 2 message", required: false, ui: { component: "textarea" } },
          { type: "string", name: "product_features_title", label: "Product features title", required: false },
          { type: "string", name: "product_features_subtitle", label: "Product features subtitle", required: false },

          // Products landing page fields
          { type: "string", name: "products_section_title", label: "Products section title", required: false },
          { type: "string", name: "products_section_subtitle", label: "Products section subtitle", required: false },
          { type: "string", name: "products_section_message", label: "Products section message", required: false, ui: { component: "textarea" } },
          {
            type: "object",
            name: "products",
            label: "Products (cards)",
            list: true,
            ui: {
              itemProps: (item: any) => ({
                label: item?.title || "Product",
              }),
            },
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "badge", label: "Badge", required: false },
              { type: "string", name: "description", label: "Description", required: false, ui: { component: "textarea" } },
              { type: "string", name: "link", label: "Link (path)", required: true },
              { type: "image", name: "image", label: "Image", required: false },
            ],
          },

          {
            type: "string",
            name: "markdown_content_section_one",
            label: "Product section 1 (Markdown block 1)",
            required: false,
            ui: { component: MarkdownStringEditor },
          },
          {
            type: "string",
            name: "markdown_content_section_two",
            label: "Product section 1 (Markdown block 2)",
            required: false,
            ui: { component: MarkdownStringEditor },
          },
          {
            type: "string",
            name: "markdown_content_section_three",
            label: "Product section 1 (Markdown block 3)",
            required: false,
            ui: { component: MarkdownStringEditor },
          },
          {
            type: "string",
            name: "markdown_content_section_four",
            label: "Product section 1 (Markdown block 4)",
            required: false,
            ui: { component: MarkdownStringEditor },
          },
        ],
      },
    ],
  },
});
