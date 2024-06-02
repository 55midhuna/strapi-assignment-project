"use strict";

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/home-page",
      handler: "home-page.Structure",
      config: {
        auth: false,
      },
    },
   
  ]
};
