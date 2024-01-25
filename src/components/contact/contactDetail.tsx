import Link from 'next/link';

import ContactForm from './contactForm';

interface ContactDetailProps {
  data?: any;
}
const ContactDetail: React.FC<ContactDetailProps> = ({ data }) => {
  return (
    <div className="contact-page-section">
      <div className="overlay-bg-img">
        <img src="/assets/images/contact-bnr-bg.png" alt="image" />
      </div>
      <div className="container mx-auto px-4">
        <div className="contact-page-block -mx-4">
          <div className="contact-content-block w-full lg:w-3/5 xl:w-1/2 mb-14 px-4">
            <div className="contact-content-box">
              <strong className="small-heading">Get In Touch</strong>
              <h1 className="bnr-title">Drop us a line</h1>
              <p className="desc">
                Send questions, feedback or comments our way by filling out the
                form below. <br />
                We’d love to hear from you!
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="contact-info-block w-full lg:w-2/5 xl:w-1/2 px-4">
            <ul className="contact-info-box">
              {data?.addressLocation && (
                <li className="address">
                  <Link href={`tel:${data.addressLocation}`} target="_blank">
                    {`${data.addressLocation}LBA - Office`}
                  </Link>
                </li>
              )}
              {data?.companyPhone && (
                <li className="phone">
                  <Link href={`tel:${data.companyPhone}`}>
                    {`${data.companyPhone} – Shimon Friedman`}
                  </Link>
                </li>
              )}
              {data?.companyEmail && (
                <li className="mail">
                  <Link href={`mailto:${data.companyEmail}`}>
                    {data.companyEmail}
                  </Link>
                </li>
              )}
              <li className="social-box">
                <span className="social-heading">Watch us</span>
                {data?.whatsappLink && (
                  <Link href={data?.whatsappLink} target="_blank">
                    <svg
                      id="whatsapp-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="70.459"
                      height="70.458"
                      viewBox="0 0 70.459 70.458"
                    >
                      <circle
                        id="Ellipse_410"
                        data-name="Ellipse 410"
                        cx="35.229"
                        cy="35.229"
                        r="35.229"
                        transform="translate(0)"
                        fill="#ffffff"
                      />
                      <path
                        id="whatsapp"
                        d="M35.392,38.049A20.634,20.634,0,0,0,2.927,62.941L0,73.627l10.936-2.871a20.565,20.565,0,0,0,9.859,2.509H20.8A20.5,20.5,0,0,0,35.392,38.049ZM20.8,69.789A17.115,17.115,0,0,1,12.07,67.4l-.623-.372-6.486,1.7L6.69,62.4l-.409-.65a17.178,17.178,0,1,1,31.861-9.115A17.336,17.336,0,0,1,20.8,69.789Zm9.4-12.841c-.511-.26-3.048-1.505-3.522-1.673s-.818-.26-1.161.26-1.329,1.673-1.635,2.026-.6.39-1.115.13c-3.029-1.515-5.018-2.7-7.015-6.133-.53-.911.53-.846,1.515-2.815a.955.955,0,0,0-.046-.9c-.13-.26-1.161-2.8-1.589-3.828-.418-1-.846-.864-1.161-.883-.3-.019-.641-.019-.985-.019a1.909,1.909,0,0,0-1.375.641,5.792,5.792,0,0,0-1.8,4.3,10.1,10.1,0,0,0,2.1,5.333c.26.344,3.633,5.547,8.809,7.786,3.271,1.412,4.553,1.533,6.188,1.292.994-.149,3.048-1.245,3.475-2.453a4.311,4.311,0,0,0,.3-2.453C31.062,57.329,30.718,57.2,30.207,56.948Z"
                        transform="translate(14.543 -17.355)"
                        fill="#111342"
                      />
                    </svg>
                  </Link>
                )}
                {data?.instagramLink && (
                  <Link href={data.instagramLink} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.778"
                      height="26.777"
                      viewBox="0 0 26.778 26.777"
                    >
                      <g id="instagram" transform="translate(0)">
                        <ellipse
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          cx="2.812"
                          cy="2.812"
                          rx="2.812"
                          ry="2.812"
                          transform="translate(10.577 10.577)"
                          fill="#ffffff"
                        />
                        <path
                          id="Path_62"
                          data-name="Path 62"
                          d="M19.389,6A13.389,13.389,0,1,0,32.778,19.389,13.389,13.389,0,0,0,19.389,6Zm8.272,16.792a5.066,5.066,0,0,1-1.35,3.446,5.159,5.159,0,0,1-3.483,1.335H15.949a5.158,5.158,0,0,1-3.483-1.335,5.066,5.066,0,0,1-1.35-3.446V15.986a5.066,5.066,0,0,1,1.35-3.446A5.159,5.159,0,0,1,15.949,11.2h6.879a5.158,5.158,0,0,1,3.483,1.335,5.066,5.066,0,0,1,1.35,3.446Z"
                          transform="translate(-6 -6)"
                          fill="#ffffff"
                        />
                        <path
                          id="Path_63"
                          data-name="Path 63"
                          d="M139.758,131.529c-1.676-.046-5.029-.046-6.7,0a3.515,3.515,0,0,0-2.482.9,3.559,3.559,0,0,0-.914,2.455c-.043,1.636,0,6.547,0,6.547a3.575,3.575,0,0,0,.914,2.455,3.514,3.514,0,0,0,2.482.9c1.676.046,5.029.046,6.7,0a3.515,3.515,0,0,0,2.482-.9,3.558,3.558,0,0,0,.914-2.455v-6.547a3.558,3.558,0,0,0-.914-2.455,3.515,3.515,0,0,0-2.482-.9Zm-3.353,10.992a4.358,4.358,0,1,1,4.358-4.358A4.358,4.358,0,0,1,136.405,142.521Zm4.377-7.817a.872.872,0,1,1,.872-.872.872.872,0,0,1-.872.872Z"
                          transform="translate(-123.016 -124.774)"
                          fill="#ffffff"
                        />
                      </g>
                    </svg>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
