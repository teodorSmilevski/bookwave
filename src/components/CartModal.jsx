/* eslint-disable react/prop-types */
import { useRef, forwardRef, useImperativeHandle } from "react";
import Cart from "./Cart";
import "./CartModal.css";
const CartModal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      show: () => dialog.current.showModal(),
    };
  });

  return (
    <dialog id="cart-modal" ref={dialog}>
      <div className="cart-modal-wrapper">
        <div className="cart-products">
          <h1>{title}</h1>
          <Cart />
          <form method="dialog">
            <button className="cart-go-back">
              {" "}
              <i className="bx bx-chevrons-left"></i>
              <strong>GO BACK</strong>
            </button>
          </form>
        </div>
        <div className="cart-checkout">
          <h2>checkout baba</h2>
        </div>
      </div>
    </dialog>
  );
});

export default CartModal;
