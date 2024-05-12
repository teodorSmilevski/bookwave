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
  const [selectedBooks, setSelectedBooks] = useState(books);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    Price: "",
    Language: "",
    Country: "",
  });
  const [sorted, setSorted] = useState("byFeatured");
  //  TODO: FIX STATE - AKO E BOOKS GI ODBIRA SITE I KO KE SE IZBERI I GENRE I PRICE SE MESHA
  // TODO: NAJDI RESENIE ZA ZAEDNICKO BARATANJE
  useEffect(() => {
    handleSelectedGenre();
  }, [selectedGenre]);
  useEffect(() => {
    handleSelectedFilter();
  }, [selectedFilter]);
  function handleSelectedGenre() {
    if (selectedGenre.length > 0) {
      let tempBooks = selectedGenre.map((bookGenre) => {
        let temp = books.filter((book) => book.genre === bookGenre);
        return temp;
      });
      setSelectedBooks(tempBooks.flat());
    } else {
      setSelectedBooks(books); // FIXME: ke se izmesti dr state
    }
  }

  // NOTE: changed genre
  function handleGenreChange(genre) {
    if (selectedGenre.includes(genre)) {
      setSelectedGenre((oldValue) =>
        oldValue.splice(oldValue.indexOf(genre), 1)
      );
    } else {
      setSelectedGenre((oldValue) => [...oldValue, genre]);
    }
  }

  // NOTE: Selectors
  function handleSelectChange(item, selectorName) {
    setSelectedFilter({ ...selectedFilter, [selectorName]: item });
  }
  function handleSelectedFilter() {
    if (selectedFilter.Price.length > 0) {
      let tempBooks = [selectedFilter.Price].map((price) => {
        let [min, max] = price === "0-10" ? [0, 10] : [10, 15];
        let temp = books.filter(
          (book) => book.price >= min && book.price <= max
        );
        console.log(temp);
        return temp;
      });
      setSelectedBooks(tempBooks.flat());
    }
    if (selectedFilter.Country.length > 0) {
      let tempBooks = [selectedFilter.Country].map((country) => {
        let temp = books.filter((book) => book.country === country);
        return temp;
      });
      console.log(tempBooks);
      setSelectedBooks(tempBooks.flat());
    }
    if (selectedFilter.Language.length > 0) {
      console.log(selectedFilter.Language);
    }
  }

  selectedBooks.sort((a, b) => {
    let result;
    if (sorted === "byFeatured") result = a.id - b.id;
    else if (sorted === "byPriceLow") result = a.price - b.price;
    else if (sorted === "byPriceHigh") result = b.price - a.price;
    return result;
  });
  function handleSort(e) {
    setSorted(e.target.value);
  }

  const ctxValue = {
    books: selectedBooks,
    handleFilterGenre: handleGenreChange,
    handleSort: handleSort,
    handleSelect: handleSelectChange,
  };

  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}
