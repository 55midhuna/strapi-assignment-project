'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const baseUrl = strapi.config.get("app.settings.base_url");
const { imageFormat } = require("./../../../common/image_format");

module.exports = createCoreController('api::footer.footer', ({ strapi }) => ({

  async getFooterData() {
    let baseQuery1 = {
      select: ['*'],
      populate: {
        links:true,
        social_media_links:{
            populate:{
                icon:{ select: ["url", "alternativeText"] },
            }
        }
      },
      where:{
        publishedAt: { $notNull: true }
      }

    }
    let footerData = await strapi.db.query("api::footer.footer").findOne(baseQuery1);


    let linkArry = [];
    footerData?.links.forEach((links) => {
      linkArry?.push({
        title: links?.title,
        url: links?.url,
        target_link: links?.target_link,
      });
    });   

    let mediaArry = [];
    footerData?.social_media_links.forEach((links) => {
      mediaArry?.push({
        url: links?.url,
        icon: imageFormat(links?.icon),
      });
    });   

    return {
      data: {
        links: linkArry,
        social_media_links: mediaArry,

      },
    };

  },

}));
