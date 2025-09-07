import { Link } from "react-router-dom";

export default function ComicsFeature() {
  return (
    <section id="comic-feature">
      <div>
        <div id="cf-text">
          <h1>
            Dive into a world of span vibrant visuals and thrilling tales with
            our comic collection!
          </h1>
        </div>

        <Link to="/comics">
          EXPLORE NOW
          <i className="bx bx-right-arrow-alt" style={{ color: "#ffffff" }}></i>
        </Link>
      </div>
    </section>
  );
}
