import bookImg from "../assets/header-img.png";

export default function Header() {
  return (
    <section id="landing-page">
      <div id="lp-div">
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
          <button>Explore now </button>
        </div>
        <div className="lp-image">
          <img src={bookImg} alt="" />
        </div>
      </div>
    </section>
  );
}
