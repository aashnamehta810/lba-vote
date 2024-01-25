/* eslint-disable import/no-named-as-default */
import { useEffect } from 'react';

import HomeBanner from '@/components/home/homeBanner';
import ProLeague from '@/components/home/proLeague';
import GraphAPI from '@/service/graphQL';

interface HomeProps {
  homeDetails: any;
  themeOptions: any;
}

const Index: React.FC<HomeProps> = ({ homeDetails, themeOptions }) => {
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  });
  return (
    <>
      <HomeBanner data={homeDetails} />
      <ProLeague themeOptions={themeOptions} />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const homeDetails = await GraphAPI.homeSettings();
  const themeOptions = await GraphAPI.themeOptions();

  return {
    props: {
      homeDetails: homeDetails.data.data.pageBy.homeSettings,
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
    },
  };
}
