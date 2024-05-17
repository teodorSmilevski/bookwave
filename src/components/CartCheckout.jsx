import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function CartCheckout() {
  const { cartItems } = useContext(CartContext);

  const totalCost = cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(1);

  return (
    <>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div>
          <div className="cs-sub">
            <h3>Items</h3> <h3> {cartItems.length}</h3>{" "}
          </div>
          <div className="cs-sub">
            <h3>Shipping</h3>
            <h3>Free</h3>
          </div>
        </div>
        <div className="cs-sub">
          <h2>Total </h2>
          <h2>${totalCost}</h2>
        </div>
      </div>
      <button className="cart-summary-btn">CHECKOUT</button>
    </>
  );
}
