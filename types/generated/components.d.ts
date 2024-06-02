import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutOurStorySection extends Schema.Component {
  collectionName: 'components_about_our_story_sections';
  info: {
    displayName: 'Our Story Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface AboutTeamSection extends Schema.Component {
  collectionName: 'components_about_team_sections';
  info: {
    displayName: 'Team Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    team_members: Attribute.Relation<
      'about.team-section',
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface CommonLinks extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    target_link: Attribute.Boolean;
  };
}

export interface CommonSocialMediaLinks extends Schema.Component {
  collectionName: 'components_common_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface HomeBannerSection extends Schema.Component {
  collectionName: 'components_home_banner_sections';
  info: {
    displayName: 'Banner Section';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    background_image: Attribute.Media;
    call_to_action_button: Attribute.Component<'common.button'>;
  };
}

export interface HomeFeaturesSection extends Schema.Component {
  collectionName: 'components_home_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    features: Attribute.Relation<
      'home.features-section',
      'oneToMany',
      'api::feature.feature'
    >;
  };
}

export interface HomeIntroductionSection extends Schema.Component {
  collectionName: 'components_home_introduction_sections';
  info: {
    displayName: 'Introduction Section';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'about.our-story-section': AboutOurStorySection;
      'about.team-section': AboutTeamSection;
      'common.button': CommonButton;
      'common.links': CommonLinks;
      'common.social-media-links': CommonSocialMediaLinks;
      'home.banner-section': HomeBannerSection;
      'home.features-section': HomeFeaturesSection;
      'home.introduction-section': HomeIntroductionSection;
    }
  }
}
