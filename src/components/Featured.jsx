import book from "../assets/data/featured.json";
import HomePageCard from "./HomePageCard";

export default function Featured() {
  return (
    <section className="new-arrivals">
      <div className="na-wrapper">
        <div className="na-heading">
          <h1>FEATURED BOOKS</h1>
          <button>SEE ALL</button>
        </div>
        <div className="na-cards">
          {book.map((item) => (
            <HomePageCard
              key={item.title}
              title={item.title}
              author={item.author}
              img={item.imageLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
