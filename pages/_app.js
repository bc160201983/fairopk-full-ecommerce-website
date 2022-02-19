import { useRouter } from "next/router";
import Layout from "../components/Layout";

import { AppProvider } from "../context/context";
import { api } from "../lib/woo";
import "../styles/globals.css";

function MyApp({ Component, pageProps, AllCategoryData }) {
  const router = useRouter();
  return (
    <AppProvider pageProps={AllCategoryData}>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
