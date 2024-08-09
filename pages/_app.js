
import "../styles/css/bootstrap.min.css";
import "../styles/css/header.css";
import "../styles/css/style.css";

import { Fragment, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
