import React, { useEffect } from "react";
useRouter;
import Head from "next/head";
import TopNav from "./TopNav/TopNav";
import { useGlobalContext } from "../context/context";
import Alert from "./Home/Alert";
import Cart from "./cart/Cart";
import CategoryNav from "./CategoryNav/CategoryNav";
import ProductPage from "./ProductPage/ProductPage";
import Router, { useRouter } from "next/router";
import Footer from "./Footer/Footer";

const Layout = ({ children, pageProps }) => {
  const router = useRouter();
  const { alert, showAlert, cartVisible } = useGlobalContext();
  const showCatNav =
    router.pathname === "/product/[slug]" || router.pathname === "/categories"
      ? true
      : false;
  const showProductPage = router.pathname === "/product/[slug]" ? true : false;

  return (
    <>
      <Head>
        <title>Fairo.pk - Home</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`snackbar ${alert.show && `show`}`}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>
      {cartVisible && <Cart />}
      <TopNav />
      {/* {showCatNav && <CategoryNav />} */}

      <div className="w-full overflow-y-auto sm:h-[calc(100vh-64px)] h-[calc(100vh-129px)]">
        {/* {showCatNav && <ProductPage />} */}
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
