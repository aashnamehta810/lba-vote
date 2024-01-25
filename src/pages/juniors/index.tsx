import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import BasketBallListingBanner from '@/components/basketballListing/basketballListingBanner';
import BasketBallListingBannerBottom from '@/components/basketballListing/basketballListingBannerBottom';
import BasketBallVideo from '@/components/basketballListing/basketballVideo';
import BasketballWinningFront from '@/components/basketballListing/basketballWinningFront';
import Newsletter from '@/components/basketballListing/newsLetter';
import Staff from '@/components/basketballListing/staff';
import Testimonial from '@/components/basketballListing/testimonial';
import TestimonialPopup from '@/components/testimonialPopup/testimonialPopup';
import GraphAPI from '@/service/graphQL';

interface JuniorProps {
  leagueSettings?: any;
}

const Juniors: React.FC<JuniorProps> = ({ leagueSettings }) => {
  const router = useRouter();
  const pathSegments = router.pathname.split('/');
  const lastName = pathSegments[pathSegments.length - 1];
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    setShowModal(true);
    const timer = setTimeout(() => {
      setShowModal(false);
      setTimeout(() => {
        document.querySelector('#banner-vd')?.classList.remove('unloaded');
      }, 1000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showModal && (
        <TestimonialPopup data={leagueSettings} onClose={handleClose} />
      )}
      <BasketBallListingBanner data={leagueSettings} lastname={lastName} />
      <BasketBallListingBannerBottom data={leagueSettings} />
      <BasketballWinningFront data={leagueSettings} />
      <Testimonial data={leagueSettings} />
      <BasketBallVideo data={leagueSettings} />
      <Staff data={leagueSettings} />
      <Newsletter />
    </>
  );
};

export default Juniors;

export async function getStaticProps() {
  const leagueSettings = await GraphAPI.leagueSettings('juniors');
  return {
    props: {
      leagueSettings: leagueSettings.data.data.pageBy.leaguesSettings,
    },
  };
}
