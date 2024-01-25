/* eslint-disable react/no-danger */
interface SportCategoryProps {
  data?: any; // Make the prop optional
}

const SportCategory: React.FC<SportCategoryProps> = ({ data }) => {
  return (
    <div className="sports-category-section">
      <div className="sports-category-block">
        {data?.sportsCategoryBgImage?.sourceUrl && (
          <div className="bg-image-box">
            <img src={data.sportsCategoryBgImage.sourceUrl} alt="image" />
          </div>
        )}
        {data?.sportsCategoryTitle && (
          <div className="container mx-auto px-4">
            <div className="title-box">
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: data.sportsCategoryTitle,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportCategory;
