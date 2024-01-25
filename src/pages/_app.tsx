/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable unused-imports/no-unused-vars */
import '../styles/scss/style.scss';
import '../styles/globals.css';

import { Meta } from '@/layouts/Meta';
import GraphAPI from '@/service/graphQL';
import { Main } from '@/templates/Main';

const MyApp = ({
  Component,
  pageProps,
  themeOptions,
  headerMenu,
  footerMenu,
  seo,
}: any) => {
  return (
    <Main
      meta={<Meta title={seo?.title} description={seo?.metaDesc} />}
      themeoptions={themeOptions}
      footerMenu={footerMenu}
      headerMenu={headerMenu}
    >
      <Component {...pageProps} />
    </Main>
  );
};

export default MyApp;
MyApp.getInitialProps = async (ctx: any) => {
  let uri;
  if (ctx.router.pathname.includes('[slug]')) {
    uri = `/leagues/${ctx.router.query.slug}`;
  } else {
    uri = ctx.router.pathname;
  }
  const themeOptions = await GraphAPI.themeOptions();
  const headerMenu = await GraphAPI.headerMenu();
  const footerMenu = await GraphAPI.footerMenu();
  const seo = await GraphAPI.seoSettings(uri);
  return {
    themeOptions: themeOptions.data.data.acfOptionsThemeOptions.themeOptions,
    headerMenu: headerMenu.data.data.menu.menuItems.nodes,
    footerMenu: footerMenu.data.data.menu.menuItems.nodes,
    seo: seo.data.data?.pageBy?.seo,
  };
};
