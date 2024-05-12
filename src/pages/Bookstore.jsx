import "../components/Bookstore.css";
import { useContext, useState } from "react";
import { FilterContext } from "../store/filter-items-context";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import BooksHeader from "../components/BooksHeader";

export default function Bookstore() {
  const { books } = useContext(FilterContext);
  const [sorted, setSorted] = useState("byFeatured");
  function handleSort(e) {
    setSorted(e.target.value);
  }
  books.sort((a, b) => {
    let result;
    if (sorted === "byFeatured") result = a.id - b.id;
    else if (sorted === "byPriceLow") result = a.price - b.price;
    else if (sorted === "byPriceHigh") result = b.price - a.price;
    return result;
  });
  return (
    <section id="bookstore">
      <BooksHeader changeSort={handleSort} />
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
