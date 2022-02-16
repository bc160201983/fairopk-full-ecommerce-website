import Head from "next/head";
import Image from "next/image";
import { useGlobalContext } from "../context/context";
import styles from "../styles/Home.module.css";
import Alert from "../components/Home/Alert";
import TopNav from "../components/TopNav/TopNav";
import Banner1 from "../components/Banner/Banner1";
import AppdownloadBanner from "../components/Banner/AppdownloadBanner";
import ProductsByCategory from "../components/Home/ProductsByCategory";
import Cart from "../components/cart/Cart";
import { api } from "../lib/woo";

export default function Home({ categories, products }) {
  const { alert, showAlert, cartVisible } = useGlobalContext();

  return (
    <div className="">
      <div className={`snackbar ${alert.show && `show`}`}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>

      <TopNav />

      {cartVisible && <Cart />}
      <div className="w-full overflow-y-auto h-[calc(100vh-64px)]">
        <div className="max-w-screen-xl mx-auto">
          <Banner1 />
          <AppdownloadBanner />
          {/* <Slider1 /> */}
          {categories.map((cat, index) => {
            return (
              <ProductsByCategory
                key={cat.id}
                name={cat.name}
                index={index}
                productsData={products[index]}
              />
            );
            // return products[index].map((item) => {
            //   console.log(item);
            //   return <ProductsByCategory name={cat.name} />;
            // });
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await api.get("products/categories", {
    per_page: 5,
  });
  const data = await res.data;
  const withProducts = data.filter((cat) => cat.count !== 0);

  const fetchCatProducts = async (id) => {
    const res = await api.get("products", {
      category: parseInt(id),
    });
    return res.data;
  };

  const products = await Promise.all(
    withProducts.map((cat) => fetchCatProducts(cat.id))
  );

  return {
    props: {
      categories: withProducts,
      products: products,
    }, // will be passed to the page component as props
  };
}
