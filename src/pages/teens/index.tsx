import { useRouter } from 'next/router';
import { useEffect } from 'react';

import BasketBallListingBanner from '@/components/basketballListing/basketballListingBanner';
import BasketBallListingBannerBottom from '@/components/basketballListing/basketballListingBannerBottom';
import BasketBallVideo from '@/components/basketballListing/basketballVideo';
import Newsletter from '@/components/basketballListing/newsLetter';
import Testimonial from '@/components/basketballListing/testimonial';
import GraphAPI from '@/service/graphQL';

interface TeensProps {
  leagueSettings?: any;
}

const Teens: React.FC<TeensProps> = ({ leagueSettings }) => {
  const router = useRouter();
  const pathSegments = router.pathname.split('/');
  const lastName = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('#banner-vd')?.classList.remove('unloaded');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <BasketBallListingBanner data={leagueSettings} lastname={lastName} />
      <BasketBallListingBannerBottom data={leagueSettings} />
      <BasketBallVideo data={leagueSettings} />
      {/* <Staff lastname={lastName} /> */}
      <Testimonial data={leagueSettings} />
      <Newsletter />
    </>
  );
};

export default Teens;

export async function getStaticProps() {
  const leagueSettings = await GraphAPI.leagueSettings('teens');
  return {
    props: {
      leagueSettings: leagueSettings.data.data.pageBy.leaguesSettings,
    },
  };
}
