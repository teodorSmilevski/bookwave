import { Link } from "react-router-dom";
import "./NavBar.css";

// import Login from "../pages/Login.jsx";
import logo from "../assets/bookwave-logo.png";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((oldState) => !oldState);
  }
  function turnToFalse() {
    setIsMenuOpen(false);
  }
  return (
    <nav>
      <div>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <label htmlFor="" className="menu-icon" onClick={handleMenuClick}>
          {!isMenuOpen ? <i className="bx bx-menu"></i> : <p>✖</p>}
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
          <i className="bx bx-search bx-sm"></i>
          <i className="bx bx-cart bx-sm"></i>
        </div>
      </div>
    </nav>
  );
}
