const baseUrl = strapi.config.get("app.settings.base_url");

module.exports = {
  imageFormat(img) {
    if (img) {
      return baseUrl + img?.url
    }
    return "";
  },

}
