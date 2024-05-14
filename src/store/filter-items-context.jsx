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
  const [filteredBooks, setFilteredBooks] = useState(selectedBooks);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    Price: "",
    Language: "",
    Country: "",
  });
  const [selected, setSelected] = useState([]);
  const [sorted, setSorted] = useState("byFeatured");
  //  TODO: FIX STATE - AKO E BOOKS GI ODBIRA SITE I KO KE SE IZBERI I GENRE I PRICE SE MESHA
  // TODO: NAJDI RESENIE ZA ZAEDNICKO BARATANJE
  useEffect(() => {
    handleSelectedGenre();
  }, [selectedGenre]);
  useEffect(() => {
    handleSelectedFilter(
      selectedFilter.Price,
      selectedFilter.Country,
      selectedFilter.Language
    );
  }, [selectedFilter, selectedBooks]);
  function handleSelectedGenre() {
    if (selectedGenre.length > 0) {
      let tempBooks = selectedGenre.map((bookGenre) => {
        let temp = books.filter((book) => book.genre === bookGenre);
        return temp;
      });
      setSelectedBooks(tempBooks.flat());
    } else {
      setSelectedBooks(books);
      // TODO: se mesti i dr state
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
  function handleSelectedFilter(price, language) {
    // FIXME: ERRORI PUKAT BAJO WAWA
    let tempPrice = [],
      tempLanguage = [],
      data = [];
    price.length > 0 &&
      (tempPrice = [price].map((price) => {
        let [min, max] = price === "0-10" ? [0, 10] : [10, 15];
        let temp = selectedBooks.filter(
          (book) => book.price >= min && book.price <= max
        );
        return temp;
      }));

    language.length > 0 &&
      (tempLanguage = [language].map((language) => {
        let temp = selectedBooks.filter((book) => book.language === language);
        return temp;
      }));

    const filteredArray = tempPrice.filter((value) =>
      tempLanguage.includes(value)
    );
    setSelected(filteredArray);
    console.log(selected);
    setFilteredBooks(selectedBooks);
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
    books: filteredBooks,
    handleFilterGenre: handleGenreChange,
    handleSort: handleSort,
    handleSelect: handleSelectChange,
  };

  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}
