'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const baseUrl = strapi.config.get("app.settings.base_url");
const { imageFormat } = require("../../../common/image_format");

module.exports = createCoreController('api::header.header', ({ strapi }) => ({

  async getMenu() {
    let baseQuery1 = {
      select: ['*'],
      populate: {
        links:true,
       
      },
      where:{
        publishedAt: { $notNull: true }
      }

    }
    let headerData = await strapi.db.query("api::header.header").findOne(baseQuery1);


    let linkArry = [];
    headerData?.links.forEach((links) => {
      linkArry?.push({
        title: links?.title,
        url: links?.url,
        target_link: links?.target_link,
      });
    });   
 

    return {
      data: {
        links: linkArry,
      },
    };

  },

}));
