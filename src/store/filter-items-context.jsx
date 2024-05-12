import { createContext, useState, useEffect } from "react";
import books from "../assets/data/data.json";

export const FilterContext = createContext({
  books: [],
  handleFilterGenre: () => {},
  handleFilterPrice: () => {},
  handleFilterCountry: () => {},
  handleFilterLanguage: () => {},
});

// eslint-disable-next-line react/prop-types
export default function FilterContextProvider({ children }) {
  const [selectedBooks, setSelectedBooks] = useState(books);
  const [selectedGenre, setSelectedGenre] = useState([]);

  // NOTE: Hook za selektiran genre
  useEffect(() => {
    handleSelectedBooks();
  }, [selectedGenre]);

  function handleSelectedBooks() {
    if (selectedGenre.length > 0) {
      let tempBooks = selectedGenre.map((bookGenre) => {
        let temp = books.filter((book) => book.genre === bookGenre);
        return temp;
      });
      setSelectedBooks(tempBooks.flat());
    } else setSelectedBooks(books);
  }

  function handleGenreChange(genre) {
    if (selectedGenre.includes(genre)) {
      setSelectedGenre((oldValue) =>
        oldValue.splice(oldValue.indexOf(genre), 1)
      );
    } else {
      setSelectedGenre((oldValue) => [...oldValue, genre]);
      //   handleSelectedBooks();
    }
  }

  const ctxValue = {
    books: selectedBooks,
    handleFilterGenre: handleGenreChange,
    //   handleFilterPrice: () => {},
    //   handleFilterCountry: () => {},
    //   handleFilterLanguage: () => {},
  };

  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}
