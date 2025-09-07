import "@/components/layout/NavBar/NavBar.css";
import { CartContext } from "@/store/shopping-cart-context";
import CartModal from "@/features/cart/CartModal";
import logo from "@/assets/images/logo/bookwave-logo.png";

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modal = useRef();
  const { cartItems } = useContext(CartContext);
  const itemsQuantity = cartItems.length;
  function handleMenuClick() {
    setIsMenuOpen((oldState) => !oldState);
  }
  function turnToFalse() {
    setIsMenuOpen(false);
  }

  function handleOpenCart() {
    modal.current.show();
  }
  return (
    <>
      <CartModal ref={modal} title="Shopping Cart" />
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <label htmlFor="" className="menu-icon" onClick={handleMenuClick}>
            {!isMenuOpen ? (
              <i className="bx bx-menu"></i>
            ) : (
              <i className="bx bx-x"></i>
            )}
          </label>
          <div>
            <ul className={isMenuOpen ? "dropdown-menu" : "menu-list"}>
              <li onClick={turnToFalse}>
                <Link to="/">HOME</Link>
              </li>

              <li onClick={turnToFalse}>
                <Link to="/bookstore">BOOKSTORE</Link>
              </li>
              <li onClick={turnToFalse}>
                <Link to="/about">ABOUT</Link>
              </li>
              <li onClick={turnToFalse}>
                <Link to="/comics" className="comic-link">
                  COMICS
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-search-cart">
            <i className="bx bx-cart bx-sm" onClick={handleOpenCart}></i>
            {itemsQuantity !== 0 && itemsQuantity}
          </div>
        </div>
      </nav>
    </>
  );
}
