/* eslint-disable import/no-named-as-default */
import { useEffect } from 'react';

import Adrenaline from '@/components/home/adrenaline';
import HomeBanner from '@/components/home/homeBanner';
import HowItWorks from '@/components/home/howItWorks';
import LBAMarketing from '@/components/home/lbaMarketing';
import LBASliderSection from '@/components/home/lbaSliderSection';
import ProLeague from '@/components/home/proLeague';
import Sponsors from '@/components/home/sponsors';
import Testimonials from '@/components/home/testimonial';
import YouChoose from '@/components/home/youChoose';
import GraphAPI from '@/service/graphQL';

interface HomeProps {
  homeDetails: any;
  themeOptions: any;
  teamDetails: any;
}

const Index: React.FC<HomeProps> = ({
  homeDetails,
  themeOptions,
  teamDetails,
}) => {
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  });
  return (
    <>
      <HomeBanner data={homeDetails} />
      <ProLeague
        data={homeDetails}
        themeOptions={themeOptions}
        teamDetails={teamDetails}
      />
      <Adrenaline data={homeDetails} />
      <YouChoose data={homeDetails} />
      <LBASliderSection data={homeDetails} />
      <Testimonials data={homeDetails} />
      <LBAMarketing data={homeDetails} />
      <Sponsors data={themeOptions} />
      <HowItWorks data={homeDetails} />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const homeDetails = await GraphAPI.homeSettings();
  const themeOptions = await GraphAPI.themeOptions();
  const teamDetails = await GraphAPI.teamData();

  return {
    props: {
      homeDetails: homeDetails.data.data.pageBy.homeSettings,
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
      teamDetails: teamDetails || null,
    },
  };
}
