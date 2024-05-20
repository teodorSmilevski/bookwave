import "../components/Bookstore.css";
import { useContext, useRef } from "react";
import { FilterContext } from "../store/filter-items-context";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

import Filter from "../components/Filter";
import BooksHeader from "../components/BooksHeader";
import FilterModal from "../components/FilterModal";

import comic from "../assets/data/comic_list.json";
export default function Bookstore() {
  const modal = useRef();
  const { books, currentPage, totalPages, handlePageChange, isFilterOpen } =
    useContext(FilterContext);
  isFilterOpen && modal.current.show();

  return (
    <>
      <FilterModal ref={modal} />
      <section id="bookstore" className="container">
        <BooksHeader />
        <h1>{comic[0].Series}</h1>
        <p>{comic[0].Cover}</p>
        <img src={comic[0].Cover} alt="" />
        <div id="books-wrapper">
          <Filter />
          <div>
            <SearchBar />
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
    </>
  );
}
