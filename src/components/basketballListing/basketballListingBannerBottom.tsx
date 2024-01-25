/* eslint-disable react/no-danger */
interface BasketBallListingBannerBottomProps {
  data?: any;
}

const BasketBallListingBannerBottom: React.FC<
  BasketBallListingBannerBottomProps
> = ({ data }) => {
  return (
    <div className="page-bnr-bottom-section">
      <div className="container mx-auto px-4">
        <div className="page-bnr-bottom-block text-center">
          {data.bannerBottomTitle && (
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: data.bannerBottomTitle }}
            />
          )}
          {data.bannerBottomDescription && (
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: data.bannerBottomDescription }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketBallListingBannerBottom;
