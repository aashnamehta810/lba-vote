import ContactDetail from '@/components/contact/contactDetail';
import GraphAPI from '@/service/graphQL';

interface ContactProp {
  themeOptions?: any;
}

const ContactUs: React.FC<ContactProp> = ({ themeOptions }) => (
  <ContactDetail data={themeOptions} />
);

export default ContactUs;

export async function getStaticProps() {
  const themeOptions = await GraphAPI.themeOptions();
  return {
    props: {
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
    },
  };
}
