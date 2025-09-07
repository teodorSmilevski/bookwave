import "@/features/home/HomePage.css";
import { CartContext } from "@/store/shopping-cart-context";

import { useContext } from "react";

export default function AddToCartBtn({ ...props }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div id="hc-cart" onClick={() => handleAddToCart({ ...props })}>
      <p>Add to cart</p>
    </div>
  );
}
