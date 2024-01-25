/* eslint-disable no-script-url */
/* eslint-disable no-var */
/* eslint-disable simple-import-sort/imports */
import 'plyr-react/plyr.css';
import 'swiper/css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Plyr from 'plyr-react';
import GraphAPI from '@/service/graphQL';
import { useState } from 'react';

interface RegisterProps {
  registerDetails?: any;
  themeOptions?: any;
  mediaList?: any;
}

const Register: React.FC<RegisterProps> = ({
  registerDetails,
  themeOptions,
  mediaList,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideoLink, SetActiveVideoLink] = useState(null);
  const videoOptions = {
    autoplay: true,
    seekTime: 5,
    i18n: { rewind: 'Rewind 5s', fastForward: 'Forward 5s' },
    controls: [
      'play-large',
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'fullscreen',
    ],
  };
  const videoSource: Plyr.SourceInfo = {
    type: 'video',
    sources: [
      {
        src: activeVideoLink || '/assets/videos/banner-video.mp4',
        type: 'video/mp4',
      },
    ],
  };
  const handleVideoOpen = (videoLink: any) => {
    setShowModal(true);
    SetActiveVideoLink(videoLink);
  };
  return (
    <>
      <div className="register-bnr-section">
        <div className="overlay-bg-block">
          <img src="/assets/images/register-bnr-bg-img.png" alt="image" />
        </div>

        <div className="container mx-auto px-4">
          <div className="register-banner-block">
            <div className="register-banner-title-box">
              <div className="heading-box">
                <div className="heading">
                  <h1>ENROLL HERE</h1>
                </div>
                <p className="desc">
                  Join an LBA league for a spirited season of sport.
                </p>
              </div>

              <div className="general-btn">
                <Link
                  href="https://app.lbaleagues.com/login?intent=apply"
                  target="_blank"
                  className="lightblue-btn"
                >
                  Login
                </Link>
              </div>
            </div>

            {registerDetails?.nodes.length > 0 && (
              <div className="sports-caregory-block">
                {registerDetails?.nodes.map((item: any, index: any) => {
                  return (
                    <div className="sports-category-item" key={`cit-${index}`}>
                      <div className="category-item-box">
                        <h3 className="category-title">{item.name}</h3>
                        {item?.leagues?.nodes.length > 0 && (
                          <ul>
                            {item.leagues.nodes.map(
                              (subItem: any, subIndex: any) => {
                                var status = '';
                                if (
                                  subItem.leagueDetailSettings
                                    .registerStatus === 'open'
                                ) {
                                  status = 'Open';
                                } else if (
                                  subItem.leagueDetailSettings
                                    .registerStatus === 'wait'
                                ) {
                                  status = 'Join Wait List';
                                } else {
                                  status = 'Closed';
                                }
                                return (
                                  <li key={`subI-${subIndex}`}>
                                    <Link
                                      href={
                                        subItem.leagueDetailSettings
                                          .registerStatus === 'open'
                                          ? 'https://app.lbaleagues.com/login?intent=apply'
                                          : '/join-waitlist'
                                      }
                                      className={`sport-link ${subItem.leagueDetailSettings.registerStatus}`}
                                    >
                                      <span className="sport-name-box">
                                        <span className="sport-name">
                                          {subItem?.title.split(' ')[0]}
                                        </span>
                                      </span>
                                      {subItem?.leagueDetailSettings
                                        ?.registerStatus && (
                                        <span className="sport-status-box">
                                          <span className="status">
                                            {status}
                                          </span>
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {mediaList?.nodes.length > 0 && (
        <div className="register-video-grid-section">
          <div className="media-video-grid-block md:px-2.5">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop
              centeredSlides={false}
              // pagination={{
              //     clickable: true,
              // }}
              breakpoints={{
                401: {
                  slidesPerView: 2.5,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              // modules={[Pagination]}
              className="register-video-grid-slider"
            >
              {mediaList?.nodes.map((item: any, index: any) => {
                return (
                  <SwiperSlide key={`mn-${index}`}>
                    <div className="media-video-box">
                      <div className="video-item">
                        <div className="overlay-play-btn">
                          {item?.mediaDetailSettings?.mediaVideo && (
                            <Link
                              href=""
                              onClick={() =>
                                handleVideoOpen(
                                  item.mediaDetailSettings.mediaVideo
                                )
                              }
                              className="play-btn"
                            >
                              <img
                                src="/assets/images/video-play-icon.svg"
                                alt="icon"
                              />
                            </Link>
                          )}
                        </div>
                        {item?.featuredImage?.node?.sourceUrl && (
                          <div className="img-box">
                            <img
                              src={item.featuredImage.node.sourceUrl}
                              alt="image"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}

      <div className="stay-loop-section">
        <div className="container mx-auto px-4">
          <div className="stay-loop-block">
            <h2 className="heading">Stay in the LBA loop</h2>
            <h4 className="sub-heading">Watch us on</h4>

            <ul className="social-links">
              {themeOptions?.whatsappLink && (
                <li>
                  <Link href={themeOptions.whatsappLink} target="_blank">
                    <img
                      src="/assets/images/whatsapp-icon1.svg"
                      alt="whatsapp"
                    />
                  </Link>
                </li>
              )}
              {themeOptions?.instagramLink && (
                <li>
                  <Link href={themeOptions.instagramLink} target="_blank">
                    <img
                      src="/assets/images/instagram-icon1.svg"
                      alt="instagram"
                    />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="video-modal-wrapper">
          <div
            className="video-bg-overlay"
            onClick={() => setShowModal(false)}
          />
          <div className="video-modal-block">
            {/* content */}
            <div className="video-modal-box">
              {/* body */}
              <div className="video-modal-card">
                <Plyr source={videoSource} options={videoOptions} autoPlay />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;

export async function getStaticProps() {
  const registerDetails = await GraphAPI.registerList();
  const themeOptions = await GraphAPI.themeOptions();
  const mediaList = await GraphAPI.mediaList();
  return {
    props: {
      registerDetails: registerDetails.data.data.leagueTypes,
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
      mediaList: mediaList.data.data.allLeagueMedia,
    },
  };
}
