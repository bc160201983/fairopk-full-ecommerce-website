import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { api } from "../../lib/woo";

const ProductPage = ({ product }) => {
  //const productData = product[0];
  return (
    <div>
      <h2>{product[0].name}</h2>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await api.get(`products`, { slug: params.slug });
  const data = await res.data;

  return {
    props: {
      product: data,
    }, // will be passed to the page component as props
  };
}
