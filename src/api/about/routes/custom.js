"use strict";

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/about-page",
      handler: "about.aboutStructure",
      config: {
        auth: false,
      },
    },
   
  ]
};
