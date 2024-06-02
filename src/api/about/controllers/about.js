'use strict';

/**
 * about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { widgetStructuring } = require("./../../../common/widget_structuring");

module.exports = createCoreController('api::about.about',

({ strapi }) => ({

    async aboutStructure(ctx) {
  
      let query = {
        select: ['*'],
        populate: {
            layout: { select: ["title"] },
          widgets: {
            populate: {
              background_image: { select: ["url", "alternativeText"] },
              image: { select: ["url", "alternativeText"] },
              call_to_action_button: true,
              features: {
                populate: {
                  image:  { select: ["url", "alternativeText"] },
                },
              },
              team_members: {
                populate: {
                  image: { select: ["url", "alternativeText"] },
                },
              },
            },
          },
        },
        where: {
          publishedAt: { $notNull: true }
        },
      };
  
      let pageData = await strapi.db.query("api::about.about").findMany(query);
      let mappings = widgetStructuring();
      let componentData = [];
  
      for (let page of pageData) {
  
        if (page?.widgets) {
  
          for (let data of page.widgets) {
  
            let structuredData = null;
            try {
              structuredData = await mappings[data?.__component](data, this.ctx);
            } catch (error) {
              console.log(error);
            }
            if (structuredData) {
              componentData.push(structuredData);
            }
          }
        }
      }
  
      return {
        data: {
          layout:pageData[0]?.layout?.title,
          widgets: [...componentData],
        },
      };
    },
    
  
  })


);
