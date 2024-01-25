import Link from 'next/link';
import { useRouter } from 'next/router';

interface FooterProps {
  themeoptions?: any;
  footerMenu?: [];
}

const Footer: React.FC<FooterProps> = ({ themeoptions, footerMenu }) => {
  const router = useRouter();
  return (
    <footer>
      {themeoptions?.whatsappLink && (
        <div className="whatsapp-fixed-icon">
          <Link
            className="whatsapp-icon"
            href={themeoptions.whatsappLink}
            target="_blank"
          >
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
                fill="#ec7223"
              />
              <path
                id="whatsapp"
                d="M35.392,38.049A20.634,20.634,0,0,0,2.927,62.941L0,73.627l10.936-2.871a20.565,20.565,0,0,0,9.859,2.509H20.8A20.5,20.5,0,0,0,35.392,38.049ZM20.8,69.789A17.115,17.115,0,0,1,12.07,67.4l-.623-.372-6.486,1.7L6.69,62.4l-.409-.65a17.178,17.178,0,1,1,31.861-9.115A17.336,17.336,0,0,1,20.8,69.789Zm9.4-12.841c-.511-.26-3.048-1.505-3.522-1.673s-.818-.26-1.161.26-1.329,1.673-1.635,2.026-.6.39-1.115.13c-3.029-1.515-5.018-2.7-7.015-6.133-.53-.911.53-.846,1.515-2.815a.955.955,0,0,0-.046-.9c-.13-.26-1.161-2.8-1.589-3.828-.418-1-.846-.864-1.161-.883-.3-.019-.641-.019-.985-.019a1.909,1.909,0,0,0-1.375.641,5.792,5.792,0,0,0-1.8,4.3,10.1,10.1,0,0,0,2.1,5.333c.26.344,3.633,5.547,8.809,7.786,3.271,1.412,4.553,1.533,6.188,1.292.994-.149,3.048-1.245,3.475-2.453a4.311,4.311,0,0,0,.3-2.453C31.062,57.329,30.718,57.2,30.207,56.948Z"
                transform="translate(14.543 -17.355)"
                fill="#111342"
              />
            </svg>

            <span className="whatsapp-heading">
              <svg viewBox="0 0 100 100" width="90" height="90">
                <defs>
                  <path
                    id="circle"
                    d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text font-size="12">
                  <textPath xlinkHref="#circle">
                    Follow the lba status today
                  </textPath>
                </text>
              </svg>
            </span>
          </Link>
        </div>
      )}

      <div className="footer-main-section">
        <div className="footer-main-block">
          <div className="container mx-auto px-4">
            <div className="footer-block flex flex-wrap lg:flex-nowrap items-center">
              <div className="footer-col w-full lg:w-auto text-center lg:text-left">
                {themeoptions?.footerLogo && (
                  <Link className="footer-logo inline-block lg:block" href="/">
                    <img src={themeoptions.footerLogo.sourceUrl} alt="LBA" />
                  </Link>
                )}
              </div>
              <div className="footer-col footer-navbar-col w-full">
                {footerMenu && (
                  <div className="footer-navbar-block">
                    <ul className="menu nav-menu">
                      {footerMenu.map((item: any, index) => {
                        return (
                          <li
                            key={`menuFooter-${index}`}
                            className={
                              router.pathname === item.url
                                ? 'menu-item active'
                                : 'menu-item'
                            }
                          >
                            <Link href={item.url}>{item.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className="footer-info-block">
                  <ul className="footer-info-box">
                    {themeoptions?.addressLocation && (
                      <li className="address">
                        <Link
                          href={`tel:${themeoptions.addressLocation}`}
                          target="_blank"
                        >
                          {`${themeoptions.addressLocation}LBA - Office`}
                        </Link>
                      </li>
                    )}
                    {themeoptions?.companyPhone && (
                      <li className="phone">
                        <Link href={`tel:${themeoptions.companyPhone}`}>
                          {`${themeoptions.companyPhone} – Shimon Friedman`}
                        </Link>
                      </li>
                    )}
                    {themeoptions?.companyEmail && (
                      <li className="mail">
                        <Link href={`mailto:${themeoptions.companyEmail}`}>
                          {themeoptions.companyEmail}
                        </Link>
                      </li>
                    )}
                    <li className="social-box">
                      <span className="social-heading">Watch us</span>
                      {themeoptions?.whatsappLink && (
                        <span className="footer-whatsapp-icon">
                          <Link
                            href={themeoptions.whatsappLink}
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              id="whatsapp"
                              data-name="whatsapp"
                              width="26.778"
                              height="26.778"
                              viewBox="0 0 26.778 26.778"
                            >
                              <path
                                id="Path_13585"
                                data-name="Path 13585"
                                d="M13.389,0A13.389,13.389,0,1,0,26.778,13.389,13.39,13.39,0,0,0,13.389,0Zm.284,21.184h0a8.01,8.01,0,0,1-3.83-.975L5.592,21.323l1.137-4.151a8.014,8.014,0,1,1,6.944,4.012Zm0,0"
                                fill="#EC7223"
                              />
                              <path
                                id="Path_13586"
                                data-name="Path 13586"
                                d="M140.734,124.469a6.661,6.661,0,0,0-5.645,10.2l.158.252-.673,2.457,2.521-.661.243.144a6.65,6.65,0,0,0,3.39.928h0a6.661,6.661,0,0,0,0-13.321Zm3.918,9.52a2.063,2.063,0,0,1-1.351.952,2.748,2.748,0,0,1-1.261-.079,11.563,11.563,0,0,1-1.142-.422,8.925,8.925,0,0,1-3.42-3.022,3.893,3.893,0,0,1-.818-2.071,2.244,2.244,0,0,1,.7-1.67.736.736,0,0,1,.534-.25c.133,0,.267,0,.384.007s.288-.047.45.344.567,1.386.617,1.486a.369.369,0,0,1,.017.351,5.707,5.707,0,0,1-.5.685c-.089.11-.2.208-.088.409a6.035,6.035,0,0,0,1.114,1.387,5.473,5.473,0,0,0,1.61.994c.2.1.317.083.434-.05s.5-.585.634-.785.267-.167.45-.1,1.168.551,1.368.651.334.15.384.234A1.67,1.67,0,0,1,144.652,133.989Zm0,0"
                                transform="translate(-127.059 -117.959)"
                                fill="#EC7223"
                              />
                            </svg>
                          </Link>
                        </span>
                      )}
                      {themeoptions?.instagramLink && (
                        <span className="instagram-icon">
                          <Link
                            href={themeoptions.instagramLink}
                            target="_blank"
                          >
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
                                  fill="#ec7223"
                                />
                                <path
                                  id="Path_62"
                                  data-name="Path 62"
                                  d="M19.389,6A13.389,13.389,0,1,0,32.778,19.389,13.389,13.389,0,0,0,19.389,6Zm8.272,16.792a5.066,5.066,0,0,1-1.35,3.446,5.159,5.159,0,0,1-3.483,1.335H15.949a5.158,5.158,0,0,1-3.483-1.335,5.066,5.066,0,0,1-1.35-3.446V15.986a5.066,5.066,0,0,1,1.35-3.446A5.159,5.159,0,0,1,15.949,11.2h6.879a5.158,5.158,0,0,1,3.483,1.335,5.066,5.066,0,0,1,1.35,3.446Z"
                                  transform="translate(-6 -6)"
                                  fill="#ec7223"
                                />
                                <path
                                  id="Path_63"
                                  data-name="Path 63"
                                  d="M139.758,131.529c-1.676-.046-5.029-.046-6.7,0a3.515,3.515,0,0,0-2.482.9,3.559,3.559,0,0,0-.914,2.455c-.043,1.636,0,6.547,0,6.547a3.575,3.575,0,0,0,.914,2.455,3.514,3.514,0,0,0,2.482.9c1.676.046,5.029.046,6.7,0a3.515,3.515,0,0,0,2.482-.9,3.558,3.558,0,0,0,.914-2.455v-6.547a3.558,3.558,0,0,0-.914-2.455,3.515,3.515,0,0,0-2.482-.9Zm-3.353,10.992a4.358,4.358,0,1,1,4.358-4.358A4.358,4.358,0,0,1,136.405,142.521Zm4.377-7.817a.872.872,0,1,1,.872-.872.872.872,0,0,1-.872.872Z"
                                  transform="translate(-123.016 -124.774)"
                                  fill="#ec7223"
                                />
                              </g>
                            </svg>
                          </Link>
                        </span>
                      )}
                    </li>
                    {themeoptions?.copyrightText && (
                      <li className="copyright-text">
                        <span>
                          {`${
                            themeoptions?.copyrightText
                          } ${new Date().getFullYear()}`}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-poweredby-section">
        <div className="container mx-auto px-4">
          <div className="footer-poweredby-block">
            <Link className="img-box" href="https://cwsio.com/" target="_blank">
              <img src="/assets/images/cws-logo.svg" alt="CWS logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
