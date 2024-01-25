/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import Link from 'next/link';

import AdultSlider from '@/components/basketBallDetail/adultSlider';
import BannerDetail from '@/components/basketBallDetail/bannerDetail';
import LeagueBoard from '@/components/basketBallDetail/leagueBoard';
import Sponsor from '@/components/basketBallDetail/sponsor';
import SportCategory from '@/components/basketBallDetail/sportCategory';
import TeamSection from '@/components/basketBallDetail/teamSection';
import GraphAPI from '@/service/graphQL';

interface TeenDetailProp {
  leagueDetail?: any;
  featuredImage?: any;
  teamDetails?: any;
  locationDetails?: any;
  schedule?: any;
}

const TeenDetail: React.FC<TeenDetailProp> = ({
  leagueDetail,
  featuredImage,
  teamDetails,
  locationDetails,
  schedule,
}) => {
  return (
    <>
      <BannerDetail data={leagueDetail} fI={featuredImage} />
      <SportCategory data={leagueDetail} />
      {teamDetails && (
        <TeamSection data={teamDetails} location={locationDetails} />
      )}
      <LeagueBoard
        league={leagueDetail}
        teamData={teamDetails}
        scheduleData={schedule}
        location={locationDetails}
      />
      <Sponsor data={leagueDetail} />
      <AdultSlider data={leagueDetail} />
      {/* <BasketBallVideo lastname={lastName} /> */}

      {leagueDetail?.takeALookTitle && (
        <div className="category-grid-block">
          <div className="heading-box">
            <div
              className="heading"
              dangerouslySetInnerHTML={{ __html: leagueDetail.takeALookTitle }}
            />
            <img src="/assets/images/down-arrow.svg" alt="down arrow" />
          </div>
          <div className="grid-block">
            <div className="container mx-auto px-4">
              <div className="grid-box">
                {leagueDetail.takeALookTitleBlocks?.map(
                  (item: any, index: any) => {
                    return (
                      <div className="grid-item-box" key={`bd-${index}`}>
                        <div className="item-box">
                          <div className="logo-box">
                            <div className="category-logo">
                              {item.blockLogo?.sourceUrl && (
                                <img
                                  src={item.blockLogo.sourceUrl}
                                  alt="images"
                                />
                              )}
                            </div>
                          </div>

                          <div className="item-info-box">
                            <div className="bg-img-box">
                              {item.blockImage?.sourceUrl && (
                                <img
                                  src={item.blockImage.sourceUrl}
                                  alt="image"
                                />
                              )}
                            </div>
                            <div className="category-info">
                              {item.blockLink && (
                                <Link
                                  className="arrow-btn"
                                  href={item.blockLink}
                                >
                                  {item.blockTitle && (
                                    <div
                                      className="heading"
                                      dangerouslySetInnerHTML={{
                                        __html: item.blockTitle,
                                      }}
                                    />
                                  )}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="teens-cta-section">
        {(leagueDetail?.bgImage?.sourceUrl ||
          leagueDetail?.mobileBackgroundImage?.sourceUrl) && (
          <div className="background-image-box">
            {leagueDetail?.bgImage?.sourceUrl && (
              <div className="desktop-img hidden md:block">
                <img
                  src={leagueDetail?.bgImage?.sourceUrl || null}
                  alt="image"
                />
              </div>
            )}
            {leagueDetail?.mobileBackgroundImage?.sourceUrl && (
              <div className="mobile-img md:hidden">
                <img
                  src={leagueDetail?.mobileBackgroundImage?.sourceUrl || null}
                  alt="image"
                />
              </div>
            )}
          </div>
        )}

        <div className="overlay-box hidden md:block">
          {leagueDetail?.desktopBgImage?.sourceUrl && (
            <img
              className="bg-img"
              src={leagueDetail.desktopBgImage.sourceUrl}
              alt="image"
            />
          )}
          {leagueDetail?.desktopObjectImage?.sourceUrl && (
            <img
              className="boy-img"
              src={leagueDetail.desktopObjectImage.sourceUrl}
              alt="image"
            />
          )}
        </div>
        <div className="overlay-box md:hidden">
          {leagueDetail?.mobileBgImage?.sourceUrl && (
            <img
              className="bg-img"
              src={leagueDetail.mobileBgImage.sourceUrl}
              alt="image"
            />
          )}
          {leagueDetail?.mobileObjectImage?.sourceUrl && (
            <img
              className="boy-img"
              src={leagueDetail.mobileObjectImage.sourceUrl}
              alt="image"
            />
          )}
        </div>
        <div className="container mx-auto px-4">
          <div className="teens-cta-block">
            {leagueDetail?.registerBlockTitle && (
              <div
                className="heading"
                dangerouslySetInnerHTML={{
                  __html: leagueDetail.registerBlockTitle,
                }}
              />
            )}
            {leagueDetail?.joinButtonLink && (
              <Link className="cta-btn" href={leagueDetail.joinButtonLink}>
                {leagueDetail?.joinButtonText
                  ? leagueDetail.joinButtonText
                  : 'Join Us'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeenDetail;

export async function getStaticPaths() {
  const leagueSettings = await GraphAPI.leagueSettings('teens');
  const paths =
    leagueSettings.data.data.pageBy.leaguesSettings?.leagueType?.leagues?.nodes.map(
      (item: any) => {
        const params = { slug: item.slug };
        return { params };
      }
    );
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const leagueDetail = await GraphAPI.leagueDetailSettings({ params });
  const leagueDetailData =
    leagueDetail.data.data.leagueBy?.leagueDetailSettings;
  const featuredImage = leagueDetail.data.data.leagueBy;
  const scheduleData = await GraphAPI.scheduleData();
  const scheduleResult = scheduleData?.data?.response?.results || null;
  let teamDetails = null;
  let locationDetails: any = null;
  if (leagueDetailData?.leagueId) {
    try {
      teamDetails = await GraphAPI.gameData(leagueDetailData.leagueId);
      teamDetails = teamDetails?.data?.response?.results || null;
    } catch (error) {
      teamDetails = null;
    }
  }
  if (teamDetails) {
    const homeTeams = teamDetails.map((item: any) => item['home-team']);
    teamDetails = [...new Set(homeTeams)];
    teamDetails = await GraphAPI.teamData(teamDetails);
    locationDetails = await GraphAPI.locationData();
  }
  if (!leagueDetailData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      leagueDetail: leagueDetailData,
      featuredImage,
      teamDetails: teamDetails?.data?.response?.results || null,
      locationDetails: locationDetails?.data?.response?.results || null,
      schedule: scheduleResult,
    },
  };
}
