/* eslint-disable no-underscore-dangle */

const TeamSection = (data: any) => {
  const teamData = data?.data || null;
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
          {teamData.map((item: any, index: any) => {
            return (
              <div className="team-card" key={`team-${index}`}>
                <div className="item-box">
                  <div className="img-box">
                    <img
                      src={item.teamShirt}
                      alt="image"
                      width={253}
                      height={335}
                    />
                  </div>
                  <div className="content-box">
                    {/* <div className="team-logo">
                  <img src="https://placehold.co/224X52" alt="image" />
                </div> */}
                    <div className="btn-group">
                      <a
                        href={`https://wa.me/17329949780?text=Vote%20for%20${encodeURIComponent(
                          item.name
                        )}`}
                        className="primary-btn"
                      >
                        Vote By Whatsapp
                      </a>
                      <a
                        href={`mailto:shimon@lbaleagues.com?subject=Vote%20for%20${encodeURIComponent(
                          item.name
                        )}&body=Vote%20for%20${encodeURIComponent(item.name)}`}
                        className="secondary-btn"
                      >
                        Email By Email
                      </a>
                    </div>
                    {/* <h4 className="team-name">
                      <span>{item.name}</span>
                    </h4> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
