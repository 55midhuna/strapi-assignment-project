module.exports = ({ env }) => ({
  settings: {
    base_url: env("BASE_URL"),
  },
    slug_category_mappings: {
      pages: {
        category: "pages",
        type: "detail",
      }
    },
  });
  