import Link from 'next/link';

interface BasketBallListingBannerProps {
  lastname?: string; // Make the prop optional
  data?: any;
}

const BasketBallListingBanner: React.FC<BasketBallListingBannerProps> = ({
  lastname,
  data,
}) => {
  const handleLogoOnMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    document
      .querySelector('.video-banner-section')
      ?.classList.remove('video-active');
    const allGridItem = document.querySelectorAll('.bnr-grid-list .grid-item');
    allGridItem.forEach((gridItem) => {
      gridItem.classList.remove('active');
    });
    (event.currentTarget as HTMLDivElement).classList.add('active');
    const videoSection = (event.currentTarget as HTMLDivElement).closest(
      '.video-banner-section'
    );
    videoSection?.classList.add('video-active');
  };

  const handleLogoOnMouseLeave = () => {
    document
      .querySelector('.video-banner-section')
      ?.classList.remove('video-active');
    const allGridItem = document.querySelectorAll('.bnr-grid-list .grid-item');
    allGridItem.forEach((gridItem) => {
      gridItem.classList.remove('active');
    });
  };
  return (
    <div className="video-banner-section unloaded" id="banner-vd">
      {data?.bannerVideo?.mediaItemUrl && (
        <div className="overlay-video-block">
          <video autoPlay muted loop>
            <source src={data.bannerVideo.mediaItemUrl} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div
          className="video-banner-block"
          data-aos="zoom-in"
          data-aos-delay={lastname === 'juniors' ? '2000' : ''}
        >
          {data.bannerTitle && (
            <h1
              className="banner-title text-center uppercase"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              {data.bannerTitle}
            </h1>
          )}
          <div className="bnr-grid-list">
            {data.leagueType && (
              <>
                {data.leagueType.leagues.nodes.map((item: any, index: any) => {
                  return (
                    <div
                      className="grid-item"
                      onMouseEnter={handleLogoOnMouseEnter}
                      onMouseLeave={handleLogoOnMouseLeave}
                      key={`dkey-${index}`}
                    >
                      {item.featuredImage?.node?.sourceUrl && (
                        <Link href={`/${lastname}/${item.slug}`}>
                          <img
                            src={item.featuredImage.node.sourceUrl}
                            alt="league image"
                          />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketBallListingBanner;
