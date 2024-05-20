/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import books from "../assets/data/data.json";

export const FilterContext = createContext({
  books: [],
  isFilterOpen: false,
  handleFilterGenre: () => {},
  handleSelect: () => {},
  handleSort: () => {},
  handleItemsPerPage: () => {},
  handlePageChange: () => {},
  handleFilterOpen: () => {},
  handleSearch: () => {},
});

// eslint-disable-next-line react/prop-types
export default function FilterContextProvider({ children }) {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedFilter, setSelectedFilter] = useState({
    Genre: [],
    Price: "",
    Language: "",
  });
  const [sorted, setSorted] = useState("byFeatured");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFilters();
  }, [selectedFilter, sorted, search]);

  function handleFilters() {
    let tempBooks = [...books];
    // Search bar
    if (search.length > 0) {
      tempBooks = tempBooks.filter((book) => {
        let title = book.title.toLowerCase();
        let author = book.author.toLowerCase();

        return (
          title.includes(search.toLowerCase()) ||
          author.includes(search.toLowerCase())
        );
      });
    }

    // Filter by genre
    if (selectedFilter.Genre.length > 0) {
      tempBooks = tempBooks.filter((book) =>
        selectedFilter.Genre.includes(book.genre)
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

    setCurrentPage(1);
    setFilteredBooks(tempBooks);
  }

  function handleGenreChange(genre) {
    setSelectedFilter((oldFilter) => ({
      ...oldFilter,
      Genre: oldFilter.Genre.includes(genre)
        ? oldFilter.Genre.filter((g) => g !== genre)
        : [...oldFilter.Genre, genre],
    }));
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

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }
  function handleItemsPerPage(items) {
    setItemsPerPage(Number(items));
    setCurrentPage(1);
  }
  function handleFilterOpen() {
    setIsFilterOpen((oldValue) => !oldValue);
  }

  const ctxValue = {
    books: currentItems,
    handleFilterGenre: handleGenreChange,
    handleSort,
    handleSelect: handleSelectChange,
    handleItemsPerPage,
    handlePageChange,
    handleFilterOpen,
    handleSearch,
    currentPage,
    itemsPerPage,
    totalPages,
    isFilterOpen,
  };

  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}
