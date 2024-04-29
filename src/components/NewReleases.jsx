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
        <div className="na-cards">
          <HomePageCard
            title="Never Ending Sky"
            author="Joseph Kirkland"
            img={bookImg}
          />
          <HomePageCard
            title="Never Ending Sky"
            author="Joseph Kirkland"
            img={bookImg}
          />

          <HomePageCard
            title="Never Ending Sky"
            author="Joseph Kirkland"
            img={bookImg}
          />
          <HomePageCard
            title="Never Ending Sky"
            author="Joseph Kirkland"
            img={bookImg}
          />
        </div>
      </div>
    </section>
  );
}
