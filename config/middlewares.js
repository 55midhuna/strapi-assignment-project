module.exports = [
  'strapi::errors',
  {
    name:  "strapi::security",
    config:  {
       contentSecurityPolicy:  {
       useDefaults:  true,
       directives:  {
         'frame-src':["'self'","https://www.wikipedia.org/"],
         'frame-ancestors':  null,
         upgradeInsecureRequests:  null,
                               },
                      },
   frameguard:  false,
             },
},
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
