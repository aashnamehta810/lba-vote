interface SponsorProps {
  data?: any; // Make the prop optional
}

const Sponsor: React.FC<SponsorProps> = ({ data }) => {
  return (
    <div className="our-sponsors-section junior-sponsors-section">
      <div className="container mx-auto px-4">
        <div className="our-sponsors-block">
          {/* <h2 className="heading">Junior League Sponsors</h2> */}
          <div className="heading-box">
            {/* <h2 className="heading-shadow">See Action</h2> */}
            {data?.highlightTitle && (
              <h2 className="heading">{data.highlightTitle}</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
