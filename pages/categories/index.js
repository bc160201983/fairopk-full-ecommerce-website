import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { api } from "../../lib/woo";

const index = ({ categoriesData }) => {
  return (
    <div>
      <div className="h-[47px] shadow-md w-full lg:block hidden">
        <div className="wrapper max-w-screen-xl h-full mx-auto flex items-center overflow-x-auto">
          <CategoryNav categoriesData={categoriesData} />
        </div>
      </div>
    </div>
  );
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
