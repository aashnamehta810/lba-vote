/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-param-reassign */
// Import Swiper styles
import 'plyr-react/plyr.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

// import required modules
import Plyr from 'plyr-react';
import { useEffect, useState } from 'react';
import { Autoplay, EffectFade, Navigation, Thumbs } from 'swiper';
import type { SwiperClass } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface LBASliderProps {
  data: any;
}

const LBASliderSection: React.FC<LBASliderProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const videoOptions = {
    autoplay: false,
    seekTime: 5,
    i18n: { rewind: 'Rewind 5s', fastForward: 'Forward 5s' },
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
    ],
  };
  const mainSwiperOptions = {
    modules: [Autoplay, Navigation, Thumbs, EffectFade],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade' as const,
    fadeEffect: {
      crossFade: true,
    },
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    speed: 800,
    parallax: true,
    autoplay: false,
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
  };

  const thumbnailSwiperOptions = {
    centeredSlides: false,
    centeredSlidesBounds: true,
    slidesPerView: 11,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    direction: 'vertical' as const,
    breakpoints: {
      0: {
        direction: 'horizontal' as const,
        spaceBetween: 0,
      },
      1280: {
        direction: 'vertical' as const,
      },
    },
  };

  useEffect(() => {
    const imgElements: NodeListOf<HTMLImageElement> =
      document.querySelectorAll('.thumb-img');
    imgElements.forEach((imgElement) => {
      imgElement.style.height = '70px';
    });
  }, []);

  return (
    <div className="leagues-infomation-slider-section">
      {data.lbaLeagueSlider && (
        <div className="leagues-infomation-slider-block">
          <Swiper className="leagues-main" {...mainSwiperOptions}>
            {data.lbaLeagueSlider.map((item: any, index: number) => {
              return (
                <SwiperSlide key={`slide-${index}`}>
                  <div className="league-infomation-block">
                    {item.sliderBgImage.sourceUrl && (
                      <div className="overlay-bg-img">
                        <img src={item.sliderBgImage.sourceUrl} alt="image" />
                      </div>
                    )}
                    <div className="container mx-auto px-4">
                      <div className="league-infomation-box flex flex-wrap items-center">
                        <div className="content-block w-full xl:w-1/2 flex items-center text-center flex-col">
                          {item.sliderLogo.sourceUrl && (
                            <div className="league-image-box">
                              <img
                                src={item.sliderLogo.sourceUrl}
                                alt="league image"
                              />
                            </div>
                          )}
                          <div className="content-box">
                            {item.sliderTitle && (
                              <h3 className="heading">{item.sliderTitle}</h3>
                            )}
                          </div>
                        </div>
                        {item?.sliderVideo?.mediaItemUrl && (
                          <div className="video-block w-full xl:w-1/2">
                            <div className="video-box relative">
                              <Plyr
                                source={{
                                  type: 'video',
                                  sources: [
                                    {
                                      src: item.sliderVideo.mediaItemUrl,
                                      type: 'video/mp4',
                                    },
                                  ],
                                }}
                                options={videoOptions}
                              />

                              <div className="title-overlay-box">
                                {item.sliderTitle && (
                                  <h3 className="heading">
                                    {item.sliderTitle}
                                  </h3>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-button-wrapper">
              <div className="swiper-button-prev">
                <img
                  src="assets/images/long-arrow-left.svg"
                  alt="long-arrow-left"
                />
              </div>
              <div className="swiper-button-next">
                <img
                  src="assets/images/long-arrow-right.svg"
                  alt="long-arrow-right"
                />
              </div>
            </div>
          </Swiper>

          <Swiper
            className="leagues-thumbs"
            onSwiper={setThumbsSwiper}
            {...thumbnailSwiperOptions}
          >
            {data.lbaLeagueSlider.map((item: any, index: number) => {
              return (
                <SwiperSlide key={`thumb-${index}`}>
                  {item.sliderLogo.sourceUrl && (
                    <img
                      className="thumb-img"
                      src={item.sliderLogo.sourceUrl}
                      alt="Slide 01"
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default LBASliderSection;
