/* eslint-disable react/no-danger */
interface BasketBallVideoProps {
  data?: any;
}

const BasketBallVideo: React.FC<BasketBallVideoProps> = ({ data }) => {
  const handleVideoPlay = (event: React.MouseEvent<HTMLDivElement>) => {
    const videoPlay = (event.currentTarget as HTMLDivElement).closest(
      '.video-block'
    );
    videoPlay?.classList.add('active');
  };
  return (
    <div className="see-action-section">
      <div className="overlay-bg-img">
        <img
          className="left-img"
          src="/assets/images/see-action-bg-img.png"
          alt="image"
        />
        <img
          className="right-img"
          src="/assets/images/winning-bg-img.png"
          alt="image"
        />
      </div>
      {data?.seeUsInActionVideo?.mediaItemUrl && (
        <div className="video-block">
          <div className="video-box">
            <div className="videoplay-btn" onClick={handleVideoPlay}>
              <img src="/assets/images/videoplay-icon.svg" alt="icon" />
            </div>
            <video autoPlay muted loop>
              <source
                src={data.seeUsInActionVideo.mediaItemUrl}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
      {data.seeUsInActionTitle && (
        <div className="container mx-auto px-4">
          <div className="see-action-block">
            <div className="heading-box">
              <div
                className="heading"
                dangerouslySetInnerHTML={{ __html: data.seeUsInActionTitle }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketBallVideo;
