import 'swiper/css';
import 'swiper/css/bundle';

import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

interface AdultSliderProps {
  data?: any;
}

const AdultSlider: React.FC<AdultSliderProps> = ({ data }) => {
  const settingB = {
    modules: [Autoplay, Navigation],
    slidesPerView: 6.8,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      400: {
        slidesPerView: 2.5,
        centeredSlides: true,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 6.8,
      },
    },
  };
  return (
    <div className="gallery-slider-section" id="highlightSection">
      {data?.highlightImages.length > 0 && (
        <div className="gallery-slider-wrapper">
          <Swiper className="gallery-slider" {...settingB}>
            {data.highlightImages.map((item: any, index: any) => {
              return (
                <SwiperSlide key={`wd-${index}`}>
                  <div className="gallery-slide">
                    {item.highlightImage?.sourceUrl && (
                      <div className="image-box">
                        <img src={item.highlightImage?.sourceUrl} alt="image" />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {data?.highlightButtonLink && (
        <div className="gallery-cta-block">
          <Link
            className="orangeOutline-btn gallery-cta-btn"
            href={data.highlightButtonLink}
          >
            {data.highlightButtonText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdultSlider;
