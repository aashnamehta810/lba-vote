/* eslint-disable react/no-danger */
import Link from 'next/link';

interface ChooseProps {
  data: any;
}

const YouChoose: React.FC<ChooseProps> = ({ data }) => {
  return (
    <div className="you-choose-section">
      <div className="container mx-auto px-4">
        <div className="you-choose-block">
          {data.youChooseTitle && (
            <div
              className="heading-box"
              dangerouslySetInnerHTML={{ __html: data.youChooseTitle }}
            />
          )}
          {data.youChooseBlocks && (
            <div className="choose-grid-block flex flex-wrap -mx-2.5">
              {data.youChooseBlocks.map((item: any, index: any) => {
                return (
                  <div
                    className="grid-boxes w-full xl:w-1/3 px-2.5"
                    key={`cgb-${index}`}
                  >
                    <div className="grid-item-box">
                      {item.chooseImage.sourceUrl && (
                        <div className="bg-image-box">
                          <img src={item.chooseImage.sourceUrl} alt="" />
                        </div>
                      )}
                      <div className="grid-item-content">
                        {item.chooseIcon.sourceUrl && (
                          <div className="image-box">
                            <img
                              className="default-img"
                              src={item.chooseIcon.sourceUrl}
                              alt="icon"
                            />
                          </div>
                        )}
                        {item.chooseText && (
                          <h3 className="heading">{item.chooseText}</h3>
                        )}
                        {item.chooseDescription && (
                          <p className="desc">{item.chooseDescription}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {data.exploreLbaLink && (
            <div className="choose-btn-block text-center">
              <Link href={data.exploreLbaLink} className="blue-btn explore-btn">
                <img src="assets/images/explore-icon.svg" alt="icon" />
                <span>{data.exploreLbaText}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouChoose;
