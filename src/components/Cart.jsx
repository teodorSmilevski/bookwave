import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
  const { cartItems, handleRemoveItem } = useContext(CartContext);
  return (
    <div id="shopping-cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={`/${item.img}`} alt={item.title} />
          <div className="cart-item-content">
            <h3>{item.title}</h3>
            <h5>{item.author}</h5>
            <br />
          </div>
          <div className="cart-item-quantity">
            <p>quantity</p>
          </div>

          <div className="cart-item-price">
            <p>${item.price}</p>
          </div>
          <i
            className="bx bx-trash cart-remove"
            onClick={() => handleRemoveItem(item)}
          ></i>
        </div>
      ))}
    </div>
  );
}
