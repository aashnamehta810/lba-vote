interface BasketballWinningFrontProps {
  data?: any;
}
const BasketballWinningFront: React.FC<BasketballWinningFrontProps> = ({
  data,
}) => {
  return (
    <div className="winning-front-section">
      {data.benefitsBlocks && (
        <div className="container mx-auto px-4">
          <div className="winning-front-block">
            <div className="usp-grid-block">
              {data.benefitsBlocks.map((item: any, index: any) => {
                return (
                  <div className="usp-grid-item" key={`bfb-${index}`}>
                    <div className="item-box">
                      <div className="bg-img-box">
                        {item.benefitImage.sourceUrl && (
                          <img src={item.benefitImage.sourceUrl} alt="image" />
                        )}
                      </div>
                      <div className="item-content-box">
                        {item.benefitIcon.sourceUrl && (
                          <div className="img-box">
                            <img src={item.benefitIcon.sourceUrl} alt="icon" />
                          </div>
                        )}
                        <div className="content-box">
                          <h3 className="usp-heading">{item.benefitTitle}</h3>
                          <div className="desc">
                            <p>{item.benefitDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketballWinningFront;
