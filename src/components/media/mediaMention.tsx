import 'swiper/css';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

interface MediaMentionProps {
  data?: any;
}

const MediaMention: React.FC<MediaMentionProps> = ({ data }) => {
  return (
    <div className="media-mention-section">
      {/* <div className="media-sponsor-logo">
        <img className="tls-logo" src="/assets/images/tls-logo.svg" alt="TLS logo" />
      </div> */}
      <div className="overlay-bg-img">
        <img
          className="right-img"
          src="/assets/images/media-mention-bg-img.png"
          alt="image"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="media-mention-block">
          <div className="media-sponsor-logo">
            <img
              className="tls-logo"
              src="/assets/images/tls-media-logo.svg"
              alt="TLS logo"
            />
          </div>
          <div className="heading-box">
            <h2 className="heading">{data.mediaMentionTitle}</h2>
            <div className="desc">
              <p>{data.mediaMentionDescription}</p>
            </div>
          </div>
          {data?.mediaMentionBlocks.length > 0 && (
            <div className="media-mention-grid-block">
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                loop
                centeredSlides={false}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                  401: {
                    slidesPerView: 1.6,
                    centeredSlides: true,
                  },
                  576: {
                    slidesPerView: 2.5,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1281: {
                    slidesPerView: 3,
                    spaceBetween: 64,
                  },
                }}
                // modules={[Pagination]}
                className="media-mention-grid-slider"
              >
                {data?.mediaMentionBlocks.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={`media-${index}`}>
                      <div className="item-box">
                        {item?.mediaImage?.sourceUrl && (
                          <div className="img-box">
                            <img src={item.mediaImage.sourceUrl} alt="images" />
                          </div>
                        )}
                        <div className="content-box">
                          <span className="date">{item.mediaMentionDate}</span>
                          <h3 className="heading">{item.blockTitle}</h3>
                          {item?.mediaLink && (
                            <Link
                              href={item.mediaLink}
                              target="_blank"
                              className="view-more-btn"
                            >
                              View More
                            </Link>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MediaMention;
