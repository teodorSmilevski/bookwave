import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
  const ctxValue = {
    cart: [],
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
