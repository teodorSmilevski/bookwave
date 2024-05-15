// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { FilterContext } from "../store/filter-items-context";
export default function BooksHeader() {
  const { handleSort, handleItemsPerPage } = useContext(FilterContext);
  return (
    <div id="books-header">
      <h1>Books</h1>
      <div>
        <select name="sort" id="sort" onChange={handleSort}>
          <option value="byFeatured">Featured</option>
          <option value="byPriceLow">Price: Low to High</option>
          <option value="byPriceHigh">Price: High to Low</option>
        </select>
        <select
          name="showPerPage"
          id="showPerPage"
          onChange={(item) => handleItemsPerPage(item.target.value)}
        >
          <option value={24}>24 Per Page</option>
          <option value={48}>48 Per Page</option>
        </select>
      </div>
    </div>
  );
}
