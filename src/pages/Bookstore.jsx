import "../components/Bookstore.css";
import books from "../assets/data/data.json";
import HomePageCard from "../components/HomePageCard";
import Filter from "../components/Filter";
export default function Bookstore() {
  return (
    <section id="bookstore">
      <div id="books-header">sortiraj i naslov</div>
      <div id="books-wrapper">
        <Filter />
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
