import logo from "../assets/bookwave-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen((old) => !old);
  }
  return (
    <section id="nav-body">
      <nav id="navbar">
        <Link to="/ " className="nav-links">
          <img src={logo} alt="" />
        </Link>
        <div className="dropdown-menu" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" className="nav-links">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookstore" className="nav-links">
              BOOKSTORE
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-links">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/comics" className="nav-links comic-link">
              COMICS
            </NavLink>
          </li>
        </ul>
        <div className="nav-search-cart">
          <i className="bx bx-search bx-sm"></i>
          <i className="bx bx-cart bx-md" style={{ color: "#7d0a0a" }}></i>
        </div>
      </nav>
    </section>
  );
}
