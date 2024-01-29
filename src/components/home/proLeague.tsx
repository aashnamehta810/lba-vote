/* eslint-disable react/no-danger */
// import CustomCounter from '../customCounter/customCounter';

import Lottie from 'lottie-react';
import loaderAnimation from 'public/assets/lottiefiles/loader.json';

import TeamSection from '../basketBallDetail/teamSection';
import CustomCounter from '../customCounter/customCounter';

interface ProLeagueProps {
  data?: any;
  themeOptions?: any;
  teamDetails?: any;
}
const ProLeague: React.FC<ProLeagueProps> = ({
  data,
  themeOptions,
  teamDetails,
}) => {
  return (
    <>
      <div className="home-counter-section" data-aos="fade-right">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="home-counter-gird-block">
            {themeOptions.counterBlocks.map((item: any, index: any) => {
              return (
                <div className="grid-item" key={`cb-${index}`}>
                  <div className="item-box">
                    <div className="counter-box">
                      {item.count && (
                        <CustomCounter target={Number(item.count)} />
                      )}
                      {item.countText && (
                        <span className="counter-name">{item.countText}</span>
                      )}
                    </div>
                    {item.countImage.sourceUrl && (
                      <div className="counter-image-box">
                        <img src={item.countImage.sourceUrl} alt="image" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TeamSection data={teamDetails} />
      {data.proleagueBlocks && (
        <div className="pro-leagues-section">
          <div className="loader-animation">
            <Lottie animationData={loaderAnimation} loop autoplay />
          </div>
          <div className="container mx-auto px-4">
            <div className="pro-leagues-block">
              <div className="pro-leagues-list">
                {data.proleagueBlocks.map((item: any, index: any) => {
                  return (
                    <div className="pro-league-item" key={`plb-${index}`}>
                      <div className="item-box">
                        {item.proleagueIcon.sourceUrl && (
                          <div className="icon-box">
                            <img
                              src={item.proleagueIcon.sourceUrl}
                              alt="icon"
                            />
                          </div>
                        )}
                        {item.proleagueTitle && (
                          <div
                            className="heading"
                            dangerouslySetInnerHTML={{
                              __html: item.proleagueTitle,
                            }}
                          />
                        )}
                      </div>
                      {item.hoverImage.sourceUrl && (
                        <div className="hover-img-box">
                          <img src={item.hoverImage.sourceUrl} alt="image" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProLeague;
