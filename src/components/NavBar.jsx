import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav id="navbar">
      <Link to="/ " className="nav-links">
        <h1>Bookwave</h1>
      </Link>
      <ul>
        <li>
          <Link to="/new-books" className="nav-links">
            Whats new?
          </Link>
        </li>
        <li>
          <Link to="/categories" className="nav-links">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/bestsellers" className="nav-links">
            Bestsellers
          </Link>
        </li>
        <li>
          <Link to="/comics" className="nav-links">
            <span id="comic-link">Comics</span>
          </Link>
        </li>
      </ul>
      <div className="nav-search-cart">
        <p>search bar</p>
        <p>cart</p>
      </div>
    </nav>
  );
}
