"use strict";

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
        method: "GET",
        path: "/footer",
        handler: "footer.getFooterData",
        config: {
          auth: false,
        },
      }
   
  ]
};
