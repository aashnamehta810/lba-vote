import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

interface TestimonialOptions {
  slidesPerView: number;
  spaceBetween: number;
  centeredSlides: boolean;
  loop: boolean;
  effect: 'fade';
  speed: 1000;
  parallax: true;
  autoplay: {
    delay: 2500;
    disableOnInteraction: false;
  };
  pagination: {
    el: string;
    clickable: boolean;
  };
  navigation: {
    nextEl: string;
    prevEl: string;
  };
}

interface TestimonialsProps {
  data: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const testimonialOptions: TestimonialOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    effect: 'fade',
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <div className="testimonial-slider-section">
      {data.testimonialBlock && (
        <div className="testimonial-slider-block">
          <div className="container mx-auto px-4">
            {data.testimonialTitle && (
              <div className="heading-box">
                <h2 className="testimonial-heading">{data.testimonialTitle}</h2>
              </div>
            )}
          </div>
          <Swiper className="testimonial-slider" {...testimonialOptions}>
            {data.testimonialBlock.map((item: any, index: number) => {
              return (
                <SwiperSlide key={`testimonial-${index}`}>
                  <div className="testimonial-slide">
                    <div className="testimonial-content-block">
                      <div className="container mx-auto px-4">
                        <div className="testimonial-content-box">
                          {item.testimonialBlockTitle && (
                            <h4 className="heading">
                              "{item.testimonialBlockTitle}
                            </h4>
                          )}
                          {item.testimonialBlockDescription && (
                            <div className="desc">
                              <p>
                                {item.testimonialBlockDescription}
                                <span className="quote-end">"</span>
                              </p>
                            </div>
                          )}
                          {item.author && (
                            <div className="auther-info-box">
                              <h3 className="auther-name">-{item.author}</h3>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {item.testimonialBlockImage.sourceUrl && (
                      <div className="testimonial-img-block">
                        <img
                          src={item.testimonialBlockImage.sourceUrl}
                          alt="image"
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-pagination-wrapper flex justify-center">
              <div className="container mx-auto px-4">
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="swiper-button-wrapper">
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
        </div>
      )}
    </div>
  );
};

export default Testimonials;
