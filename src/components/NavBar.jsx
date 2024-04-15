import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <div>
        <h1>logo</h1>
        <p>search bar</p>
        <p>cart</p>
      </div>
      <div>
        <ul>
          <li>
            <Link>Bestsellers</Link>
          </li>
          <li>
            <Link>Categories</Link>
          </li>
          <li>
            <Link>Comic</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
