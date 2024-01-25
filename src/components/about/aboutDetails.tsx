/* eslint-disable react/no-danger */
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'lottie-react';
import Link from 'next/link';
import revolutionAnimation from 'public/assets/lottiefiles/96465-revolution.json';
import scrollDownLine from 'public/assets/lottiefiles/113442-scroll-down.json';
import highFiveAnimation from 'public/assets/lottiefiles/121845-high-five.json';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CustomCounter from '../customCounter/customCounter';

gsap.registerPlugin(ScrollTrigger);
interface AboutProps {
  data?: any;
  themeOptions?: any;
}

const AboutDetails: React.FC<AboutProps> = ({ data, themeOptions }) => {
  const partLength = Math.ceil(data.parallexBlocks.length / 2);

  const part1 = data.parallexBlocks.slice(0, partLength);
  const part2 = data.parallexBlocks.slice(partLength);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  useEffect(() => {
    const element = document.getElementById('rev-head');
    if (inView) {
      if (element) {
        element.classList.add('active');
      }
    } else if (element) {
      element.classList.remove('active');
    }
  }, [inView]);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.game-serious-section',
          start: 'top 60%',
          end: 'top 20%',
          markers: false,
          toggleActions: 'restart none none reset',
        },
      })

      // .to('.player-img', { scale: 1.15, xPercent: -50,  duration: 0.5 })
      // .to('.player-img', { scale: 1.15, duration: 0.5 })

      .to('.big-softball', {
        rotation: 360,
        xPercent: 0,
        right: '38%',
        top: '-88px',
        // yPercent: '-5',
        scale: 0.2,
        duration: 2,
      })

      .to('.big-softball-small-desktop', {
        rotation: 360,
        xPercent: 0,
        right: '40%',
        top: '-24px',
        // yPercent: '-5',
        scale: 0.3,
        duration: 2,
      })
      .to('.big-softball-tablet', {
        rotation: 360,
        xPercent: 0,
        right: '40%',
        top: '-24px',
        // yPercent: '-5',
        scale: 0.3,
        duration: 2,
      })
      .to('.big-softball-mobile', {
        rotation: 360,
        xPercent: 0,
        right: '34%',
        top: '-8px',
        // yPercent: '-5',
        scale: 0.5,
        duration: 2,
      });
  }, []);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    let parentElement = event.currentTarget as HTMLElement;
    while (parentElement.parentElement) {
      parentElement = parentElement.parentElement;
      if (parentElement.classList.contains('team-sponsor-section')) {
        parentElement.classList.add('team-hover');
        break;
      }
    }
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    let parentElement = event.currentTarget as HTMLElement;
    while (parentElement.parentElement) {
      parentElement = parentElement.parentElement;
      if (parentElement.classList.contains('team-sponsor-section')) {
        parentElement.classList.remove('team-hover');
        break;
      }
    }
  };

  const handleSponsorEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    let parentElement = event.currentTarget as HTMLElement;
    while (parentElement.parentElement) {
      parentElement = parentElement.parentElement;
      if (parentElement.classList.contains('team-sponsor-section')) {
        parentElement.classList.add('sponsor-hover');
        break;
      }
    }
  };

  const handleSponsorLeave = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    let parentElement = event.currentTarget as HTMLElement;
    while (parentElement.parentElement) {
      parentElement = parentElement.parentElement;
      if (parentElement.classList.contains('team-sponsor-section')) {
        parentElement.classList.remove('sponsor-hover');
        break;
      }
    }
  };

  return (
    <>
      <div className="about-hero-bnr-section">
        <div className="overlay-video-box">
          <div className="overlay-box" />
          {data?.bannerVideo?.mediaItemUrl && (
            <video autoPlay muted loop>
              <source src={data.bannerVideo.mediaItemUrl} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="overlay-bg-img">
          <img src="/assets/images/about-bnr-overlay-img.png" alt="image" />
        </div>

        <div className="scrolldown-line">
          <Link href="#windDownSection">
            <Lottie animationData={scrollDownLine} loop autoplay />
          </Link>
        </div>

        <div className="container mx-auto px-4">
          <div className="hero-bnr-block ">
            <div className="bnr-content-block w-full xl:w-1/2 text-center xl:text-left mb-10 xl:mb-0">
              {data.bannerTagline && (
                <strong className="small-heading">{data.bannerTagline}</strong>
              )}
              {data.bannerTitle && (
                <div
                  className="bnr-title"
                  dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                />
              )}
              <ul className="bnr-btn-links">
                {data.marketingButtonLink && (
                  <li>
                    <img
                      src="/assets/images/arrow-top-right-up.svg"
                      alt="arrow icon"
                    />
                    <Link href={data.marketingButtonLink}>
                      {data.marketingButtonText}
                    </Link>
                  </li>
                )}
                {data.mediaButtonLink && (
                  <li>
                    <img
                      src="/assets/images/arrow-top-right-up.svg"
                      alt="arrow icon"
                    />
                    <Link href={data.mediaButtonLink}>
                      {data.mediaButtonText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        id="windDownSection"
        className="wind-down-section text-center"
        ref={ref}
      >
        <div className="container mx-auto px-4">
          <div className="wind-down-block">
            {data.windDownTitle && (
              <div
                className="heading"
                id="rev-head"
                dangerouslySetInnerHTML={{ __html: data.windDownTitle }}
              />
            )}
            {data.windDownDescription && (
              <div className="desc-box">
                <p>{data.windDownDescription}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="plus-more-section">
        <div className="bg-image-box">
          <img
            className="desktop-img"
            src="/assets/images/plus-more-bg-img1.png"
            alt="image"
          />
          <img
            className="mobile-img"
            src="/assets/images/plus-more-bg-mob-img1.png"
            alt="image"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="plus-more-block w-full lg:w-1/2 ml-auto">
            <div className="content-box">
              {data.plusMoreTagline && (
                <p className="desc">{data.plusMoreTagline}</p>
              )}
              {data.plusMoreTitle && (
                <div
                  className="heading"
                  dangerouslySetInnerHTML={{
                    __html: data.plusMoreTitle,
                  }}
                />
              )}
              {data.plusMoreDescription && (
                <p className="desc">{data.plusMoreDescription}</p>
              )}
              {data.joinButtonLink && (
                <Link href={data.joinButtonLink} className="orangeOutline-btn">
                  <span>{data.joinButtonText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-main-section">
        <div className="lakewood-loves-section">
          <div className="container mx-auto px-4">
            <div className="lakewood-loves-block  mb-6 md:mb-16 xl:mb-32">
              {data.lakewoodTitle && (
                <h2 className="heading text-center">{data.lakewoodTitle}</h2>
              )}
              {data.lakewoodBlocks && (
                <div className="lakewood-grid-block flex flex-wrap -mx-5 xl:-mx-9">
                  {data.lakewoodBlocks.map((item: any, index: any) => {
                    return (
                      <div
                        className="grid-item w-full lg:w-1/3 px-5 xl:px-9"
                        key={`lb-${index}`}
                      >
                        <div className="item-box">
                          {item.blockIcon.sourceUrl && (
                            <div className="img-box">
                              <img src={item.blockIcon.sourceUrl} alt="icon" />
                            </div>
                          )}
                          <div className="content-box">
                            <h4 className="heading">{item.blockTitle}</h4>
                            <strong className="sub-heading">
                              {item.blockTagline}
                            </strong>
                            <div className="desc">
                              <p>{item.blockDescription}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {themeOptions.counterBlocks && (
              <div className="about-counter-block flex flex-wrap justify-between xl:px-10">
                {themeOptions.counterBlocks.map((item: any, index: any) => {
                  return (
                    <div className="counter-box" key={`cbh-${index}`}>
                      <CustomCounter target={Number(item.count)} />
                      <span className="counter-name">{item.countText}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="game-serious-section">
          <div className="overlay-image">
            <img
              className="small-softball"
              src="/assets/images/small-football-img.svg"
              alt="image"
            />
            <img
              className="small-softball1"
              src="/assets/images/small-basketball-img.svg"
              alt="image"
            />
            <div className="ball-animation-box">
              <img
                className="player-img"
                src="/assets/images/player-img.png"
                alt="image"
              />
              <img
                className="big-softball "
                src="/assets/images/big-softbal-img.svg"
                alt="image"
              />
              <img
                className="big-softball-small-desktop "
                src="/assets/images/big-softbal-img.svg"
                alt="image"
              />
              <img
                className="big-softball-tablet "
                src="/assets/images/big-softbal-img.svg"
                alt="image"
              />
              <img
                className="big-softball-mobile "
                src="/assets/images/big-softbal-img.svg"
                alt="image"
              />
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="game-serious-block">
              <div className="heading-box text-center">
                {data.parallexTitle && (
                  <h2 className="heading">{data.parallexTitle}</h2>
                )}
                {data.parallexDescription && (
                  <div className="desc">
                    <p>{data.parallexDescription}</p>
                  </div>
                )}
              </div>

              <div className="game-grid-usp-block flex flex-wrap justify-between">
                {part1 && (
                  <div className="grid-usp-box w-full lg:w-1/3">
                    <div className="grid-item">
                      {part1.map((item: any, index: any) => {
                        return (
                          <div className="item-box" key={`pb-${index}`}>
                            <div className="img-box">
                              <img src={item.icon.sourceUrl} alt="icon" />
                            </div>
                            <div className="content-box">
                              {item.title && (
                                <h4 className="heading">{item.title}</h4>
                              )}
                              {item.description && (
                                <div className="short-desc">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {part2 && (
                  <div className="grid-usp-box w-full lg:w-1/3">
                    <div className="grid-item">
                      {part2.map((item: any, index: any) => {
                        return (
                          <div className="item-box" key={`pb-${index}`}>
                            <div className="img-box">
                              <img src={item.icon.sourceUrl} alt="icon" />
                            </div>
                            <div className="content-box">
                              {item.title && (
                                <h4 className="heading">{item.title}</h4>
                              )}
                              {item.description && (
                                <div className="short-desc">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dynamic-founder-section">
        <div className="bg-image-box">
          <img src="/assets/images/dynamic-founder-bg-img.png" alt="image" />
        </div>
        {data.founderImage.sourceUrl && (
          <div className="image-block w-full lg:hidden mb-7">
            <div className="img-box">
              <img src={data.founderImage.sourceUrl} alt="image" />
            </div>
          </div>
        )}
        <div className="container mx-auto px-4">
          <div className="dynamic-founder-block flex flex-wrap items-center -mx-5">
            <div className="image-block w-full lg:w-1/2 xl:w-2/5 px-5 hidden lg:block">
              {data.founderImage.sourceUrl && (
                <div className="img-box">
                  <img src={data.founderImage.sourceUrl} alt="image" />
                </div>
              )}
            </div>
            <div className="content-block w-full lg:w-1/2 xl:w-3/5 px-5">
              <div className="content-box">
                {data.founderTagline && (
                  <span className="small-heading block">
                    {data.founderTagline}
                  </span>
                )}
                <div dangerouslySetInnerHTML={{ __html: data.founderTitle }} />
                {data.founderDescription && (
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data.founderDescription,
                    }}
                  />
                )}
                <div className="btn-box">
                  {data.joinLeagueButtonLink && data.joinLeagueButtonText && (
                    <Link
                      href={data.joinLeagueButtonLink}
                      className="blueOutline-btn"
                    >
                      <img src="/assets/images/writing-icon.svg" alt="icon" />
                      <span>{data.joinLeagueButtonText}</span>
                    </Link>
                  )}
                  {data.sponsorButtonLink && data.sponsorButtonText && (
                    <Link
                      href={data.sponsorButtonLink}
                      className="orangeOutline-btn"
                    >
                      <img
                        src="/assets/images/investment-icon.svg"
                        alt="icon"
                      />
                      <span>{data.sponsorButtonText}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.aboutLbaBlocks && (
        <div className="passionate-principled-section">
          <div className="container mx-auto px-4">
            <div className="passionate-principled-block">
              <div className="grid-block flex flex-wrap xl:px-10 -mx-5 xl:-mx-10">
                {data.aboutLbaBlocks.map((item: any, index: any) => {
                  return (
                    <div
                      className="grid-item w-full lg:w-1/2 px-5 xl:px-10"
                      key={`qs-${index}`}
                    >
                      <div className="item-box">
                        <div className="img-box">
                          <div className="revolution-animation">
                            <Lottie
                              animationData={
                                index === 0
                                  ? revolutionAnimation
                                  : highFiveAnimation
                              }
                              loop
                              autoplay
                            />
                          </div>
                        </div>
                        <div className="content-box">
                          <div
                            className="heading"
                            dangerouslySetInnerHTML={{
                              __html: item.aboutTitle,
                            }}
                          />
                          <div className="desc">
                            <p>{item.aboutDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="team-sponsor-section">
        <div className="container mx-auto px-4">
          <div className="team-sponsor-block flex flex-wrap items-center">
            {data.exploreTeamButtonLink && (
              <div className="team-block w-full lg:w-1/2">
                <div className="team-box">
                  <Link
                    href={data.exploreTeamButtonLink}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>{data.exploreTeamButtonText}</span>
                    <img
                      src="/assets/images/right-arrow-icon.svg"
                      alt="arrow icon"
                    />
                  </Link>
                </div>
              </div>
            )}
            {data.findASponsorLink && (
              <div className="sponsor-block w-full lg:w-1/2">
                <div className="sponsor-box">
                  <Link
                    href={data.findASponsorLink}
                    onMouseEnter={handleSponsorEnter}
                    onMouseLeave={handleSponsorLeave}
                  >
                    <span>{data.findASponsorButtonText}</span>
                    <img
                      src="/assets/images/right-arrow-icon.svg"
                      alt="arrow icon"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetails;
