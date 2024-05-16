import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
  const { cartItems, handleRemoveItem, handleQuantityClick } =
    useContext(CartContext);
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
            <i
              className="bx bxs-minus-circle bx-sm"
              onClick={() => handleQuantityClick(item.id, "-")}
            ></i>{" "}
            <p>{item.quantity}</p>
            <i
              className="bx bxs-plus-circle bx-sm"
              onClick={() => handleQuantityClick(item.id, "+")}
            ></i>
          </div>

          <div className="cart-item-price">
            <p>${item.quantity > 1 ? item.updatedPrice : item.price}</p>
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
