function widgetStructuring() {
    return {
      "home.banner-section": bannerSection,
      "home.introduction-section":introductionSection,
      "home.features-section":featuresSection,
      "about.our-story-section":ourStorySection,
      "about.team-section":aboutTeamSection
    };
  }

const feature = require("../api/feature/controllers/feature");
const { imageFormat } = require("./image_format");
  
  async function bannerSection() {
    let $component = arguments[0] === typeof undefined ? null : arguments[0];
    if (!$component) {
      return null;
    }

    return {
      slug: "BannerSection",
      data: {
        title: $component?.title,
        subtitle: $component?.subtitle,
        image:imageFormat($component?.background_image),
        button:{
          text:$component?.call_to_action_button?.text,
          url:$component?.call_to_action_button?.link,

        }
      },
    };
  }
  
  async function introductionSection() {
    let $component = arguments[0] === typeof undefined ? null : arguments[0];
    if (!$component) {
      return null;
    }

    return {
      slug: "IntroductionSection",
      data: {
        title: $component?.title,
        subtitle: $component?.subtitle,
        description:$component?.description
      },
    };

  }
  
  async function featuresSection() {
    let $component = arguments[0] === typeof undefined ? null : arguments[0];
    if (!$component) {
      return null;
    }
    
  let featuresArry = [];
  $component?.features?.forEach((features) => {
    featuresArry?.push({
      title: features?.title,
      description: features?.description,
      image:imageFormat(features?.image)
    });
  });

    return {
      slug: "FeaturesSection",
      data: {
        title: $component?.title,
        features:featuresArry
      },
    };
    
  }

  async function ourStorySection() {
    let $component = arguments[0] === typeof undefined ? null : arguments[0];
    if (!$component) {
      return null;
    }
    
    return {
      slug: "OurStorySection",
      data: {
        title: $component?.title,
        description:$component?.description,
        image:imageFormat($component?.image)
      },
    };


    
  }


  async function aboutTeamSection() {
    let $component = arguments[0] === typeof undefined ? null : arguments[0];
    if (!$component) {
      return null;
    }
      
    let teamArry = [];
    $component?.team_members?.forEach((team) => {
      teamArry?.push({
        name: team?.name,
        position: team?.position,
        bio: team?.bio,
        image:imageFormat(team?.image)
      });
    });

    return {
      slug: "FeaturesSection",
      data: {
        title: $component?.title,
        features:teamArry
      },
    };
    
  }
  
  module.exports = {
    widgetStructuring,
  };
  