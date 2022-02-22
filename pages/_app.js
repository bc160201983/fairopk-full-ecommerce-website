import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { AppProvider } from "../context/context";
import { api } from "../lib/woo";
import "../styles/globals.css";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AppProvider pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
