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
            <NavLink to="/new-books" className="nav-links">
              Whats new?
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className="nav-links">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/bestsellers" className="nav-links">
              Bestsellers
            </NavLink>
          </li>
          <li>
            <NavLink to="/comics" className="nav-links comic-link">
              Comics
            </NavLink>
          </li>
        </ul>
        <div className="nav-search-cart">
          <p>search bar</p>
          <p>cart</p>
        </div>
      </nav>
    </section>
  );
}
