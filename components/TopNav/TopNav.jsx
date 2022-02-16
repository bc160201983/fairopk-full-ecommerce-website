import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineDown,
} from "react-icons/ai";
import { useGlobalContext } from "../../context/context";

/**
 * Hook that alerts clicks outside of the passed ref
 */

const TopNav = () => {
  const [visible, setVisible] = useState(false);
  const [addClass, setAddClass] = useState("");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const { total, openCartModal } = useGlobalContext();
  const handleSearch = () => {
    setVisible(true);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <nav className="w-full lg:h-[64px] h-auto bg-[#FFe141] sticky top-0 z-50">
        <div className="nav-wrraper lg:flex justify-center items-center p-1">
          <div className="left-header w-1/4 flex lg:justify-evenly justify-start mx-auto items-center">
            <div className="logo lg:visible invisible">
              <img
                width="70"
                height="35"
                className="object-contain"
                src="https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1"
                alt=""
              />
            </div>
            <div className="delivery flex justify-center text-[16px] whitespace-nowrap items-center cursor-pointer">
              delivery in 8 minuts
              <AiOutlineDown className="ml-1" />
            </div>
          </div>
          <div
            className=" middle-header lg:w-1/2 w-full mx-auto mt-2"
            onClick={handleSearch}
          >
            <div className="search-input  border-solid	border-[D8D8D8] relative">
              <button className="absolute block top-0	left-0 h-[42px] w-[40px] text-[#999999] leading-[27.6px] pl-2 text-[24px]">
                <AiOutlineSearch className="" />
              </button>
              <input
                placeholder="Search for products"
                className={`w-full rounded-t-[8px] h-11 mr-[-43px] pr-[16px] pl-[48px] focus:outline-none ${
                  visible || "rounded-[8px]"
                }`}
                type="text"
              />
              {visible && (
                <div
                  ref={wrapperRef}
                  id="myModal"
                  className={`search-modal bg-white w-full h-52 absolute rounded-b-[8px] z-[2001] my-modal ease-in duration-300	`}
                ></div>
              )}
            </div>
          </div>
          <div className="right-header lg:w-1/4 flex justify-evenly items-center mt-2">
            <div className="categories font-[500] text-[14px]">
              <a href="#">Categories</a>
            </div>
            <div className="login font-medium text-[14px]">login</div>
            <div
              onClick={() => openCartModal(true)}
              className="hover:bg-[#499220] text-sm text-white w-[92px] h-[40px] cart rounded-[58px] flex justify-center items-center bg-[#0c831f] cursor-pointer hover:transition-all"
            >
              <span className="flex justify-center text-center flex-shrink-0 pr-2">
                <AiOutlineShoppingCart className="w-[16px] h-[16px]" />
              </span>
              {total.amount !== 0 ? (
                <div className="flex flex-col justify-start items-center">
                  <div className="item-count text-[12px] text-left pt-2 pr-2 font-[200]">
                    {total.amount} items
                  </div>
                  <div className="cart-item-total font-bold text-[12px] pb-2 pr-2">
                    Rs{total.total}
                  </div>
                </div>
              ) : (
                <div className="font-[200] text-[14px]">my cart</div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
{
  /* {total.amount !== 0
                  ? total.amount + " items" + " Rs" + total.total
                  : "my cart"} */
}
{
  /* <div className="px-1">my cart</div>; */
}
export default TopNav;
