import AboutDetails from '@/components/about/aboutDetails';
import GraphAPI from '@/service/graphQL';

interface AboutProps {
  aboutDetails?: any;
  themeOptions?: any;
}

const About: React.FC<AboutProps> = ({ aboutDetails, themeOptions }) => {
  return <AboutDetails data={aboutDetails} themeOptions={themeOptions} />;
};

export default About;

export async function getStaticProps() {
  const aboutDetails = await GraphAPI.aboutSettings();
  const themeOptions = await GraphAPI.themeOptions();
  return {
    props: {
      aboutDetails: aboutDetails.data.data.pageBy.aboutSettings,
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
    },
  };
}
