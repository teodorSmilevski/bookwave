import "../components/Bookstore.css";
import books from "../assets/data/data.json";
import HomePageCard from "../components/HomePageCard";
export default function Bookstore() {
  return (
    <section id="bookstore">
      <div id="books-header">sortiraj i naslov</div>
      <div id="books-wrapper">
        <div id="filter">filter</div>
        <div id="books">
          {books.map((item) => (
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
