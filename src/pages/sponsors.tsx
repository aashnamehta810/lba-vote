/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-lonely-if */
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'lottie-react';
import Link from 'next/link';
import countingAnimation from 'public/assets/lottiefiles/96524-counting-to-number-three.json';
import scrollDown from 'public/assets/lottiefiles/scroll_down.json';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Autoplay,
  EffectCards,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import GraphAPI from '@/service/graphQL';

interface SponsorProps {
  sponsorDetails?: any;
  themeOptions?: any;
}

gsap.registerPlugin(ScrollTrigger);
const Sponsors: React.FC<SponsorProps> = ({ sponsorDetails, themeOptions }) => {
  const { sponsorBlocks } = themeOptions;
  const partLength = Math.ceil(sponsorBlocks.length / 4);
  const part1 = sponsorBlocks.slice(0, partLength);
  const part2 = sponsorBlocks.slice(partLength, partLength * 2);
  const part3 = sponsorBlocks.slice(partLength * 2, partLength * 3);
  const part4 = sponsorBlocks.slice(partLength * 3);

  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef(null);

  const initSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };

  const scrollToSlide = (index: any) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleSwiperChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.sponsors-bnr-section',
          start: 'bottom 60%',
          end: 'bottom 20%',
          markers: false,
          toggleActions: 'restart none none reset',
        },
      })

      .to('.overlay-bg-block img', {
        scale: 1.3,
        opacity: 0,
        duration: 1,
      });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.billboard-ads-section',
          start: 'top bottom',
          end: 'bottom center',
          markers: false,
          toggleActions: 'restart none none reset',
        },
      })

      .to('.overlay-circle-box', {
        width: 3000,
        height: 3000,
      });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: '.billboard-ads-section',
          pin: true,
          start: 'top top',
          end: '+=1800 bottom',
          markers: false,
        });

        const billboardLinks = gsap.utils.toArray('.slider-custom-slide');
        billboardLinks.forEach((link: any, index: any) => {
          gsap.from(link, {
            scrollTrigger: {
              trigger: link,
              start: '+=300 80%',
              end: '+=320 65%',
              onToggle: (self: any) => {
                if (self.isActive) {
                  // Use Swiper to navigate to the desired slide
                  scrollToSlide(index); // Replace 'mySwiper' with your Swiper instance variable
                }
              },
              markers: false,
              // scrub: 0,
            },
          });
        });
      });

      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        ScrollTrigger.create({
          trigger: '.billboard-ads-section',
          pin: true,
          start: 'top top',
          end: '+=1800 bottom',
          markers: false,
        });

        const billboardLinks = gsap.utils.toArray('.slider-custom-slide');
        billboardLinks.forEach((link: any, index: any) => {
          gsap.from(link, {
            scrollTrigger: {
              trigger: link,
              start: 'top 60%',
              end: '20% center',
              onToggle: (self: any) => {
                if (self.isActive) {
                  // Use Swiper to navigate to the desired slide
                  scrollToSlide(index); // Replace 'mySwiper' with your Swiper instance variable
                }
              },
              markers: false,
              // scrub: 0,
            },
          });
        });
      });

      mm.add('(max-width: 767px)', () => {
        ScrollTrigger.create({
          trigger: '.billboard-ads-section',
          pin: true,
          start: 'top top',
          end: '+=1400 bottom',
          markers: false,
        });

        const billboardLinks = gsap.utils.toArray('.slider-custom-slide');
        billboardLinks.forEach((link: any, index: any) => {
          gsap.from(link, {
            scrollTrigger: {
              trigger: link,
              start: 'top center',
              end: '+=50 40%',
              onToggle: (self: any) => {
                if (self.isActive) {
                  // Use Swiper to navigate to the desired slide
                  scrollToSlide(index); // Replace 'mySwiper' with your Swiper instance variable
                }
              },
              markers: false,
              // scrub: 0,
            },
          });
        });
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);
  return (
    <>
      <div className="sponsors-bnr-section" id="sponsors-bnr-section">
        <div className="overlay-bg-block">
          <img
            className="left-img"
            src="/assets/images/sponsor-bnr-boy-img1.png"
            alt="image"
          />
          <img
            className="right-img"
            src="/assets/images/sponsor-bnr-img2.png"
            alt="image"
          />
        </div>

        <div className="scrolldown">
          <Link href="#billboardAdsSection">
            <Lottie animationData={scrollDown} loop autoplay />
          </Link>
        </div>
        {sponsorDetails.bannerTitle && (
          <div className="container mx-auto px-4">
            <div className="sponsors-banner-block">
              <div
                className="banner-title text-center uppercase"
                dangerouslySetInnerHTML={{ __html: sponsorDetails.bannerTitle }}
              />
            </div>
          </div>
        )}
      </div>

      <div id="billboardAdsSection" className="billboard-ads-section">
        <div className="overlay-circle-box" />
        <div className="billboard-ads-block">
          <div className="heading-block">
            <div className="container mx-auto px-4">
              {sponsorDetails.billboardTitle && (
                <div
                  className="heading"
                  dangerouslySetInnerHTML={{
                    __html: sponsorDetails.billboardTitle,
                  }}
                />
              )}
            </div>
          </div>
          <div className={`billboard-slider-wrapper slide-${activeSlide}`}>
            {sponsorDetails.billboardRightImage.sourceUrl && (
              <div className="overlay-img-right overlay-box">
                <img
                  src={sponsorDetails.billboardRightImage.sourceUrl}
                  alt="image"
                />
              </div>
            )}
            {sponsorDetails.billboardLeftImages && (
              <div className="overlay-img-left overlay-box">
                {sponsorDetails.billboardLeftImages.map(
                  (item: any, index: any) => {
                    return (
                      <img
                        className={`image-${index + 1}`}
                        src={item.billboardImage.sourceUrl}
                        alt="image"
                        key={`bi-${index}`}
                      />
                    );
                  }
                )}
              </div>
            )}
            {sponsorDetails.billboardSlides && (
              <Swiper
                slidesPerView={3}
                centeredSlides
                // spaceBetween={77}

                // keyboard={{
                //   enabled: true,
                // }}
                // mousewheel={{
                //   releaseOnEdges: true,
                // }}
                // mousewheel
                direction="vertical"
                // pagination={{
                //   clickable: true,
                // }}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Keyboard, Mousewheel, Pagination, Navigation]}
                className="billboard-swiper"
                onSwiper={initSwiper}
                onSlideChange={handleSwiperChange}
                // onReachEnd={handleSlideEnd}
                breakpoints={{
                  0: {
                    slidesPerView: 5,
                    autoplay: false,
                    navigation: false,
                    spaceBetween: 30,
                  },
                  480: {
                    slidesPerView: 5,
                    autoplay: false,
                    navigation: false,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    autoplay: false,
                    navigation: false,
                    spaceBetween: 0,
                  },
                }}
              >
                {sponsorDetails.billboardSlides.map((item: any, index: any) => {
                  return (
                    <SwiperSlide
                      className="slider-custom-slide"
                      key={`sl-${index}`}
                    >
                      <div className="slide-item">
                        <div className="heading-box">
                          <div
                            className="slide-heading"
                            dangerouslySetInnerHTML={{
                              __html: item.billboardSlideTitle,
                            }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                <div className="swiper-button-wrapper hidden">
                  <div className="slider-button swiper-button-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.586"
                      height="17.655"
                      viewBox="0 0 20.586 17.655"
                    >
                      <g id="left-arrow" transform="translate(0 -31.842)">
                        <g
                          id="Group_21"
                          data-name="Group 21"
                          transform="translate(0 31.842)"
                        >
                          <path
                            id="Path_8"
                            data-name="Path 8"
                            d="M19.349,39.224a1.472,1.472,0,0,0-.255-.019H4.571l.317-.147a2.946,2.946,0,0,0,.832-.589L9.792,34.4a1.524,1.524,0,0,0,.214-1.952A1.473,1.473,0,0,0,7.8,32.253L.432,39.618a1.473,1.473,0,0,0,0,2.083h0L7.8,49.067a1.473,1.473,0,0,0,2.209-.147,1.524,1.524,0,0,0-.214-1.952l-4.065-4.08a2.946,2.946,0,0,0-.736-.538l-.442-.2H19.013a1.525,1.525,0,0,0,1.554-1.237A1.473,1.473,0,0,0,19.349,39.224Z"
                            transform="translate(0 -31.842)"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="slider-button swiper-button-next">
                    <svg
                      id="right-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.586"
                      height="17.655"
                      viewBox="0 0 20.586 17.655"
                    >
                      <g
                        id="Group_21"
                        data-name="Group 21"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_8"
                          data-name="Path 8"
                          d="M1.237,39.224a1.472,1.472,0,0,1,.255-.019H16.015l-.317-.147a2.946,2.946,0,0,1-.832-.589L10.794,34.4a1.524,1.524,0,0,1-.214-1.952,1.473,1.473,0,0,1,2.209-.191l7.365,7.365a1.473,1.473,0,0,1,0,2.083h0l-7.365,7.365a1.473,1.473,0,0,1-2.209-.147,1.524,1.524,0,0,1,.214-1.952l4.065-4.08a2.946,2.946,0,0,1,.736-.538l.442-.2H1.573A1.525,1.525,0,0,1,.019,40.914,1.473,1.473,0,0,1,1.237,39.224Z"
                          transform="translate(0 -31.842)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Swiper>
            )}
          </div>
        </div>
      </div>

      <div className="choose-all-section" id="choose-all">
        <div className="choose-all-block">
          <div className="heading-box">
            <div className="container mx-auto px-4">
              {sponsorDetails.chooseTitle && (
                <h2 className="heading">{sponsorDetails.chooseTitle}</h2>
              )}
              {sponsorDetails.chooseDescription && (
                <div className="desc">
                  <p>{sponsorDetails.chooseDescription}</p>
                </div>
              )}
            </div>
          </div>
          {sponsorDetails.chooseImage && (
            <div className="image-block">
              <div className="img-box">
                <img
                  className="desktop-img hidden md:block"
                  src={sponsorDetails?.chooseImage?.sourceUrl}
                  alt="image"
                />
                <img
                  className="mobile-img md:hidden"
                  src={sponsorDetails?.chooseMobileImage?.sourceUrl}
                  alt="image"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sponsor-team-noticed-section">
        <div className="container mx-auto px-4">
          <div className="sponsor-team-noticed-block">
            <div
              className="heading"
              dangerouslySetInnerHTML={{
                __html: sponsorDetails.sponsorTeamNoticeTitle,
              }}
            />
            {sponsorDetails.sponsorTeamNoticeBlocks && (
              <div className="sponsor-team-noticed-grid-block">
                {sponsorDetails.sponsorTeamNoticeBlocks.map(
                  (item: any, index: any) => {
                    return (
                      <div
                        key={`tl-${index}`}
                        className="gird-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                      >
                        <div className="flip-box">
                          <div className="flip-box-front">
                            <div className="inner">
                              {item.blockTitle && <p>{item.blockTitle}</p>}
                            </div>
                          </div>
                          <div className="flip-box-back">
                            <div className="inner">
                              {item.blockFlipTitle && (
                                <p>{item.blockFlipTitle}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sponsor-plus-section">
        <div className="container mx-auto px-4">
          <div className="sponsor-plus-block">
            {sponsorDetails.plusTitle && (
              <div className="heading-box">
                <h2 className="heading text-center">
                  {sponsorDetails.plusTitle}
                </h2>
              </div>
            )}
            {sponsorDetails.plusGrids && (
              <div className="plus-grid-block flex flex-wrap -mx-5 xl:-mx-2">
                {sponsorDetails.plusGrids.map((item: any, index: any) => {
                  return (
                    <div
                      className="grid-item w-full md:w-1/2 xl:w-1/4 px-5 xl:px-2"
                      key={`fg-${index}`}
                    >
                      <div className="item-box">
                        {item.gridImage.sourceUrl && (
                          <div className="img-box">
                            <img src={item.gridImage.sourceUrl} alt="icon" />
                          </div>
                        )}
                        <div className="content-box">
                          {item.gridTitle && (
                            <h4 className="heading">{item.gridTitle}</h4>
                          )}
                          {item.gridDescription && (
                            <div className="desc">
                              <p>{item.gridDescription}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {sponsorDetails.fullDetailLink && (
              <div className="btn-box">
                <Link href={sponsorDetails.fullDetailLink}>
                  <span>{sponsorDetails.fullDetailButton}</span>
                  <img src="/assets/images/long-right-arrow.svg" alt="icon" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {sponsorDetails.lbaMarketingSlider && (
        <div className="sponsor-testimonial-section">
          <div className="container mx-auto px-4">
            <div className="sponsor-testimonial-block">
              <div className="heading-block w-full lg:w-1/2">
                <div className="heading-box">
                  <div
                    className="heading"
                    dangerouslySetInnerHTML={{
                      __html: sponsorDetails.lbaMarketingHeading,
                    }}
                  />
                </div>
              </div>
              <div className="sponsor-testiminial-block w-full lg:w-1/2">
                <div className="sponsor-testiminial-box">
                  <div className="mockup-box">
                    <img
                      src="/assets/images/s-testimonial-mockup-bg.png"
                      alt="image"
                    />

                    <div className="overlay-img">
                      <img
                        src="/assets/images/lba-group-logo.png"
                        alt="LBA logos"
                      />
                    </div>
                  </div>
                  <Swiper
                    effect="cards"
                    grabCursor
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectCards, Pagination]}
                    className="sponsor-testimonial"
                  >
                    {sponsorDetails.lbaMarketingSlider.map(
                      (item: any, index: any) => {
                        return (
                          <SwiperSlide key={`vf-${index}`}>
                            <div className="testimonial-content-box">
                              <div
                                className="testimonial-desc"
                                dangerouslySetInnerHTML={{
                                  __html: item.testimonialContent,
                                }}
                              />
                              {sponsorDetails.author && (
                                <div className="auther-info">
                                  <strong>{sponsorDetails.author}</strong>
                                </div>
                              )}
                            </div>
                          </SwiperSlide>
                        );
                      }
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="key-benefit-section">
        <div className="overlay-img">
          <img src="/assets/images/key-benefit-bg-img.png" alt="image" />
        </div>
        <div className="container mx-auto px-4">
          <div className="key-benefit-block">
            <div className="heading-box">
              <div className="counting-animation">
                <Lottie animationData={countingAnimation} loop autoplay />
              </div>
              {sponsorDetails.keyBenefitsTagLine && (
                <h4 className="small-heading">
                  {sponsorDetails.keyBenefitsTagLine}
                </h4>
              )}
              {sponsorDetails.keyBenefitsTitle && (
                <div
                  className="heading"
                  dangerouslySetInnerHTML={{
                    __html: sponsorDetails.keyBenefitsTitle,
                  }}
                />
              )}
            </div>
            {sponsorDetails.keyBenefitsBlock && (
              <div className="key-benefit-content-block">
                {sponsorDetails.keyBenefitsBlock.map(
                  (item: any, index: any) => {
                    return (
                      <div className="benefit-item-box" key={`bf-${index}`}>
                        <div className="benefit-heading-box w-full lg:w-1/2">
                          {item.keyTitle && (
                            <h3 className="heading">{item.keyTitle}</h3>
                          )}
                          {item?.keyHoverImage?.sourceUrl && (
                            <div className="hover-img">
                              <img
                                src={item.keyHoverImage.sourceUrl}
                                alt="image"
                              />
                            </div>
                          )}
                        </div>
                        {item.keyDescription && (
                          <div className="benefit-content-box w-full lg:w-1/2">
                            <div className="desc">
                              <p>{item.keyDescription}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {sponsorDetails.speechBlocks && (
        <div className="speechbox-section">
          <div className="container mx-auto px-4">
            <div className="speechbox-block">
              {sponsorDetails.speechBlocks.map((item: any, index: any) => {
                return (
                  <div className="speechbox-item" key={`si-${index}`}>
                    <div className="item-box">
                      <div
                        className="speech-text"
                        dangerouslySetInnerHTML={{
                          __html: item.speechDescription,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="sponsor-brand-section">
        <div className="heading-box">
          <div className="container mx-auto px-4">
            {sponsorDetails.sponsorTitle && (
              <div
                className="heading"
                dangerouslySetInnerHTML={{
                  __html: sponsorDetails.sponsorTitle,
                }}
              />
            )}
          </div>
        </div>

        {themeOptions.sponsorBlocks && (
          <div className="sponsors-slider-block">
            {part1 && (
              <div className="sponsors-slider-box">
                {part1.map((item: any, index: any) => {
                  return (
                    <div className="sponsor-box" key={`sb-${index}`}>
                      {item.sponsorImage.sourceUrl && (
                        <img
                          className="default-img"
                          src={item.sponsorImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                      {item.sponsorHoverImage.sourceUrl && (
                        <img
                          className="hover-img"
                          src={item.sponsorHoverImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {part2 && (
              <div className="sponsors-slider-box">
                {part2.map((item: any, index: any) => {
                  return (
                    <div className="sponsor-box" key={`sb-${index}`}>
                      {item.sponsorImage.sourceUrl && (
                        <img
                          className="default-img"
                          src={item.sponsorImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                      {item.sponsorHoverImage.sourceUrl && (
                        <img
                          className="hover-img"
                          src={item.sponsorHoverImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {part3 && (
              <div className="sponsors-slider-box">
                {part3.map((item: any, index: any) => {
                  return (
                    <div className="sponsor-box" key={`sb-${index}`}>
                      {item.sponsorImage.sourceUrl && (
                        <img
                          className="default-img"
                          src={item.sponsorImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                      {item.sponsorHoverImage.sourceUrl && (
                        <img
                          className="hover-img"
                          src={item.sponsorHoverImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {part4 && (
              <div className="sponsors-slider-box">
                {part4.map((item: any, index: any) => {
                  return (
                    <div className="sponsor-box" key={`sb-${index}`}>
                      {item.sponsorImage.sourceUrl && (
                        <img
                          className="default-img"
                          src={item.sponsorImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                      {item.sponsorHoverImage.sourceUrl && (
                        <img
                          className="hover-img"
                          src={item.sponsorHoverImage.sourceUrl}
                          alt="sponsor-image"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        <div className="bottom-heading-block">
          <div className="container mx-auto px-4">
            <div className="bottom-heading-box">
              <div className="content-box">
                {sponsorDetails.homeRunTitle && (
                  <div className="heading">
                    <h2>{sponsorDetails.homeRunTitle}</h2>
                  </div>
                )}
              </div>
              {sponsorDetails.homeRunLink && (
                <div className="btn-box">
                  <Link
                    href={sponsorDetails.homeRunLink}
                    className="orange-btn"
                  >
                    <img src="/assets/images/megaphone-icon.svg" alt="icon" />
                    <span>{sponsorDetails.homeRunButtonText}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sponsorship-available-section">
        <div className="container mx-auto px-4">
          <div className="sponsorship-available-block">
            <div className="heading-box">
              {sponsorDetails.sponsorshipTitle && (
                <div
                  className="heading"
                  dangerouslySetInnerHTML={{
                    __html: sponsorDetails.sponsorshipTitle,
                  }}
                />
              )}
            </div>

            {sponsorDetails.sponsorshipBlocks && (
              <div className="sponsorship-available-grid-block">
                {sponsorDetails.sponsorshipBlocks.map(
                  (item: any, index: any) => {
                    return (
                      <div className="grid-item" key={`gd-${index}`}>
                        <div className="item-box">
                          {item.blockImage.sourceUrl && (
                            <div className="overlay-img-box">
                              <img
                                src={item.blockImage.sourceUrl}
                                alt="image"
                              />
                            </div>
                          )}
                          <div className="title-box">
                            {item.blockLogo.sourceUrl && (
                              <div className="sport-logo">
                                <img
                                  src={item.blockLogo.sourceUrl}
                                  alt="image"
                                />
                              </div>
                            )}
                            {item.blockTitle && (
                              <div className="card-heading">
                                <h4>{item.blockTitle}</h4>
                              </div>
                            )}
                          </div>
                          {item.blockListPoints.length > 0 && (
                            <ul className="usp-list">
                              {item.blockListPoints.map(
                                (subItem: any, subIndex: any) => {
                                  return (
                                    <li key={`we-${subIndex}`}>
                                      <span>{subItem.listPoint}</span>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}

            <div className="bottom-heading-box">
              {sponsorDetails.sponsorshipBottomTitle && (
                <div className="bottom-heading">
                  <h2>{sponsorDetails.sponsorshipBottomTitle}</h2>
                </div>
              )}
              <Link href="/contact" className="orange-btn">
                <img
                  src="/assets/images/arrow-top-right-up-white.svg"
                  alt="icon"
                />
                <span>Grab your team now!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sponsorship-form-section">
        <div className="container mx-auto px-4">
          <iframe
            src="https://app.lbaleagues.com/sponsor"
            height="2150px"
            width="100%"
            title="Iframe Example"
            className="sponsorIframe relative"
          />
          {/* <div className="sponsorship-form-block" id="sponsorshipFormBlock">
            <div className="heading-box">
              <h2 className="heading">SPONSOR A TEAM</h2>
              <h4 className="sub-heading">and broadcast your business.</h4>
              <p className="desc">Fill in the form below.</p>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="companyName">Company name*</label>
                <input id="companyName" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">full name*</label>
                <input id="fullName" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input id="email" type="mail" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">phone*</label>
                <input id="phone" type="text" />
              </div>
              {/* <div className="form-group">
                <label htmlFor="message">message*</label>
                <textarea id="message" />
              </div> */}

          {/* <button
                type="submit"
                className="orangeOutline-btn contact-form-btn"
              >
                <span>Count me in</span>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sponsors;

export async function getStaticProps() {
  const sponsorDetails = await GraphAPI.sponsorSettings();
  const themeOptions = await GraphAPI.themeOptions();
  return {
    props: {
      sponsorDetails: sponsorDetails.data.data.pageBy.sponsorSettings,
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
    },
  };
}
