import { useState } from "react";
import comics from "../../assets/data/comic_list.json";
import ComicStoreCard from "./ComicStoreCard";

export default function ComicsStore() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * 12;
  const indexOfFirstItem = indexOfLastItem - 12;
  const currentComics = comics.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(comics.length / 12);

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <div className="comics-store container">
      <h1>Flying-off the shelf</h1>

      <div className="comic-store-books">
        {currentComics.map((comic) => (
          <ComicStoreCard
            key={comic.Series}
            img={comic.Cover}
            title={comic.Series}
            price={comic.Price}
            year={comic.Year}
          />
        ))}
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
      </div>
    </div>
  );
}
