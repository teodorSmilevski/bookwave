import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

import "./HomePage.css";
export default function AddToCartBtn({ ...props }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div id="hc-cart" onClick={() => handleAddToCart({ ...props })}>
      <p>Add to cart</p>
    </div>
  );
}
