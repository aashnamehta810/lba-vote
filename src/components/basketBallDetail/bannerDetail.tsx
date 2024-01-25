import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface BannerDetailProps {
  data?: any; // Make the prop optional
  fI?: any;
}

const BannerDetail: React.FC<BannerDetailProps> = ({ data, fI }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = data?.bannerVideo?.mediaItemUrl || null;
      videoElement.play();
    }
  }, [data?.bannerVideo?.mediaItemUrl]);

  return (
    <div className="inner-hero-bnr-section">
      {data?.overlayBgImage?.sourceUrl && (
        <div className="overlay-bg-img">
          <img src={data.overlayBgImage.sourceUrl} alt="image" />
        </div>
      )}
      {data?.bannerImage?.sourceUrl && (
        <div className="player-img">
          <img src={data.bannerImage.sourceUrl} alt="image" />
        </div>
      )}
      {data?.bannerVideo?.mediaItemUrl && (
        <div className="overlay-video-box">
          <video autoPlay muted loop ref={videoRef}>
            <source src={data?.bannerVideo?.mediaItemUrl} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="overlay-btn-block">
        <Link href="#scheduleSection" className="sport-btn">
          <img src="/assets/images/sports-overlay-btn-icon2.svg" alt="icon" />
          <span>Schedules</span>
        </Link>
        <Link href="#standingSection" className="sport-btn">
          <img src="/assets/images/sports-overlay-btn-icon1.svg" alt="icon" />
          <span>Standings</span>
        </Link>
        <Link href="#highlightSection" className="sport-btn">
          <img src="/assets/images/sports-overlay-btn-icon3.svg" alt="icon" />
          <span>Highlights</span>
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <div className="inner-hero-bnr-block ">
          <div className="bnr-content-block w-full xl:w-1/2 text-center xl:text-left">
            {fI?.featuredImage?.node?.sourceUrl && (
              <div className="sport-logo-img-box -ml-4 mb-2">
                <img
                  src={fI.featuredImage.node.sourceUrl}
                  alt="icon"
                  width={150}
                  height={150}
                />
              </div>
            )}
            {data?.bannerTagline && (
              <strong className="small-heading">{data.bannerTagline}</strong>
            )}
            <h1 className="bnr-title">
              Registration <span>Open</span>
            </h1>
            {data?.enrollNowButtonLink && (
              <div className="bnr-btn-box">
                <Link
                  href={data.enrollNowButtonLink}
                  className="orangeOutline-btn"
                >
                  <img
                    src="/assets/images/writing-icon-orange.svg"
                    alt="icon"
                  />
                  <span>{data.enrollNowButtonText}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetail;
