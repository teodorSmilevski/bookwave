import bookImg from "../assets/header-img.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <section id="landing-page">
      <div id="lp-div" className="container">
        <div className="lp-text">
          <h1>
            Dive through the <span>wave</span> of books
          </h1>
          <p>
            Welcome to our book store! Our store has something for everyone.
            Whether you are seeking thrilling adventures, captivating romances,
            insightful knowledge, or whimsical tales, we are here to help you
            discover your next favorite book. <span>Happy reading!</span>
          </p>

          <Link to="/bookstore">
            <button>Explore now</button>
          </Link>
        </div>
        <div className="lp-image">
          <img src={bookImg} alt="" />
        </div>
      </div>
    </section>
  );
}
