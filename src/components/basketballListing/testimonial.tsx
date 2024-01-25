/* eslint-disable react/no-danger */
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import Lottie from 'lottie-react';
import starAnimation from 'public/assets/lottiefiles/97585-star.json';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface TestimonialProps {
  data?: any;
}

SwiperCore.use([Navigation, Pagination, EffectFade]);
const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  const testimonial = {
    modules: [Autoplay, EffectFade, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    pagination: {
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    parallax: true,
    grabCursor: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <div className="inner-testimonial-section">
      <div className="container mx-auto px-4">
        <div className="inner-testimonial-block">
          <div className="inner-testimonial-wrapper w-full ml-auto">
            {data.testimonials && (
              <Swiper className="inner-testimonial-slider" {...testimonial}>
                {data.testimonials.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={`testimonial-${index}`}>
                      <div className="testimonial-slide">
                        <div className="star-animation">
                          <Lottie animationData={starAnimation} loop autoplay />
                        </div>
                        <div className="content-box">
                          {item.testimonialDescription && (
                            <div
                              className="desc"
                              dangerouslySetInnerHTML={{
                                __html: item.testimonialDescription,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button-wrapper md:hidden">
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
    </div>
  );
};

export default Testimonial;
