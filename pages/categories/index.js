import { api } from "../../lib/woo";

const index = ({ categoriesData }) => {
  return <div>index</div>;
};

export default index;

export async function getStaticProps(context) {
  const res = await api.get("products/categories", { per_page: 200 });
  const data = await res.data;

  return {
    props: {
      categoriesData: data,
    }, // will be passed to the page component as props
  };
}
