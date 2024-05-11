import "../components/Bookstore.css";
import { useContext } from "react";
import { FilterContext } from "../store/filter-items-context";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import BooksHeader from "../components/BooksHeader";
export default function Bookstore() {
  const { books } = useContext(FilterContext);
  books.sort((a, b) => a.id - b.id);
  return (
    <section id="bookstore">
      <BooksHeader />
      <div id="books-wrapper">
        <Filter />
        <div id="books">
          {books.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              author={item.author}
              genre={item.genre}
              img={item.imageLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
