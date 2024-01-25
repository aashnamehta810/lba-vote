/* eslint-disable no-underscore-dangle */

const TeamSection = () => {
  // const isImageFile = (url: any) => {
  //   const imageExtensions = [
  //     '.png',
  //     '.jpg',
  //     '.jpeg',
  //     '.gif',
  //     '.bmp',
  //     '.svg',
  //     '.webp ',
  //   ]; // Add more extensions if needed
  //   const lowerCaseUrl = url?.toLowerCase();
  //   return imageExtensions.some((ext) => lowerCaseUrl?.endsWith(ext));
  // };
  return (
    <div className="team-section">
      <div className="container mx-auto px-4">
        <div className="heading-box">
          <h2 className="heading">Vote Now!</h2>
          <div className="desc">
            <p>Click on sponsor you would like to vote for.</p>
          </div>
        </div>

        <div className="team-grid-block">
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="team-card" key="team-1">
            <div className="item-box">
              <div className="img-box">
                <img
                  src="https://placehold.co/253X335"
                  alt="image"
                  width={253}
                  height={335}
                />
              </div>
              <div className="content-box">
                <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div>
                <h4 className="team-name">
                  <span>Team Name</span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="btn-box">
          <Link className="see-more-btn lightblue-btn" href="/">
            see more
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default TeamSection;
