import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [containers, setContainers] = useState([]);

  return (
    <CartContext.Provider
      value={{
        containers,
        setContainers,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
