import "./Footer.css";
import logoImg from "../assets/bookwave-logo-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer container">
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
        <hr />
        <div className="footer-links">
          <Link to="/bookstore">Bookstore</Link>
          <Link to="/about">About</Link>
          <Link to="/comics">Comics</Link>
        </div>
        <div>
          <p>© 2024</p>
        </div>
      </div>
    </footer>
  );
}
