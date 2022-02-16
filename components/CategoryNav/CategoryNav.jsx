import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";

const CategoryNav = ({ categoriesData }) => {
  const { setAllCategories } = useGlobalContext();
  const [mainCategories, setMainCategories] = useState([]);
  const filterMianCategories = () => {
    const Categories = categoriesData.filter(
      (cat) => cat.display !== "subcategories"
    );
    setMainCategories(Categories);
  };

  useEffect(() => {
    setAllCategories(categoriesData);
    filterMianCategories();
  }, []);

  return (
    <>
      <div className="h-[60px] shadow-md w-full lg:block hidden">
        <div className="wrapper max-w-screen-xl h-full mx-auto flex items-center overflow-x-auto">
          {mainCategories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="py-[14px] px-[20px] h-full text-[16px] text-[#666666] hover:bg-gray-100 cursor-pointer whitespace-nowrap"
              >
                {cat.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
