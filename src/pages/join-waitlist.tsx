import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import GraphAPI from '@/service/graphQL';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

interface WaitListProps {
  homeDetails?: any;
}

const WaitList: React.FC<WaitListProps> = ({ homeDetails }) => {
  return (
    <div className="waitlist-main-section">
      <div className="container mx-auto px-4">
        <div className="waitlist-main-wrapper">
          <div className="waitlist-form-block">
            <div className="waitlist-form-box">
              <div className="waitlist-form-heading-box">
                <h3 className="small-heading">join waitlist</h3>
                <h1 className="heading">Be First in Line</h1>
                <div className="desc">
                  <p>
                    Fill out your details and we’ll get back to you as soon as a
                    place becomes available.
                  </p>
                </div>
              </div>

              <form>
                <div className="form-row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">first name*</label>
                      <input id="firstName" type="text" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last name*</label>
                      <input id="lastName" type="text" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">email*</label>
                      <input id="email" type="email" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">phone*</label>
                      <input id="phone" type="text" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="grade">Grade</label>
                      <input id="grade" type="text" />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>sports</label>
                      <div className="custom-checkbox-group">
                        <span className="custom-checkbox-field">
                          <input id="basketball" type="checkbox" />
                          <label htmlFor="basketball">Basketball</label>
                        </span>
                        <span className="custom-checkbox-field">
                          <input id="football" type="checkbox" />
                          <label htmlFor="football">Football</label>
                        </span>
                        <span className="custom-checkbox-field">
                          <input id="bowling" type="checkbox" />
                          <label htmlFor="bowling">Bowling</label>
                        </span>
                        <span className="custom-checkbox-field">
                          <input id="baseball" type="checkbox" />
                          <label htmlFor="baseball">Baseball</label>
                        </span>
                        <span className="custom-checkbox-field">
                          <input id="volleyball" type="checkbox" />
                          <label htmlFor="volleyball">Volleyball</label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="orangeOutline-btn waitlist-form-btn"
                >
                  <span>submit</span>
                </button>
              </form>
            </div>
          </div>
          {homeDetails?.testimonialBlock.length > 0 && (
            <div className="waitlist-testimonial-block">
              <div className="testimonial-content-block">
                <div className="waitlist-testimonial-slider-box">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={false}
                    loop
                    effect="fade"
                    speed={1000}
                    parallax
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    // autoplay={false}
                    // pagination={{
                    //   el: '.swiper-pagination',
                    //   clickable: true,
                    // }}
                    pagination={false}
                    modules={[Autoplay, EffectFade, Pagination]}
                    className="waitlist-testimonial-slider"
                  >
                    {homeDetails.testimonialBlock.map(
                      (item: any, index: any) => {
                        return (
                          <SwiperSlide key={`testimonial-${index}`}>
                            <div className="testimonial-slide">
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
                                  <div className="auther-info-box absolute bottom-0">
                                    <h3 className="auther-name">
                                      -{item.author}
                                    </h3>
                                  </div>
                                )}
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      }
                    )}

                    <div className="swiper-pagination-wrapper flex justify-center">
                      <div className="swiper-pagination" />
                    </div>
                  </Swiper>
                </div>
                <div className="overlay-img-box">
                  <img
                    src="/assets/images/waitlist-overlay-img.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitList;

export async function getStaticProps() {
  const homeDetails = await GraphAPI.homeSettings();

  return {
    props: {
      homeDetails: homeDetails.data.data.pageBy.homeSettings,
    },
  };
}
