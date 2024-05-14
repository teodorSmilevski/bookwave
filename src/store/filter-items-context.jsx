import { createContext, useState, useEffect } from "react";
import books from "../assets/data/data.json";

export const FilterContext = createContext({
  books: [],
  handleFilterGenre: () => {},
  handleSelect: () => {},
  handleSort: () => {},
});

// eslint-disable-next-line react/prop-types
export default function FilterContextProvider({ children }) {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    Price: "",
    Language: "",
  });
  const [sorted, setSorted] = useState("byFeatured");

  useEffect(() => {
    handleFilters();
  }, [selectedGenre, selectedFilter, sorted]);

  function handleFilters() {
    let tempBooks = [...books];

    // Filter by genre
    if (selectedGenre.length > 0) {
      tempBooks = tempBooks.filter((book) =>
        selectedGenre.includes(book.genre)
      );
    }

    // Filter by price
    if (selectedFilter.Price) {
      let [min, max] = selectedFilter.Price === "0-10" ? [0, 10] : [10, 15];
      tempBooks = tempBooks.filter(
        (book) => book.price >= min && book.price <= max
      );
    }

    // Filter by language
    if (selectedFilter.Language) {
      tempBooks = tempBooks.filter(
        (book) => book.language === selectedFilter.Language
      );
    }

    // Sorting
    tempBooks.sort((a, b) => {
      let result;
      if (sorted === "byFeatured") result = a.id - b.id;
      else if (sorted === "byPriceLow") result = a.price - b.price;
      else if (sorted === "byPriceHigh") result = b.price - a.price;
      return result;
    });

    setFilteredBooks(tempBooks);
  }

  function handleGenreChange(genre) {
    setSelectedGenre((oldValue) =>
      oldValue.includes(genre)
        ? oldValue.filter((g) => g !== genre)
        : [...oldValue, genre]
    );
  }

  function handleSelectChange(item, selectorName) {
    setSelectedFilter((oldFilter) => ({
      ...oldFilter,
      [selectorName]: item,
    }));
  }

  function handleSort(e) {
    setSorted(e.target.value);
  }

  const ctxValue = {
    books: filteredBooks,
    handleFilterGenre: handleGenreChange,
    handleSort: handleSort,
    handleSelect: handleSelectChange,
  };

  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}
