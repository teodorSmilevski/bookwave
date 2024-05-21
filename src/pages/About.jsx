import { Link } from "react-router-dom";
import "../components/About.css";
import aboutImg from "../assets/aboutus.jpg";
export default function About() {
  return (
    <section className="about-us">
      {/* <div className="about-wrap">
        <h1>About Us</h1>
      </div> */}
      <div className="about-content container">
        <img src={aboutImg} alt="a" />

        <div>
          <h1>
            Connecting Readers, Curating <span>Stories</span>
          </h1>

          <p>
            Welcome to <span>Bookwave</span>, where stories come to life! We are
            passionate about connecting readers with captivating tales from the
            world of <span>books</span> and <span>comics</span>. Dive into our
            carefully curated collection and join us in celebrating the magic of
            storytelling.
          </p>
          <p>
            Our mission is to connect readers with captivating stories by
            curating a diverse selection of books and comics, fostering a
            vibrant literary community through exceptional service and passion
            for storytelling.
          </p>
          <p>
            We are dedicated to enriching minds and inspiring imagination
            through our carefully curated collection of books and comics,
            creating a welcoming space for readers to explore diverse stories
            and ideas.
          </p>
          <Link to="/bookstore">
            <button>Explore more</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
