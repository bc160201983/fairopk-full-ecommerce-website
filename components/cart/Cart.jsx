import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose, AiTwotoneAlert } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";
import { api } from "../../lib/woo";
import Alert from "../Home/Alert";
import BillDetails from "./BillDetails";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";
import ShiptAndDelivery from "./ShiptAndDelivery";

const Cart = () => {
  const { setCartVisible, total, cart, showAlert } = useGlobalContext();
  const [category, setCategory] = useState([]);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setCartVisible(false);
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

  const fetchSingleCategory = async (catId) => {
    const res = await api.get("products/categories", {
      include: catId,
    });
    const data = await res.data;
    const withProducts = data.filter((cat) => cat.count !== 0);
    setCategory(withProducts);
  };

  useEffect(() => {
    fetchSingleCategory(169);
  }, []);

  return (
    <div className="overlay">
      <div className="modal overflow-hidden h-screen relative" ref={wrapperRef}>
        <div className="flex justify-between items-center p-[16px] z-[2000] h-[64px] shadow-lg sticky top-0 bg-white">
          <div className="font-bold text-[24px]">my cart</div>
          <div
            className="w-[28] h-[28] text-[28px] cursor-pointer"
            onClick={() => setCartVisible(false)}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div
          className={`contant scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light bg-gray-200 overflow-y-auto ${
            cart.length !== 0 ? `h-[calc(100vh-132px)]` : `h-full`
          } `}
        >
          {cart.length !== 0 ? <ShiptAndDelivery /> : <EmptyCart />}
          {cart.map((item) => {
            return <CartItems key={item.id} {...item} />;
          })}
          {cart.length !== 0 && <BillDetails />}

          {category.map((cart) => {
            return (
              <ProductSlider key={cart.id} id={cart.id} name={cart.name} />
            );
          })}
        </div>

        {/* foooter */}
        {cart.length !== 0 && <Footer className={"bg-gray-200"} />}
      </div>
    </div>
  );
};

export default Cart;
