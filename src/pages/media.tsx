import MediaBottomImage from '@/components/media/mediaBottomImage';
import MediaFilter from '@/components/media/mediaFilter';
import MediaMention from '@/components/media/mediaMention';
import WhatsApp from '@/components/media/whatsapp';
import GraphAPI from '@/service/graphQL';

interface MediaProps {
  mediaDetails?: any;
  themeOptions?: any;
  mediaList?: any;
  mediaCat?: any;
}

const Media: React.FC<MediaProps> = ({
  mediaDetails,
  themeOptions,
  mediaList,
  mediaCat,
}) => (
  <>
    <MediaFilter mediaList={mediaList} cat={mediaCat} />
    <WhatsApp data={mediaDetails} themeOptions={themeOptions} />
    <MediaMention data={mediaDetails} />
    <MediaBottomImage data={mediaDetails} />
  </>
);

export default Media;

export async function getStaticProps() {
  const mediaDetails = await GraphAPI.mediaSettings();
  const themeOptions = await GraphAPI.themeOptions();
  const mediaList = await GraphAPI.mediaList();
  const mediaCat = await GraphAPI.leagueMediaCategory();
  return {
    props: {
      themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
      mediaDetails: mediaDetails.data.data.pageBy.mediaSettings,
      mediaList: mediaList.data.data.allLeagueMedia,
      mediaCat: mediaCat.data.data.leagueMediaCategories?.nodes || null,
    },
  };
}
