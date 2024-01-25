/* eslint-disable react/no-danger */
import Lottie from 'lottie-react';
import Link from 'next/link';
import scrollDownAnimation from 'public/assets/lottiefiles/9284-scroll-down-arrows.json';

interface HomeBannerProps {
  data: any;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ data }) => {
  return (
    <div className="home-hero-bnr-section">
      <div className="overlay-bg-img absolute top-0 xl:top-auto xl:bottom-0 left-0">
        <img src="assets/images/hero-bnr-bg-img.png" alt="image" />
      </div>
      {data?.bannerVideo?.mediaItemUrl && (
        <div className="overlay-video-box">
          <video autoPlay muted loop>
            <source src={data.bannerVideo.mediaItemUrl} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="hero-bnr-block ">
          <div className="bnr-content-block w-full xl:w-1/2 text-center xl:text-left">
            {data.bannerTagline && (
              <strong className="small-heading">{data.bannerTagline}</strong>
            )}
            {data.bannerTitle && (
              <div
                className="bnr-title"
                dangerouslySetInnerHTML={{
                  __html: data.bannerTitle,
                }}
              />
            )}
            {data.bannerSubtitle && (
              <p className="desc">{data.bannerSubtitle}</p>
            )}
          </div>
          {data.proleagueSlider && (
            <div className="bnr-leagues-block">
              <div className="down-arrow-animation">
                <Lottie animationData={scrollDownAnimation} loop autoplay />
              </div>
              <div className="bnr-leagues-box">
                {data.proleagueSlider.map((item: any, index: any) => {
                  return (
                    <div className="league-img" key={`psl-${index}`}>
                      {item.leagueLink && (
                        <Link href={item.leagueLink}>
                          <img
                            src={item.leagueIcon.sourceUrl}
                            alt="league image"
                          />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
