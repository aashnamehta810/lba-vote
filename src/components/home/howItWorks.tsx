/* eslint-disable react/no-danger */
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import Link from 'next/link';
import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface HowItWorksProps {
  data?: any;
}
const HowItWorks: React.FC<HowItWorksProps> = ({ data }) => {
  const howItWorksOptions = {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 6,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        loop: true,
        centeredSlides: true,
      },
      768: {
        // spaceBetween: 15,
        slidesPerView: 2,
        loop: true,
      },
      1024: {
        // spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
      },
      1280: {
        // spaceBetween: 30,
        slidesPerView: 6,
      },
    },
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    document.querySelector('.how-works-slider')?.classList.add('hover');
    const parentElement = event.currentTarget;
    const descElement = parentElement.querySelector('.desc');
    if (descElement) {
      descElement.classList.add('hover');
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    document.querySelector('.how-works-slider')?.classList.remove('hover');
    const parentElement = event.currentTarget;
    const descElement = parentElement.querySelector('.desc');
    if (descElement) {
      descElement.classList.remove('hover');
    }
  };

  return (
    <div className="how-it-works-section">
      <div className="heading-block">
        <div className="container mx-auto">
          <div
            className="heading"
            dangerouslySetInnerHTML={{ __html: data.kickAboutTitle }}
          />
          {data.countMeInButtonLink && (
            <div className="btn-block text-center">
              <Link
                href={data.countMeInButtonLink}
                className="orangeOutline-btn"
              >
                <img src="assets/images/note-icon.svg" alt="icon" />
                <span>{data.countMeInButtonText}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      {data.kickAboutSlider && (
        <div className="how-works-slider-block">
          <Swiper className="how-works-slider" {...howItWorksOptions}>
            {data.kickAboutSlider.map((item: any, index: number) => {
              return (
                <SwiperSlide
                  key={`howItWorks-${index}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="slider-item-box">
                    {item.blockImage.sourceUrl && (
                      <div className="img-box">
                        <img src={item.blockImage.sourceUrl} alt="images" />
                      </div>
                    )}
                    <div className="overlay-content-box">
                      {item.blockTitle && (
                        <div
                          className="heading"
                          dangerouslySetInnerHTML={{
                            __html: item.blockTitle,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-button-wrapper xl:hidden">
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
                        fill="#EC7223"
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
                      fill="#EC7223"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
};
export default HowItWorks;
