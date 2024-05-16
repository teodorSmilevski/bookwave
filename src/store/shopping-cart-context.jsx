import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveItem: () => {},
  itemsQuantity: 0,
});

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState([]);

  const itemsQuantity = cartItems.length;

  //   TODO: AKO SE DODAJ VEKE POSTOECKA KNIGA DA SE UPDATE QUANTITY A NE DA SE DODAJ CELA
  function handleAddToCart(item) {
    if (cartItems.includes(item)) {
      let index = cartItems.indexOf(item);
      let tempQuantity = [...cartItemsQuantity];
      tempQuantity[index]++;
      setCartItemsQuantity(tempQuantity);
    } else {
      setCartItems((oldCart) => [...oldCart, item]);
      setCartItemsQuantity((oldQ) => [...oldQ, 1]);
    }
    console.log(cartItems);
    console.log(cartItemsQuantity);
  }

  function handleRemoveItem(item) {
    let tempArr = [...cartItems];
    let tempIndex = tempArr.indexOf(item);
    tempArr.splice(tempIndex, 1);
    setCartItems(tempArr);
  }

  const ctxValue = {
    cartItems: cartItems,
    handleAddToCart,
    handleRemoveItem,
    itemsQuantity,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
