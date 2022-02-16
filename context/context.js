import React, { useState, useContext, useEffect } from "react";
import { api } from "../lib/woo";
// make sure to use https

const AppContext = React.createContext();
// const getLocalStorage = () => {
//   const ISSERVER = typeof window === "undefined";
//   //if () let cart = localStorage.getItem("cart");
//   if (!ISSERVER) {
//     let cart = localStorage.getItem("cart");
//     return (cart = JSON.parse(localStorage.getItem("cart")));
//   } else {
//     return [];
//   }
// };

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [categories, setCategories] = useState([]);
  const [totalItemAmount, setTotalItemAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [total, setTotal] = useState({ amount: 0, total: 0 });
  const [cartVisible, setCartVisible] = useState(false);

  const openCartModal = () => {
    setCartVisible(true);
  };

  // const fetchCategoryProducts = async () => {
  //   const res = await api.get("products/categories", {
  //     per_page: 10,
  //   });
  //   const data = await res.data;
  //   const withProducts = data.filter((cat) => cat.count !== 0);
  //   setCategories(withProducts);
  // };

  const AddToCart = (id, name, price, image, stock_quantity) => {
    const newCartItem = {
      id: id,
      title: name,
      price: price,
      image: image,
      amount: 1,
      stock_quantity,
    };

    setCart([...cart, newCartItem]);
  };

  const outOfStock = (stock_status) => {
    return stock_status === "outofstock";
  };

  const increase = (id, stock_quantity) => {
    const newObj = [];
    let tempCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    setCart(...newObj, tempCart);
  };

  const decrease = (id) => {
    const newObj = [];
    let tempCart = cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    setCart(...newObj, tempCart);
  };

  const showAlert = (show = false) => {
    setAlert({ show: show, msg: "Sorry, you can't add more of this item." });
  };

  const getTotal = () => {
    let { total, amount } = cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    setTotal((prev) => {
      return { ...prev, amount, total };
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getTotal();
  }, [cart]);
  // useEffect(() => {
  //   fetchCategoryProducts();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        cartVisible,
        setCartVisible,
        openCartModal,
        categories,
        AddToCart,
        inCart,
        setInCart,
        increase,
        cart,
        decrease,
        alert,
        setAlert,
        showAlert,
        total,
        outOfStock,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
