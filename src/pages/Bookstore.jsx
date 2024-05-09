import "../components/Bookstore.css";
import books from "../assets/data/data.json";
import HomePageCard from "../components/HomePageCard";
import Filter from "../components/Filter";
import BooksHeader from "../components/BooksHeader";
export default function Bookstore() {
  return (
    <section id="bookstore">
      <BooksHeader />
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
