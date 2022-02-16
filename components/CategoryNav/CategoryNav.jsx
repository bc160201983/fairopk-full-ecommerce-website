import React from "react";
import { useGlobalContext } from "../../context/context";

const CategoryNav = () => {
  const { mainCategories } = useGlobalContext();

  return (
    <div className="h-[60px] shadow-md w-full ">
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
  );
};

export default CategoryNav;
