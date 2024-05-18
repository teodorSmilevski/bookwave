import "../components/Bookstore.css";
import { useContext } from "react";
import { FilterContext } from "../store/filter-items-context";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import BooksHeader from "../components/BooksHeader";

export default function Bookstore() {
  const { books, currentPage, totalPages, handlePageChange } =
    useContext(FilterContext);

  return (
    <section id="bookstore" className="container">
      <BooksHeader />
      <div id="books-wrapper">
        <Filter />
        <div id="books">
          {books.map((book) => (
            <ProductCard
              key={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              price={book.price}
              img={book.imageLink}
              country={book.country}
              language={book.language}
              id={book.id}
            />
          ))}
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
