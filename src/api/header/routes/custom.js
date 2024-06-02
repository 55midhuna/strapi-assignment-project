"use strict";

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
        method: "GET",
        path: "/header",
        handler: "header.getMenu",
        config: {
          auth: false,
        },
      }
   
  ]
};
