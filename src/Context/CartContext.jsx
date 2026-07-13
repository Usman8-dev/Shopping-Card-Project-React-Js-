import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const cartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //   Add product to cart
  const AddtoCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if(existing){
        return prev.map((item)=> item.id === product.id ? {...item, qty: item.qty+1} : item)
      }else{
        return [...prev, {...product, qty: 1}]
      }
    });
  };

  return (
    <cartProvider.Provider value={{ cart, setCart, AddtoCart }}>
      {children}
    </cartProvider.Provider>
  );
};

// Custom Hook 
export const useCart = ()=> useContext(cartContext)