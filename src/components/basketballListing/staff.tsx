import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface BasketBallStaffProps {
  data?: any;
}

const Staff: React.FC<BasketBallStaffProps> = ({ data }) => {
  return (
    <div className="staff-section">
      <div className="overlay-bg-img">
        <img
          className="top-img"
          src="/assets/images/staff-bg-img1.png"
          alt="image"
        />
        <img
          className="bottom-img"
          src="/assets/images/staff-bg-img2.png"
          alt="image"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="staff-block">
          {data.staffTitle && (
            <div className="heading-box text-center">
              <h2 className="heading">{data.staffTitle}</h2>
              {data.staffDescription && (
                <div className="desc">
                  <p>{data.staffDescription}</p>
                </div>
              )}
            </div>
          )}
          {data.staffBlocks && (
            <div className="staff-grid-block flex flex-wrap md:-mx-2">
              <Swiper
                slidesPerView={1.6}
                // spaceBetween={16}
                pagination={{
                  type: 'progressbar',
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                  },
                  360: {
                    slidesPerView: 1.5,
                  },
                  381: {
                    slidesPerView: 1.7,
                  },
                  430: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 2.2,
                  },
                  576: {
                    slidesPerView: 2.5,
                  },
                  600: {
                    slidesPerView: 2.8,
                  },
                  700: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
                modules={[Pagination]}
                className="staff-grid-slider"
              >
                {data.staffBlocks.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={`sd-${index}`}>
                      <div className="staff-card">
                        <div className="item-box">
                          {item.memberImage.sourceUrl && (
                            <div className="img-box">
                              <img
                                src={item.memberImage.sourceUrl}
                                alt="image"
                              />
                            </div>
                          )}
                          <div className="content-box">
                            {item.memberDesignation && (
                              <div className="social-share-box flex">
                                <span className="social-title">
                                  {item.memberDesignation}
                                </span>
                              </div>
                            )}
                            {item.memberName && (
                              <h4 className="staff-name">
                                <span>{item.memberName}</span>
                              </h4>
                            )}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="staff-count-box">
                <span className="staff-count-text">{`(${data.staffBlocks.length} staff members)`}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Staff;
