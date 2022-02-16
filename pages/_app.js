import Layout from "../components/Layout";

import { AppProvider } from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
