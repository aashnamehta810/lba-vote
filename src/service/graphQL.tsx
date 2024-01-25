import type { AxiosResponse } from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL: string = process.env.graphUrl!;
const dataURL: string = process.env.apiUrl!;
const headers = {
  'content-type': 'application/json',
};

export default class GraphAPI {
  static themeOptions(): Promise<AxiosResponse> {
    const themeQuery = `
            query ThemeQuery {
      acfOptionsThemeOptions {
        themeOptions {
          addressLocation
          companyEmail
          companyPhone
          copyrightText
          counterBlocks {
            count
            countText
             countImage {
          id
          sourceUrl
        }
          }
          faviconImage {
            sourceUrl
          }
          footerLogo {
            sourceUrl
          }
          headerLogo {
            sourceUrl
          }
          headerTagline
          joinUsLink
          joinUsText
          whatsappLink
          instagramLink
          sponsorBlocks {
        sponsorHoverImage {
          sourceUrl
        }
        sponsorImage {
          sourceUrl
        }
      }
        }
      }
    }
        `;
    const graphqlQuery = {
      operationName: 'ThemeQuery',
      query: themeQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static headerMenu(): Promise<AxiosResponse> {
    const headerMenuQuery = `
           query HeaderMenuQuery {
  menu(id: "Header Menu", idType: NAME) {
    menuId
    name
    slug
    menuItems(first: 30) {
      nodes {
        title
        url
        childItems {
          nodes {
            title
            label
            url
            parentId
          }
        }
        label
        parentId
        id
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'HeaderMenuQuery',
      query: headerMenuQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static footerMenu(): Promise<AxiosResponse> {
    const footerMenuQuery = `
           query FooterMenuQuery {
  menu(id: "Footer Menu", idType: NAME) {
    menuId
    name
    slug
    menuItems (first: 30) {
      nodes {
        title
        url
        label
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'FooterMenuQuery',
      query: footerMenuQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static homeSettings(): Promise<AxiosResponse> {
    const homeQuery = `
     query HomeQuery {
  pageBy(pageId: 95) {
    homeSettings {
      bannerTagline
      bannerTitle
      bannerSubtitle
      bannerVideo {
        mediaItemUrl
        link
        sourceUrl
      }
      adrenalineTitle
      adrenalineDescription
      adrenalineSlider {
        adrenalineImage {
          sourceUrl
        }
      }
      brandReadyForThisTitle
      countMeInButtonLink
      countMeInButtonText
      exploreLbaLink
      exploreLbaText
      imInButtonLink
      imInButtonText
      kickAboutSlider {
        blockTitle
        blockImage {
          sourceUrl
        }
      }
      kickAboutTitle
      lbaLeagueSlider {
        sliderTitle
        sliderLogo {
          sourceUrl
        }
        sliderBgImage {
          sourceUrl
        }
        sliderVideo {
          sourceUrl
          mediaItemUrl
        }
      }
      lbaMarketingTitle
      marketingBlocks {
        marketingDescription
        marketingImage {
          sourceUrl
        }
      }
      proleagueBlocks {
        hoverImage {
          sourceUrl
        }
        proleagueTitle
        proleagueIcon {
          sourceUrl
        }
      }
      proleagueSlider {
        leagueLink
        leagueIcon {
          sourceUrl
        }
      }
      registerButtonLink
      registerButtonText
      sponsorButtonLink
      sponsorButtonText
      testimonialTitle
      testimonialBlock {
        author
        testimonialBlockDescription
        testimonialBlockTitle
        testimonialBlockImage {
          sourceUrl
        }
      }
      youChooseTitle
      youChooseBlocks {
        chooseDescription
        chooseText
        chooseImage {
          sourceUrl
        }
        chooseIcon {
          sourceUrl
        }
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'HomeQuery',
      query: homeQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static aboutSettings(): Promise<AxiosResponse> {
    const aboutQuery = `
    query AboutQuery {
  pageBy(pageId: 100) {
    aboutSettings {
      aboutLbaBlocks {
        aboutDescription
        aboutTitle
        lottieFile {
          link
          mediaItemUrl
          sourceUrl
        }
      }
      bannerTagline
      bannerTitle
      bannerVideo {
        sourceUrl
        mediaItemUrl
      }
      exploreTeamButtonLink
      exploreTeamButtonText
      findASponsorButtonText
      findASponsorLink
      founderDescription
      founderTagline
      founderTitle
      founderImage {
        sourceUrl
      }
      joinButtonLink
      joinButtonText
      joinLeagueButtonLink
      joinLeagueButtonText
      lakewoodBlocks {
        blockDescription
        blockTagline
        blockTitle
        blockIcon {
          sourceUrl
        }
      }
      lakewoodTitle
      marketingButtonLink
      marketingButtonText
      mediaButtonLink
      mediaButtonText
      parallexTitle
      parallexDescription
      parallexBlocks {
        description
        title
        icon {
          sourceUrl
        }
      }
      plusMoreDescription
      plusMoreTagline
      plusMoreTitle
      plusMoreImage {
        sourceUrl
      }
      sponsorButtonLink
      sponsorButtonText
      windDownDescription
      windDownTitle
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'AboutQuery',
      query: aboutQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static sponsorSettings(): Promise<AxiosResponse> {
    const sponsorQuery = `
 query SponsorQuery {
  pageBy(pageId: 261) {
    sponsorSettings {
      bannerTitle
      billboardLeftImages {
        billboardImage {
          sourceUrl
        }
      }
      billboardRightImage {
        sourceUrl
      }
      billboardSlides {
        billboardSlideTitle
      }
      billboardTitle
      fullDetailButton
      fullDetailLink
      homeRunButtonText
      homeRunLink
      homeRunTitle
      keyBenefitsBlock {
        keyDescription
        keyTitle
        keyHoverImage {
          sourceUrl
        }
      }
      keyBenefitsTagLine
      keyBenefitsTitle
      lbaMarketingHeading
      lbaMarketingSlider {
        testimonialContent
        author
      }
      plusGrids {
        gridDescription
        gridTitle
        gridImage {
          sourceUrl
        }
      }
      plusTitle
      speechBlocks {
        speechDescription
      }
      sponsorTeamNoticeBlocks {
        blockFlipTitle
        blockTitle
      }
      sponsorTeamNoticeTitle
      sponsorTitle
      sponsorshipBlocks {
        blockImage {
          sourceUrl
        }
        blockListPoints {
          listPoint
        }
        blockLogo {
          sourceUrl
        }
        blockTitle
      }
      sponsorshipBottomTitle
      sponsorshipTitle
      chooseDescription
      chooseImage {
        sourceUrl
      }
      chooseTitle
      chooseMobileImage {
        sourceUrl
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'SponsorQuery',
      query: sponsorQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static leagueSettings(slug: any): Promise<AxiosResponse> {
    const leagueListingQuery = `
    query LeagueListingQuery {
  pageBy(uri: "/${slug}") {
     leaguesSettings {
      bannerBottomDescription
      bannerBottomTitle
      bannerTitle
      bannerVideo {
        sourceUrl
        link
        mediaItemUrl
      }
      benefitsBlocks {
        benefitDescription
        benefitTitle
        benefitIcon {
          sourceUrl
        }
        benefitImage {
          sourceUrl
        }
      }
      seeUsInActionTitle
      seeUsInActionVideo {
        link
        mediaItemUrl
        sourceUrl
      }
      staffBlocks {
        memberDesignation
        memberName
        memberImage {
          sourceUrl
        }
      }
      staffDescription
      staffTitle
      leagueType {
        name
        leagues {
          nodes {
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      testimonials {
        author
        testimonialHeading
        testimonialImage {
          sourceUrl
        }
        testimonialDescription
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'LeagueListingQuery',
      query: leagueListingQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static mediaSettings(): Promise<AxiosResponse> {
    const mediaQuery = `
    query MediaQuery {
  pageBy(pageId: 189) {
    mediaSettings {
      lbaAdvertiseImage {
        sourceUrl
      }
      lbaStatusDescription
      lbaStatusTitle
      mediaMentionDescription
      mediaMentionTitle
      mediaMentionBlocks {
        blockTitle
        mediaLink
        mediaMentionDate
        mediaImage {
          sourceUrl
        }
      }
      mediaMentionSponsor {
        sourceUrl
      }
      sponsorBox {
        sponsorTitle
        sponsorImage {
          sourceUrl
        }
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'MediaQuery',
      query: mediaQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static leagueDetailSettings({ params }: any): Promise<AxiosResponse> {
    const leagueDetailQuery = `
 query LeagueDetailQuery {
  leagueBy(slug: "${params.slug}") {
    featuredImage {
      node {
        sourceUrl
      }
    }
    leagueDetailSettings {
      leagueId
      bannerTagline
      bannerTitle
      bannerVideo {
        link
        mediaItemUrl
        sourceUrl
      }
      enrollNowButtonLink
      enrollNowButtonText
      highlightButtonLink
      highlightTitle
      takeALookTitle
      highlightButtonText
      highlightImages {
        highlightImage {
          sourceUrl
        }
      }
      takeALookTitleBlocks {
        blockLink
        blockTitle
        blockLogo {
          sourceUrl
        }
        blockImage {
          sourceUrl
        }
      }
      bannerImage {
        sourceUrl
      }
      overlayBgImage {
        sourceUrl
      }
      sportsCategoryTitle
      sportsCategoryBgImage {
        sourceUrl
      }
       joinButtonText
      joinButtonLink
      mobileBgImage {
        sourceUrl
      }
      mobileObjectImage {
        sourceUrl
      }
      registerBlockTitle
      desktopBgImage {
        sourceUrl
      }
      desktopObjectImage {
        sourceUrl
      }
      bgImage {
        sourceUrl
      }
      mobileBackgroundImage {
        sourceUrl
      }
    }
    
  }
}
        `;
    const graphqlQuery = {
      operationName: 'LeagueDetailQuery',
      query: leagueDetailQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static seoSettings(uri: any): Promise<AxiosResponse> {
    const seoSettings = `
  query SeoSettings {
    pageBy(uri: "${uri}") {
    seo {
      fullHead
       metaDesc
      metaKeywords
      opengraphDescription
      title
      opengraphUrl
      twitterDescription
      twitterTitle
    }
  }
}
`;

    const graphqlQuery = {
      operationName: 'SeoSettings',
      query: seoSettings,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static mediaList(): Promise<AxiosResponse> {
    const mediaListQuery = `
   query MediaListQuery {
  allLeagueMedia {
    nodes {
      featuredImage {
        node {
          sourceUrl
        }
      }
      mediaDetailSettings {
        mediaVideo
      }
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'MediaListQuery',
      query: mediaListQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static registerList(): Promise<AxiosResponse> {
    const registerListQuery = `
    query RegisterListQuery {
    leagueTypes {
      nodes {
        name
        leagues {
          nodes {
            title
            leagueDetailSettings {
              registerStatus
            }
          }
        }
      }
    }
  }
        `;
    const graphqlQuery = {
      operationName: 'RegisterListQuery',
      query: registerListQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static leagueMediaCategory(): Promise<AxiosResponse> {
    const leagueMediaCategoryQuery = `
   query leagueMediaCategoryQuery {
  leagueMediaCategories {
    nodes {
      name
      id
    }
  }
}
        `;
    const graphqlQuery = {
      operationName: 'leagueMediaCategoryQuery',
      query: leagueMediaCategoryQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static mediaSearch(id: any): Promise<AxiosResponse> {
    const mediaSearchQuery = `
   query MediaSearch {
  leagueMediaCategory(id: "${id}") {
    leagueMedia(first: 500) {
      nodes {
        featuredImage {
        node {
          sourceUrl
        }
      }
      mediaDetailSettings {
        mediaVideo 
      }
      }
    }
  }
}`;
    const graphqlQuery = {
      operationName: 'MediaSearch',
      query: mediaSearchQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static mediaSearchText(searchText: any): Promise<AxiosResponse> {
    const mediaSearchQuery = `
   query MediaSearch {
  allLeagueMedia(
    where: {metaQuery: {metaArray: {compare: LIKE, key: "search_tags", value: "${searchText}", type: CHAR}, relation: OR}}
  ) {
    nodes {
      featuredImage {
        node {
          sourceUrl
        }
      }
       mediaDetailSettings {
        mediaVideo 
      }
    }
  }
}`;
    const graphqlQuery = {
      operationName: 'MediaSearch',
      query: mediaSearchQuery,
    };
    return axios({
      url: baseURL,
      method: 'post',
      headers,
      data: graphqlQuery,
    });
  }

  static gameData(leagueId: string): Promise<AxiosResponse> {
    const tokenTicket = process.env.token;
    const params = {
      constraints: JSON.stringify([
        {
          key: 'league',
          constraint_type: 'equals',
          value: leagueId,
        },
      ]),
    };
    return axios.get(`${dataURL}/game`, {
      params,
      headers: {
        Authorization: `Bearer ${tokenTicket}`,
      },
    });
  }

  static teamData(teamIdList: any): Promise<AxiosResponse> {
    const tokenTicket = process.env.token;
    const params = {
      constraints: JSON.stringify([
        {
          key: '_id',
          constraint_type: 'in',
          value: teamIdList,
        },
      ]),
    };

    return axios.get(`${dataURL}/team`, {
      params,
      headers: {
        Authorization: `Bearer ${tokenTicket}`,
      },
    });
  }

  static locationData(): Promise<AxiosResponse> {
    const tokenTicket = process.env.token;
    return axios.get(`${dataURL}/location`, {
      headers: {
        Authorization: `Bearer ${tokenTicket}`,
      },
    });
  }

  static scheduleData(): Promise<AxiosResponse> {
    const tokenTicket = process.env.token;
    const currentDate = new Date().toISOString();
    const params = {
      constraints: JSON.stringify([
        {
          key: 'date-time',
          constraint_type: 'greater than',
          value: currentDate,
        },
      ]),
    };

    return axios.get(`${dataURL}/game`, {
      params,
      headers: {
        Authorization: `Bearer ${tokenTicket}`,
      },
    });
  }
}
