import bookImg from "../assets/books-demo.png";
import "../components/HomePage.css";
export default function HomePage() {
  return (
    <section id="landing-page">
      <div id="lp-div">
        <div className="lp-text">
          <h1>
            Dive through the <span>wave</span> of books
          </h1>
          {/* <p>Unlock the magic of books at your fingertips</p> */}
          <button> Discover today!</button>
        </div>
        <div className="lp-image">
          <img src={bookImg} alt="" />
        </div>
      </div>
    </section>
  );
}
