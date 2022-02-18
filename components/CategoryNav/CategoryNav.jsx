import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import { AiOutlineDown } from "react-icons/ai";

const CategoryNav = ({ categoriesData }) => {
  const { setAllCategories } = useGlobalContext();
  const [mainCategories, setMainCategories] = useState([]);
  const [rowsToDisplay, setRowsToDisplay] = useState(7);
  const filterMianCategories = () => {
    const Categories = categoriesData.filter(
      (cat) => cat.display !== "subcategories"
    );
    setMainCategories(Categories);
  };

  useEffect(() => {
    setAllCategories(categoriesData);
    filterMianCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showMore = () => {
    let CatLength = mainCategories.length;
    setRowsToDisplay(CatLength);
  };

  return (
    <div className="w-full">
      <div className="h-[47px] shadow-md  w-full lg:block hidden">
        <div className="wrapper max-w-screen-lg h-full mx-auto flex items-center overflow-y-auto">
          {mainCategories.slice(0, rowsToDisplay).map((cat) => {
            return (
              <div
                key={cat.id}
                className="py-[14px] px-[20px] h-full text-[16px] text-[#666666] hover:bg-gray-100 cursor-pointer whitespace-nowrap"
              >
                {cat.name}
              </div>
            );
          })}
          <div
            onClick={showMore}
            className=" py-[14px] px-[20px] h-full text-[16px] text-[#666666] hover:bg-gray-100 cursor-pointer whitespace-nowrap"
          >
            <div className="flex justify-center items-center">
              <div>More</div>
              <div>
                <AiOutlineDown className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden fixed bottom-[calc(100vh-111)] right-[450px] shadow-md overflow-y-scroll w-[183px] h-[661px] bg-black border-x-4"></div>
    </div>
  );
};

export default CategoryNav;
