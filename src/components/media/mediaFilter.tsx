import 'plyr-react/plyr.css';
import 'swiper/css';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Plyr from 'plyr-react';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import GraphAPI from '@/service/graphQL';

gsap.registerPlugin(ScrollTrigger);

interface MediaListProps {
  mediaList?: any;
  cat?: any;
}
const MediaFilter: React.FC<MediaListProps> = ({ mediaList, cat }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideoLink, setActiveVideoLink] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [media, setMedia] = useState(mediaList?.nodes);
  const handleInput = (e: any) => {
    setSearchText(e.target.value);
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (searchText) {
      const filterSearch = await GraphAPI.mediaSearchText(searchText);
      const result = filterSearch.data.data?.allLeagueMedia?.nodes || null;
      setMedia(result);
    }
  };
  const [addClass, setAddClass] = useState(
    'video-banner-section media-video-banner-section'
  );
  const videoOptions = {
    autoplay: true,
    seekTime: 5,
    i18n: { rewind: 'Rewind 5s', fastForward: 'Forward 5s' },
    controls: [
      'play-large',
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'fullscreen',
    ],
  };
  const videoSource: Plyr.SourceInfo = {
    type: 'video',
    sources: [
      {
        src: activeVideoLink || 'lntpE-MiEs4',
        provider: 'youtube',
      },
    ],
  };
  function divideArrayInHalf(arr: []) {
    const middleIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middleIndex);
    const secondHalf = arr.slice(middleIndex);
    return { firstHalf, secondHalf };
  }

  const handleVideoOpen = (videoLink: any) => {
    setShowModal(true);
    setActiveVideoLink(videoLink);
  };

  const handleMediaChange = async (e: any) => {
    const val = e.target.value;
    if (val) {
      const filterSearch = await GraphAPI.mediaSearch(val);
      const result =
        filterSearch.data.data?.leagueMediaCategory?.leagueMedia?.nodes || null;
      setMedia(result);
    }
  };
  const { firstHalf, secondHalf } = divideArrayInHalf(media);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAddClass(
        'video-banner-section media-video-banner-section video-active'
      );
    }, 3000);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.media-video-banner-section',
          start: 'top 90%',
          end: 'top ',
          markers: false,
          toggleActions: 'restart none none reset',
        },
      })

      // .to('.letter-box', {
      //   scale: 1,
      //   duration: 1,
      // })
      // .to('.full-heading-box', {
      //   opacity: 1,
      // })
      // .to('.letter-l', {
      //   left: '-41.2%',
      // })
      // .to('.letter-b', {
      //   left: '-9.65%',
      // })
      // .to('.letter-a', {
      //   left: '11.55%',
      // });

      .to('.letter-box', {
        scale: 1,
        duration: 1,
      });
    gsap.to('.full-heading-box', {
      opacity: 1,
      delay: 1.7,
    });
    gsap.to('.letter-l', {
      left: '-41.2%',
      delay: 1.7,
    });
    gsap.to('.letter-b', {
      left: '-9.65%',
      delay: 1.7,
    });
    gsap.to('.letter-a', {
      left: '11.55%',
      delay: 1.7,
    });

    return () => {
      clearTimeout(timeoutId);
    };
    // gsap.fromTo('.letter-box', {scale: 0},{duration: 5, scale: 1});
  }, []);

  return (
    <>
      <div className={addClass}>
        <div className="overlay-video-block">
          <video autoPlay muted loop>
            <source src="/assets/videos/all_web.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4">
          <div className="video-banner-block">
            <h1 className="banner-title text-center uppercase">
              <span className="full-heading-box">Lights, Ball, Action!</span>
              <span className="letter-box">
                <span className="single-letter letter-l">L</span>
                <span className="single-letter letter-b">B</span>
                <span className="single-letter letter-a">A</span>
              </span>
              <span className="mob-heading">Lights, Ball, Action!</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="container mx-auto px-4">
          <div className="filter-block">
            <form method="post" onSubmit={handleFormSubmit}>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  name="searchText"
                  value={searchText || ''}
                  onChange={handleInput}
                />
                <button type="button">
                  <img src="/assets/images/search.svg" alt="search icon" />
                </button>
              </div>
              {cat.length > 0 && (
                <div className="filter-dropdown-box">
                  <label>Filter by:</label>
                  <select onChange={handleMediaChange}>
                    <option value="" disabled selected>
                      Division
                    </option>
                    {cat.map((item: any, index: any) => {
                      return (
                        <option value={item.id} key={`option-${index}`}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      {media.length > 0 ? (
        <div className="media-video-grid-section">
          {firstHalf.length > 0 && (
            <div className="media-video-grid-block px-5">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop
                centeredSlides={false}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                  401: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    spaceBetween: 14,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                // modules={[Pagination]}
                className="media-video-grid-slider1"
              >
                {firstHalf.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={`mvb-${index}`}>
                      <div className="media-video-box">
                        <div className="video-item">
                          <div className="overlay-play-btn">
                            {item?.mediaDetailSettings?.mediaVideo && (
                              <Link
                                href=""
                                onClick={() =>
                                  handleVideoOpen(
                                    item.mediaDetailSettings.mediaVideo
                                  )
                                }
                                className="play-btn"
                              >
                                <img
                                  src="/assets/images/video-play-icon.svg"
                                  alt="icon"
                                />
                              </Link>
                            )}
                          </div>
                          {item?.featuredImage?.node?.sourceUrl && (
                            <div className="img-box">
                              <img
                                src={item.featuredImage.node.sourceUrl}
                                alt="image"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
          {secondHalf.length > 0 && (
            <div className="media-video-grid-block video-grid-block-nowrap">
              <div className="container mx-auto">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop
                  initialSlide={1}
                  centeredSlides={false}
                  // pagination={{
                  //     clickable: true,
                  // }}
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  breakpoints={{
                    401: {
                      slidesPerView: 2,
                      spaceBetween: 14,
                      // autoplay: false,
                    },
                    576: {
                      slidesPerView: 1.5,
                      centeredSlides: true,
                      spaceBetween: 14,
                      // autoplay: false,
                    },
                    992: {
                      slidesPerView: 2,
                      // autoplay: false,
                    },
                    1281: {
                      slidesPerView: 2,
                      // autoplay: false,
                      // centeredSlides: false,
                      // loop: true,
                      // roundLengths: true,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  className="media-video-grid-slider2"
                >
                  {secondHalf.map((item: any, index: any) => {
                    return (
                      <SwiperSlide key={`mvb-${index}`}>
                        <div className="media-video-box">
                          <div className="video-item">
                            <div className="overlay-play-btn">
                              {item?.mediaDetailSettings?.mediaVideo && (
                                <Link
                                  href=""
                                  onClick={() =>
                                    handleVideoOpen(
                                      item.mediaDetailSettings.mediaVideo
                                    )
                                  }
                                  className="play-btn"
                                >
                                  <img
                                    src="/assets/images/video-play-icon.svg"
                                    alt="icon"
                                  />
                                </Link>
                              )}
                            </div>
                            {item?.featuredImage?.node?.sourceUrl && (
                              <div className="img-box">
                                <img
                                  src={item.featuredImage.node.sourceUrl}
                                  alt="image"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  {secondHalf.length > 3 && (
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
                  )}
                </Swiper>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="no-media-text">
          <p>No Media Found!</p>
        </div>
      )}

      {showModal && (
        <div className="video-modal-wrapper">
          <div
            className="video-bg-overlay"
            onClick={() => setShowModal(false)}
          />
          <div className="video-modal-block">
            {/* content */}
            <div className="video-modal-box">
              {/* body */}
              <div className="video-modal-card">
                <Plyr source={videoSource} options={videoOptions} autoPlay />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaFilter;
