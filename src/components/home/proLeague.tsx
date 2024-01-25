/* eslint-disable react/no-danger */
// import CustomCounter from '../customCounter/customCounter';

import TeamSection from '../basketBallDetail/teamSection';
import CustomCounter from '../customCounter/customCounter';

interface ProLeagueProps {
  themeOptions?: any;
}
const ProLeague: React.FC<ProLeagueProps> = ({ themeOptions }) => {
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
      <TeamSection />
    </>
  );
};

export default ProLeague;
