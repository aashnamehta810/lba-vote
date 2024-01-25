/* eslint-disable react/no-danger */
import Link from 'next/link';

interface WhatsAppProps {
  data?: any;
  themeOptions?: any;
}

const WhatsApp: React.FC<WhatsAppProps> = ({ data, themeOptions }) => {
  return (
    <>
      <div className="connect-whatsapp-section">
        <div className="overlay-bg">
          <img
            src="/assets/images/whatsapp-bg-overlay-graphic.svg"
            alt="image"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="connect-whatsapp-block">
            <div className="image-block">
              <div className="img-box">
                <img
                  src="/assets/images/connect-whatsapp-block-img.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="content-block">
              <div className="content-box">
                <div className="icon-box">
                  <img src="/assets/images/whatsapp-icon.svg" alt="icon" />
                </div>
                {data?.lbaStatusTitle && (
                  <h2 className="heading">{data.lbaStatusTitle}</h2>
                )}
                {data?.lbaStatusDescription && (
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data.lbaStatusDescription,
                    }}
                  />
                )}
                {themeOptions?.companyPhone && (
                  <div className="btn-box">
                    <Link
                      href={themeOptions.whatsappLink}
                      className="white-btn"
                    >
                      {themeOptions.companyPhone}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="official-league-sponsor-section">
        <div className="overlay-bg">
          <img
            src="/assets/images/official-league-sponsor-bg-img.svg"
            alt="image"
          />
        </div>
        {data?.sponsorBox.length > 0 && (
          <div className="container mx-auto px-4">
            <div className="official-league-sponsor-block">
              <div className="content-block">
                {data.sponsorBox.map((item: any, index: any) => {
                  return (
                    <div className="league-sponsor-box" key={`spl-${index}`}>
                      <div className="sponsor-type">
                        <p>{item.sponsorTitle}</p>
                      </div>
                      {item?.sponsorImage?.sourceUrl && (
                        <div className="sponsor-logo-box">
                          <img
                            src={item.sponsorImage.sourceUrl}
                            alt="FM home loan"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsApp;
