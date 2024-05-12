import "../components/Bookstore.css";
import { useContext } from "react";
import { FilterContext } from "../store/filter-items-context";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import BooksHeader from "../components/BooksHeader";

export default function Bookstore() {
  const { books } = useContext(FilterContext);

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
              price={item.price}
              img={item.imageLink}
              country={item.country}
              language={item.language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
