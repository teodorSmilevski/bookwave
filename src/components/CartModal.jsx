/* eslint-disable react/prop-types */
import { useRef, forwardRef, useImperativeHandle } from "react";
import Cart from "./Cart";
import CartCheckout from "./CartCheckout";
import "./CartModal.css";
const CartModal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      show: () => dialog.current.showModal(),
    };
  });

  return (
    <dialog id="cart-modal" className="container" ref={dialog}>
      <div className="cart-title">
        <h1>{title}</h1>
        <form method="dialog">
          <button className="cart-go-back">
            {" "}
            <strong>
              <i className="bx bx-x bx-md"></i>
            </strong>
          </button>
        </form>
      </div>
      <div className="cart-modal-wrapper">
        <div className="cart-products">
          <Cart />
        </div>
        <div className="cart-checkout">
          <CartCheckout />
        </div>
      </div>
    </dialog>
  );
});

export default CartModal;
