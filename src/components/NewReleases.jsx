import HomePageCard from "./HomePageCard";
import bookImg from "../assets/book-example.jpg";
export default function NewReleases() {
  return (
    <section className="new-arrivals">
      <div className="na-wrapper">
        <div className="na-heading">
          <h1>NEW ARRIVALS</h1>
          <button>SEE ALL</button>
        </div>
        <div>
          <HomePageCard title="title1" author="author1" img={bookImg} />
        </div>
      </div>
    </section>
  );
}
