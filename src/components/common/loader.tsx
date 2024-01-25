import { Expo, TweenMax } from 'gsap/dist/gsap';
import Lottie from 'lottie-react';
import loaderAnimation from 'public/assets/lottiefiles/loader.json';
import { useEffect } from 'react';

const Loader = () => {
  const removeLoader = () => {
    const loadingDiv = document.querySelector('#loadingDiv');
    if (loadingDiv) {
      setTimeout(() => {
        loadingDiv.remove();
        document.body.classList.remove('overflow-hidden');
        document.documentElement.classList.remove('overflow-hidden');
      }, 500);
    }
  };

  useEffect(() => {
    setTimeout(removeLoader, 4500);
  }, []);

  useEffect(() => {
    TweenMax.from('.lba-landing-box .desktop-logo', 3, {
      delay: 3.4,
      top: 70,
      left: 140,
      width: 117,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from('.lba-landing-box .desktop-logo', 2, {
      delay: 3.4,
      xPercent: -50,
      left: '50%',
      yPercent: -50,
      top: '50%',
      width: 500,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    // -----------------

    TweenMax.from('.lba-landing-box .laptop-logo', 3, {
      delay: 3.4,
      top: 70,
      left: 15,
      width: 117,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from('.lba-landing-box .laptop-logo', 2, {
      delay: 3.4,
      xPercent: -50,
      left: '50%',
      yPercent: -50,
      top: '50%',
      width: 500,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    // -----------------

    TweenMax.from('.lba-landing-box .tablet-logo', 3, {
      delay: 3.4,
      top: 60,
      left: 50,
      width: 80,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from('.lba-landing-box .tablet-logo', 2, {
      delay: 3.4,
      xPercent: -50,
      left: '50%',
      yPercent: -50,
      top: '50%',
      width: 350,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    // -----------------

    TweenMax.from('.lba-landing-box .mobile-logo', 3, {
      delay: 3.4,
      top: 60,
      left: 15,
      width: 56,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from('.lba-landing-box .mobile-logo', 2, {
      delay: 3.4,
      xPercent: -50,
      left: '50%',
      yPercent: -50,
      top: '50%',
      width: 350,
      opacity: 1,
      ease: Expo.easeInOut,
    });
  });

  return (
    <div id="loadingDiv" className="load-main">
      <div className="lba-landing-block">
        <div className="lba-landing-box">
          <div className="overlay-video-box hidden">
            <video>
              <source
                src="/assets/videos/hero-bnr-video.mp4"
                type="video/webm"
              />
            </video>
          </div>
          <div className="logo desktop-logo">
            {/* <img src="/assets/images/logo.svg" alt="lba leagues" /> */}
            <img src="/assets/images/LBA_GIF.gif" alt="lba leagues" />
          </div>
          <div className="logo laptop-logo">
            {/* <img src="/assets/images/logo.svg" alt="lba leagues" /> */}
            <img src="/assets/images/LBA_GIF.gif" alt="lba leagues" />
          </div>
          <div className="logo tablet-logo">
            {/* <img src="/assets/images/logo.svg" alt="lba leagues" /> */}
            <img src="/assets/images/LBA_GIF.gif" alt="lba leagues" />
          </div>
          <div className="logo mobile-logo">
            {/* <img src="/assets/images/logo.svg" alt="lba leagues" /> */}
            <img src="/assets/images/LBA_GIF.gif" alt="lba leagues" />
          </div>
          <div className="loader-animation">
            <Lottie animationData={loaderAnimation} loop autoplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
