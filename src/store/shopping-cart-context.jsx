import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveItem: () => {},
  handleQuantityClick: () => {},
});

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id == item.id);

    if (itemIndex > -1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id == item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              updatedPrice: Number.parseFloat(
                item.price * (cartItem.quantity + 1)
              ).toFixed(1),
            }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function handleQuantityClick(id, equation) {
    setCartItems((oldItems) =>
      oldItems.map((item) => {
        if (id == item.id) {
          const newQuantity =
            equation === "+"
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : 1;
          return {
            ...item,
            quantity: newQuantity,
            updatedPrice: Number.parseFloat(item.price * newQuantity).toFixed(
              1
            ),
          };
        }
        return item;
      })
    );
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
    handleQuantityClick,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
