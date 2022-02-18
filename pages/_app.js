import Layout from "../components/Layout";

import { AppProvider } from "../context/context";
import { api } from "../lib/woo";
import "../styles/globals.css";

function MyApp({ Component, pageProps, AllCategoryData }) {
  return (
    <AppProvider pageProps={AllCategoryData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
