interface MediaBottomImageProps {
  data?: any;
}
const MediaBottomImage: React.FC<MediaBottomImageProps> = ({ data }) => {
  return (
    <div className="media-bottom-image-section">
      <div className="container mx-auto px-4">
        {data?.lbaAdvertiseImage?.sourceUrl && (
          <div className="media-bottom-image-block">
            <div className="img-box">
              <img src={data.lbaAdvertiseImage.sourceUrl} alt="image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaBottomImage;
