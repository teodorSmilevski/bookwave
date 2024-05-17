import HomePageCard from "./HomePageCard";

import books from "../assets/data/data.json";
const [minItem, maxItem] = [
  books[books.length - 4].id,
  books[books.length - 1].id,
];
// Newest books are the last books in the data file
const newReleases = books.filter(
  (item) => item.id <= maxItem && item.id >= minItem
);

export default function NewReleases() {
  return (
    <section className="new-arrivals container">
      <div className="na-wrapper ">
        <div className="na-heading">
          <h1>NEW ARRIVALS</h1>
          <button>SEE ALL</button>
        </div>
        <div className="na-cards">
          {newReleases.map((item) => (
            <HomePageCard
              key={item.title}
              title={item.title}
              author={item.author}
              img={item.imageLink}
              genre={item.genre}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
