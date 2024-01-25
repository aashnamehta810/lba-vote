/* eslint-disable react/no-danger */

interface TestimonialPopupProps {
  onClose: any;
  data?: any;
}
const TestimonialPopup: React.FC<TestimonialPopupProps> = ({
  onClose,
  data,
}) => {
  const randomIndex = Math.floor(Math.random() * data.testimonials.length);
  const testimonialData = data.testimonials[randomIndex];
  return (
    <div className="testimonial-modal-wrapper">
      <div className="modal-bg-overlay" onClick={onClose} />
      <div className="testimonial-modal-block">
        {/* content */}
        <div className="testimonial-modal-box">
          {/* body */}
          <div className="testimonial-modal-card">
            <div className="close-btn" onClick={onClose}>
              <img src="/assets/images/close-icon.svg" alt="close icon" />
            </div>

            <div className="testimonial-item-box">
              <div className="image-col">
                <div className="img-block">
                  {testimonialData.testimonialImage.sourceUrl && (
                    <div className="img-box">
                      <img
                        src={testimonialData.testimonialImage.sourceUrl}
                        alt="image"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="content-block">
                <div className="testimonial-content-box">
                  {testimonialData.testimonialHeading && (
                    <h4 className="heading">
                      {testimonialData.testimonialHeading}
                    </h4>
                  )}
                  {testimonialData.testimonialDescription && (
                    <div
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html: testimonialData.testimonialDescription,
                      }}
                    />
                  )}
                  {testimonialData.author && (
                    <div className="auther-info-box">
                      <h3 className="auther-name">{`-${testimonialData.author}`}</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialPopup;
