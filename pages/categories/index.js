import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { api } from "../../lib/woo";

const index = ({ categoriesData }) => {
  return <div>index</div>;
};

export default index;

export async function getStaticProps(context) {
  const api = new WooCommerceRestApi({
    url: "https://fairo.pk/",
    consumerKey: "ck_7081f6a825552a782ea113eb073ccd0e22757175",
    consumerSecret: "cs_b8ac3535d9ab0c115a21b4d81f14759c2c4b7e43",
    version: "wc/v3",
  });
  const res = await api.get("products/categories", {
    per_page: 160,
  });
  const data = await res.data;

  //const withProducts = data.filter((cat) => cat.count !== 0);
  return {
    props: {
      categoriesData: data,
    }, // will be passed to the page component as props
  };
}
