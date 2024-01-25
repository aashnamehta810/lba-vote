/* eslint-disable react/no-danger */
import Lottie from 'lottie-react';
import Link from 'next/link';
import outlineAnimation from 'public/assets/lottiefiles/Outline_growth_161.json';

interface LBAMarketingProps {
  data?: any;
}
const LBAMarketing: React.FC<LBAMarketingProps> = ({ data }) => {
  return (
    <div className="lba-marketing-section">
      <div className="container mx-auto px-4">
        {data.marketingBlocks && (
          <div className="lba-marketing-block">
            <div className="heading-box">
              {data.lbaMarketingTitle && (
                <h2 className="heading">{data.lbaMarketingTitle}</h2>
              )}
            </div>

            <div className="marketing-grid-box">
              {data.marketingBlocks.map((item: any, index: number) => {
                return (
                  <div
                    className="marketing-grid-item"
                    key={`contentSlide-${index}`}
                  >
                    <div className="item-box">
                      {item.marketingImage.sourceUrl && (
                        <div className="image-box">
                          <img
                            src={item.marketingImage.sourceUrl}
                            alt="image"
                          />
                        </div>
                      )}

                      <div
                        className="marketing-slide-content"
                        dangerouslySetInnerHTML={{
                          __html: item.marketingDescription,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="marketing-title-block">
        <div className="container mx-auto px-4">
          <div className="heading-box">
            {data.brandReadyForThisTitle && (
              <span className="heading">
                {data.brandReadyForThisTitle}
                <span className="arrow-up-animation">
                  <Lottie animationData={outlineAnimation} loop autoplay />
                </span>
              </span>
            )}
            <img
              className="hidden md:block"
              src="assets/images/marketing-heading-img.png"
              alt="image"
            />
            <img
              className="md:hidden"
              src="assets/images/marketing-heading-mobile-img.png"
              alt=""
            />
          </div>
          {data.imInButtonLink && (
            <div className="btn-box">
              <Link
                className="lightblue-btn"
                href="https://lbaleagues.vercel.app/sponsors/"
                target="_blank"
              >
                {data.imInButtonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LBAMarketing;
