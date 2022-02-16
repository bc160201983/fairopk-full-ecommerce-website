import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { api } from "../../lib/woo";

const ProductPage = ({ product }) => {
  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const [productRes] = await Promise.all([
    api.get("products", { slug: params.slug }),
  ]);

  const [product] = await Promise.all([productRes.data]);

  return {
    props: {
      product,
    }, // will be passed to the page component as props
  };
}
