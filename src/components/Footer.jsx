import "./Footer.css";
import logoImg from "../assets/bookwave-logo-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer container">
        <img src={logoImg} alt="" />
        <hr />
        <div className="footer-links">
          <Link>Bookstore</Link>
          <Link>About</Link>
          <Link>Comics</Link>
        </div>
        <div>
          <p>© 2024</p>
        </div>
      </div>
    </footer>
  );
}
