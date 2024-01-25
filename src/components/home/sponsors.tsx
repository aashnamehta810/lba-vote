interface SponsorProps {
  data: any;
}

const Sponsors: React.FC<SponsorProps> = ({ data }) => {
  const { sponsorBlocks } = data;
  const partLength = Math.ceil(sponsorBlocks.length / 4);
  const part1 = sponsorBlocks.slice(0, partLength);
  const part2 = sponsorBlocks.slice(partLength, partLength * 2);
  const part3 = sponsorBlocks.slice(partLength * 2, partLength * 3);
  const part4 = sponsorBlocks.slice(partLength * 3);

  return (
    <div className="our-sponsors-section">
      {/* <div className="container mx-auto px-4"> */}
      <div className="our-sponsors-block">
        <div className="container mx-auto px-4">
          <h2 className="heading">Our Sponsors</h2>
          <div className="official-sponsor-box">
            <a
              href="https://www.fmm.com/"
              target="_blank"
              className="sponsor-box w-full lg:w-1/3 block"
            >
              <span className="img-box">
                <img src="assets/images/FM-home-loan-img.svg" alt="image" />
              </span>
              <p className="sponsor-type">Official league Sponsor</p>
            </a>
            <a
              href="https://thehisplace.com/"
              target="_blank"
              className="sponsor-box w-1/2 lg:w-1/3"
            >
              <span className="img-box">
                <img src="assets/images/his-place-logo.svg" alt="image" />
              </span>
              <p className="sponsor-type">
                Corporate leagues <br /> Sponsor
              </p>
            </a>
            <a
              href="https://thelakewoodscoop.com/"
              target="_blank"
              className="sponsor-box w-1/2 lg:w-1/3"
            >
              <span className="img-box">
                <img src="assets/images/tls-logo.svg" alt="image" />
              </span>
              <p className="sponsor-type">Media Sponsor</p>
            </a>
          </div>
          <div className="top-sponsors-box">
            <a
              href="https://thehisplace.com/"
              target="_blank"
              className="sponsor-box"
            >
              <span className="img-box">
                <img src="assets/images/his-place-logo.svg" alt="image" />
              </span>
              <p className="sponsor-type">
                Corporate leagues <br /> Sponsor
              </p>
            </a>
            <a
              href="https://thelakewoodscoop.com/"
              target="_blank"
              className="sponsor-box"
            >
              <span className="img-box">
                <img src="assets/images/tls-logo.svg" alt="image" />
              </span>
              <p className="sponsor-type">Media Sponsor</p>
            </a>
          </div>
        </div>
      </div>

      {data.sponsorBlocks && (
        <div className="sponsors-slider-block">
          {part1 && (
            <div className="sponsors-slider-box">
              {part1.map((item: any, index: any) => {
                return (
                  <div className="sponsor-box" key={`sb-${index}`}>
                    {item.sponsorImage.sourceUrl && (
                      <img
                        className="default-img"
                        src={item.sponsorImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                    {item.sponsorHoverImage.sourceUrl && (
                      <img
                        className="hover-img"
                        src={item.sponsorHoverImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {part2 && (
            <div className="sponsors-slider-box">
              {part2.map((item: any, index: any) => {
                return (
                  <div className="sponsor-box" key={`sb-${index}`}>
                    {item.sponsorImage.sourceUrl && (
                      <img
                        className="default-img"
                        src={item.sponsorImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                    {item.sponsorHoverImage.sourceUrl && (
                      <img
                        className="hover-img"
                        src={item.sponsorHoverImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {part3 && (
            <div className="sponsors-slider-box">
              {part3.map((item: any, index: any) => {
                return (
                  <div className="sponsor-box" key={`sb-${index}`}>
                    {item.sponsorImage.sourceUrl && (
                      <img
                        className="default-img"
                        src={item.sponsorImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                    {item.sponsorHoverImage.sourceUrl && (
                      <img
                        className="hover-img"
                        src={item.sponsorHoverImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {part4 && (
            <div className="sponsors-slider-box">
              {part4.map((item: any, index: any) => {
                return (
                  <div className="sponsor-box" key={`sb-${index}`}>
                    {item.sponsorImage.sourceUrl && (
                      <img
                        className="default-img"
                        src={item.sponsorImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                    {item.sponsorHoverImage.sourceUrl && (
                      <img
                        className="hover-img"
                        src={item.sponsorHoverImage.sourceUrl}
                        alt="sponsor-image"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sponsors;
