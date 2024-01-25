/* eslint-disable react/no-danger */
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

gsap.registerPlugin(ScrollTrigger);
interface AdrenalineProps {
  data: any;
}

const settingsB = {
  modules: [Autoplay, EffectFade],
  loop: true,
  slidesPerView: 3,
  slidestoscroll: 1,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 1000,
  pauseOnHover: false,
  cssease: 'linear',
  breakpoints: {
    0: {
      slidesPerView: 3.5,
      autoplay: false,
    },
    768: {
      slidesPerView: 2.8,
    },
    830: {
      slidesPerView: 3.2,
    },
    992: {
      slidesPerView: 2.4,
    },
    1024: {
      slidesPerView: 2.6,
    },
    1280: {
      slidesPerView: 3.5,
    },
  },
};

const Adrenaline: React.FC<AdrenalineProps> = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.action-advertising-section',
          start: 'top 50%',
          end: 'top 20%',
          markers: false,
          toggleActions: 'restart none none reset',
        },
      })

      .fromTo(
        '.action-advertising-block .desc-box p:nth-child(1)',
        {
          xPercent: 5,
          duration: 0.5,
          opacity: 0,
        },
        {
          xPercent: 0,
          duration: 0.5,
          opacity: 1,
        }
      )
      .fromTo(
        '.action-advertising-block .desc-box p:nth-child(2)',
        {
          xPercent: 5,
          duration: 0.5,
          opacity: 0,
        },
        {
          xPercent: 0,
          duration: 0.5,
          opacity: 1,
        }
      )
      .fromTo(
        '.action-advertising-block .desc-box p:nth-child(3)',
        {
          xPercent: 5,
          duration: 0.5,
          opacity: 0,
        },
        {
          xPercent: 0,
          duration: 0.5,
          opacity: 1,
        }
      );
  }, []);

  return (
    <div className="action-advertising-section">
      <div className="overlay-bg-img">
        <img src="assets/images/sports-img5-1.jpg" alt="image" />
      </div>
      {data.adrenalineSlider && (
        <div className="advertising-slider-section w-full xl:w-1/2 ml-auto absolute right-0 bottom-10">
          <Swiper {...settingsB} className="advertising-slider-block">
            {data.adrenalineSlider
              .concat(data.adrenalineSlider)
              .map((item: any, index: number) => {
                return (
                  <SwiperSlide key={`adrenaline-${index}`}>
                    <div className="advertising-image-box">
                      <img src={item.adrenalineImage.sourceUrl} alt="image" />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="action-advertising-block">
          <div className="content-block w-full xl:w-3/5 2xl:w-1/2 xl:pr-5">
            {data.adrenalineTitle && (
              <div
                className="heading"
                dangerouslySetInnerHTML={{
                  __html: data.adrenalineTitle,
                }}
              />
            )}
            {data.adrenalineDescription && (
              <div
                className="desc-box"
                dangerouslySetInnerHTML={{
                  __html: data.adrenalineDescription,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adrenaline;
