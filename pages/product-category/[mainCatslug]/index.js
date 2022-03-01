import React from "react";
import CategoryNav from "../../../components/CategoryNav/CategoryNav";
import ProductCategory from "../../../components/Product-Category/ProductCategory";
import { api } from "../../../lib/woo";

const index = ({ data }) => {
  // const mainCat = allCat.filter((cat) => cat.parent === 0);

  return (
    <>
      <div className="bg-white sticky top-0">
        <CategoryNav categoriesData={data.allCatData} />
      </div>
      <div className="bg-[#F9F9F9] h-screen">
        <ProductCategory data={data} />
      </div>
    </>
  );
};
export async function getStaticProps(context) {
  const { params } = context;
  // const [catRes] = await Promise.all([
  //   //api.get(`products`, { slug: params.slug }),
  //   api.get("products/categories", { per_page: 200 }),
  // ]);
  // const [allCat, subCart] = await Promise.all([
  //   //productRes.data,
  //   catRes.data,
  // ]);
  const [catRes, allCatRes] = await Promise.all([
    api.get("products/categories", { slug: params.mainCatslug }),
    api.get("products/categories", { per_page: 200 }),
  ]);
  const [parent, allCatData] = await Promise.all([catRes.data, allCatRes.data]);
  const subCat = allCatData.filter((cat) => cat.parent === parent[0].id);

  return {
    props: {
      data: { parent, sub: subCat, allCatData },
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const res = await api.get("products/categories", { per_page: 200 });
  const data = await res.data;
  const slugs = data.map((cat) => cat.slug);
  const paths = slugs.map((slug) => ({
    params: { mainCatslug: slug.toString() },
  }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default index;
