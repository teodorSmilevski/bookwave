import HomePageCard from "./HomePageCard";

import book from "../assets/data/new-arrivals.json";
export default function NewReleases() {
  return (
    <section className="new-arrivals">
      <div className="na-wrapper">
        <div className="na-heading">
          <h1>NEW ARRIVALS</h1>
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
