import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav id="navbar">
      <div className="nav-logo-bar">
        <Link to="/ ">
          <h1>Logo</h1>
        </Link>
        <p>search bar</p>
        <p>cart</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/new-books">Whats new?</Link>
          </li>
          <li>
            <Link to="/bestsellers">Bestsellers</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
