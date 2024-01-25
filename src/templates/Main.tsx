import 'aos/dist/aos.css';

import AOS from 'aos';
import { useRouter } from 'next/router';
import { type ReactNode, useEffect, useState } from 'react';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import Loader from '@/components/common/loader';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  themeoptions: any;
  footerMenu: [];
  headerMenu: [];
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(true);
  const [addClass, setAddClass] = useState('whatsapp-fixed-icon');
  function setItemWithExpiry(key: any, value: any, expirationInHours: any) {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + expirationInHours * 60 * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getItemWithExpiry(key: any) {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
      return null;
    }

    try {
      const item = JSON.parse(itemString);
      const now = new Date().getTime();
      if (now > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value;
    } catch (error) {
      return null;
    }
  }

  useEffect(() => {
    const shouldShowLoader = () => {
      const loaderLoaded = getItemWithExpiry('loaderLoaded');
      return !loaderLoaded && router.pathname === '/';
    };
    if (shouldShowLoader()) {
      setItemWithExpiry('loaderLoaded', 'true', 24);
    } else {
      setIsLoaded(false);
    }

    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setAddClass('');
      } else {
        setAddClass('whatsapp-fixed-icon');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div {...props} className={addClass}>
      {props.meta}
      {isLoaded && <Loader />}
      <Header themeoptions={props.themeoptions} headerMenu={props.headerMenu} />
      <main
        className={`main-${router.asPath
          .replace(/^\//, '')
          .replace(/\/$/, '')
          .replace(/\//g, '-')}`}
      >
        {props.children}
      </main>
      <Footer themeoptions={props.themeoptions} footerMenu={props.footerMenu} />
    </div>
  );
};

export { Main };
