/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-script-url */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface HeaderProps {
  themeoptions?: any;
  headerMenu?: [];
}

const Header: React.FC<HeaderProps> = ({ themeoptions }) => {
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();
  const handleToggleClick = () => {
    setIsToggled(!isToggled);
    document.documentElement?.classList.toggle('overflow-hidden');
    document.body?.classList.toggle('mobile-nav-open');
    const mainNavigation = document.querySelector('header .main-navigation');
    if (mainNavigation) {
      mainNavigation.classList.toggle('mobile-menu-open');
    }
    const menuToggle = document.querySelector('header .menu-toggle');
    if (menuToggle) {
      menuToggle.classList.toggle('toggled');
    }
  };

  const handleFadeupClick = () => {
    setTimeout(() => {
      const menu = document.querySelector('header .main-navigation ul.menu');
      if (menu) {
        menu.classList.toggle('fadeup');
      }
    }, 400);
  };

  const handleRegisterLink = (e: any) => {
    e.preventDefault();
    const menu = document.querySelector('header .main-navigation ul.menu');
    const menuToggle = document.querySelector('header .menu-toggle');
    document.body?.classList.remove('mobile-nav-open');
    menu?.classList.remove('fadeup');
    menuToggle?.classList.remove('toggled');
    document.documentElement?.classList.remove('overflow-hidden');
    const mainNavigation = document.querySelector('header .main-navigation');
    if (mainNavigation) {
      mainNavigation.classList.remove('mobile-menu-open');
    }
    const href = e.currentTarget.getAttribute('href');
    router.push(href);
  };

  const handleNavLink = (e: any) => {
    e.preventDefault();
    const primaryMenu = document.getElementById('primary-menu');
    const closestLi = e.target.closest('li');
    if (closestLi && !closestLi.classList.contains('menu-has-child')) {
      const menu = document.querySelector('header .main-navigation ul.menu');
      const menuToggle = document.querySelector('header .menu-toggle');
      document.body?.classList.remove('mobile-nav-open');
      menu?.classList.remove('fadeup');
      menuToggle?.classList.remove('toggled');

      document.documentElement?.classList.remove('overflow-hidden');
      const mainNavigation = document.querySelector('header .main-navigation');
      if (mainNavigation) {
        mainNavigation.classList.remove('mobile-menu-open');
      }
    } else {
      if (!closestLi.classList.contains('toggled')) {
        const elementsWithMenuClass =
          document.querySelectorAll('.menu-has-child');
        if (primaryMenu) {
          primaryMenu.classList.remove('submenu-open');
        }
        elementsWithMenuClass.forEach((element) => {
          element.classList.remove('toggled');
        });
      }
      closestLi.classList.toggle('toggled');
      if (primaryMenu) {
        primaryMenu.classList.toggle('submenu-open');
      }
    }
    const href = e.currentTarget.getAttribute('href');
    router.push(href);
  };

  useEffect(() => {
    const menuToggle = document.querySelector('header .menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', handleToggleClick);
    }
    if (menuToggle) {
      menuToggle.addEventListener('click', handleFadeupClick);
    }

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleToggleClick);
      }
      // menuItems.forEach((menuItem) => {
      //   menuItem.removeEventListener('click', handleMenuItemClick);
      // });
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleFadeupClick);
      }
    };
  }, []);

  return (
    <header className="site-header absolute left-0 right-0 top-0">
      {themeoptions?.headerTagline && (
        <div className="top-bar-block">
          <div className="container mx-auto px-4">
            <div className="top-bar-box">
              <span>{themeoptions.headerTagline}</span>
            </div>
          </div>
        </div>
      )}
      <div className="header-main-block flex">
        {themeoptions?.headerLogo && (
          <div className="header-logo-block">
            <Link href="/">
              <img
                src={themeoptions.headerLogo.sourceUrl}
                alt="LBA"
                width="117px"
                height="144px"
              />
            </Link>
          </div>
        )}
        <div className="header-nav-block flex justify-end xl:justify-between items-center self-start w-full pt-1.5 mt-px">
          <nav id="site-navigation" className="main-navigation">
            {/* <div className="mobile-menu-bg-overlay xl:hidden">
              <span />
            </div> */}
            <div className="mobile-header-btn-box flex xl:hidden">
              <Link
                href="https://lbaleagues.vercel.app/register"
                className="orange-btn"
                onClick={handleRegisterLink}
              >
                Register
              </Link>
              <span className="seperator" />
              <Link
                href="https://www.fmm.com/"
                className="loan-link"
                target="_blank"
              >
                <img
                  src="/assets/images/FM-home-loan-img.svg"
                  alt="FM Home Loan"
                />
              </Link>
              <span className="seperator" />
              <Link
                href="https://thehisplace.com/"
                className="his-link"
                target="_blank"
              >
                <img src="/assets/images/his-place-logo1.svg" alt="His Place" />
              </Link>
              <span className="seperator" />
              <Link
                href="https://thelakewoodscoop.com/"
                className="lakewood-link"
                target="_blank"
              >
                <img
                  src="/assets/images/tls-logo.svg"
                  alt="The Lakewood Scoop"
                />
              </Link>
            </div>
            <div className="mobile-menu-logo xl:hidden">
              {themeoptions?.headerLogo && (
                <Link href="/">
                  <img src={themeoptions.headerLogo.sourceUrl} alt="LBA" />
                </Link>
              )}
            </div>
            <div className="menu-menu-1-container">
              <ul id="primary-menu" className="menu nav-menu">
                <li className="menu-item">
                  <Link
                    href="https://lbaleagues.vercel.app/"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="https://lbaleagues.vercel.app/about/"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item menu-has-child">
                  <Link
                    href="javascript:void(0)"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Sponsor
                  </Link>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/sponsors/"
                          target="_blank"
                        >
                          Sponsors
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/sponsors-directory/"
                          target="_blank"
                        >
                          Sponsors Directory
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="menu-item menu-has-child">
                  <Link
                    href="javascript:void(0)"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Junior
                  </Link>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/juniors/"
                          target="_blank"
                        >
                          Juniors League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/juniors/baseball-league-junior/"
                          target="_blank"
                        >
                          Baseball League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/juniors/basketball-league-junior/"
                          target="_blank"
                        >
                          Basketball League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/juniors/bowling-league-junior/"
                          target="_blank"
                        >
                          Bowling League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/juniors/chess-league-junior/"
                          target="_blank"
                        >
                          Chess League
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="menu-item menu-has-child">
                  <Link
                    href="javascript:void(0)"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Teens
                  </Link>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/teens/"
                          target="_blank"
                        >
                          Teens League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/teens/baseball-league-teens/"
                          target="_blank"
                        >
                          Baseball League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/teens/basketball-league-teens/"
                          target="_blank"
                        >
                          Basketball League
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="menu-item menu-has-child">
                  <Link
                    href="javascript:void(0)"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Adults
                  </Link>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/adult/"
                          target="_blank"
                        >
                          Adult League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/adult/baseball-league-adult/"
                          target="_blank"
                        >
                          Baseball League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/adult/basketball-league-adult/"
                          target="_blank"
                        >
                          Basketball League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/adult/football-league-adult/"
                          target="_blank"
                        >
                          Football League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/adult/volleyball-league-adult/"
                          target="_blank"
                        >
                          Volleyball League
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://lbaleagues.vercel.app/adult/bowling-league-adult/"
                          target="_blank"
                        >
                          Bowling League
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item">
                  <Link
                    href="https://lbaleagues.vercel.app/media/"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Media
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="https://lbaleagues.vercel.app/contact/"
                    className="nav-link"
                    onClick={handleNavLink}
                    target="_blank"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mobile-menu-footer-block flex xl:hidden">
              <div className="mobile-menu-contact-info">
                <ul className="contact-info-box">
                  {themeoptions?.addressLocation && (
                    <li className="address">
                      <Link href="tel:732.730.7" target="_blank">
                        {themeoptions.addressLocation}
                      </Link>
                    </li>
                  )}
                  {themeoptions?.companyPhone && (
                    <li className="phone">
                      <Link href="tel:+7329949780">
                        {themeoptions.companyPhone}
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
                </ul>
              </div>
              <div className="mobile-menu-social-block">
                <span className="social-heading">Watch us</span>
                {themeoptions?.whatsappLink && (
                  <span className="menu-whatsapp-icon">
                    <Link href={themeoptions.whatsappLink} target="_blank">
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
                          fill="#fff"
                        />
                        <path
                          id="Path_13586"
                          data-name="Path 13586"
                          d="M140.734,124.469a6.661,6.661,0,0,0-5.645,10.2l.158.252-.673,2.457,2.521-.661.243.144a6.65,6.65,0,0,0,3.39.928h0a6.661,6.661,0,0,0,0-13.321Zm3.918,9.52a2.063,2.063,0,0,1-1.351.952,2.748,2.748,0,0,1-1.261-.079,11.563,11.563,0,0,1-1.142-.422,8.925,8.925,0,0,1-3.42-3.022,3.893,3.893,0,0,1-.818-2.071,2.244,2.244,0,0,1,.7-1.67.736.736,0,0,1,.534-.25c.133,0,.267,0,.384.007s.288-.047.45.344.567,1.386.617,1.486a.369.369,0,0,1,.017.351,5.707,5.707,0,0,1-.5.685c-.089.11-.2.208-.088.409a6.035,6.035,0,0,0,1.114,1.387,5.473,5.473,0,0,0,1.61.994c.2.1.317.083.434-.05s.5-.585.634-.785.267-.167.45-.1,1.168.551,1.368.651.334.15.384.234A1.67,1.67,0,0,1,144.652,133.989Zm0,0"
                          transform="translate(-127.059 -117.959)"
                          fill="#fff"
                        />
                      </svg>
                    </Link>
                  </span>
                )}
                {themeoptions?.instagramLink && (
                  <span className="instagram-icon">
                    <Link href={themeoptions.instagramLink} target="_blank">
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
                            fill="#fff"
                          />
                          <path
                            id="Path_62"
                            data-name="Path 62"
                            d="M19.389,6A13.389,13.389,0,1,0,32.778,19.389,13.389,13.389,0,0,0,19.389,6Zm8.272,16.792a5.066,5.066,0,0,1-1.35,3.446,5.159,5.159,0,0,1-3.483,1.335H15.949a5.158,5.158,0,0,1-3.483-1.335,5.066,5.066,0,0,1-1.35-3.446V15.986a5.066,5.066,0,0,1,1.35-3.446A5.159,5.159,0,0,1,15.949,11.2h6.879a5.158,5.158,0,0,1,3.483,1.335,5.066,5.066,0,0,1,1.35,3.446Z"
                            transform="translate(-6 -6)"
                            fill="#fff"
                          />
                          <path
                            id="Path_63"
                            data-name="Path 63"
                            d="M139.758,131.529c-1.676-.046-5.029-.046-6.7,0a3.515,3.515,0,0,0-2.482.9,3.559,3.559,0,0,0-.914,2.455c-.043,1.636,0,6.547,0,6.547a3.575,3.575,0,0,0,.914,2.455,3.514,3.514,0,0,0,2.482.9c1.676.046,5.029.046,6.7,0a3.515,3.515,0,0,0,2.482-.9,3.558,3.558,0,0,0,.914-2.455v-6.547a3.558,3.558,0,0,0-.914-2.455,3.515,3.515,0,0,0-2.482-.9Zm-3.353,10.992a4.358,4.358,0,1,1,4.358-4.358A4.358,4.358,0,0,1,136.405,142.521Zm4.377-7.817a.872.872,0,1,1,.872-.872.872.872,0,0,1-.872.872Z"
                            transform="translate(-123.016 -124.774)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </Link>
                  </span>
                )}
              </div>
            </div>
          </nav>
          <div className="header-contact-btn">
            <div className="header-btn-box relative hidden xl:flex items-center">
              <Link
                href="https://lbaleagues.vercel.app/register"
                className="orange-btn"
                target="_blank"
              >
                Register
              </Link>
              <span className="seperator" />
              <Link href="/" className="loan-link">
                <img
                  src="/assets/images/FM-home-loan-img.svg"
                  alt="FM Home Loan"
                />
              </Link>
              <span className="seperator" />
              <Link href="/" className="his-link">
                <img src="/assets/images/his-place-logo1.svg" alt="His Place" />
              </Link>
              <span className="seperator" />
              <Link href="/" className="lakewood-link">
                <img
                  src="/assets/images/tls-logo.svg"
                  alt="The Lakewood Scoop"
                />
              </Link>
            </div>
            <button
              className="menu-toggle flex xl:hidden"
              aria-controls="primary-menu"
              aria-expanded="true"
              type="button"
            >
              <span className="navbar-toggler-icon">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
