// eslint-disable-next-line react/prop-types
export default function BooksHeader({ changeSort }) {
  return (
    <div id="books-header">
      <h1>Books</h1>
      <div>
        <select name="sort" id="sort" onChange={changeSort}>
          <option value="byFeatured">Featured</option>
          <option value="byPriceLow">Price: Low to High</option>
          <option value="byPriceHigh">Price: High to Low</option>
        </select>
        <select name="showPerPage" id="showPerPage">
          <option value="show24">24 Per Page</option>
          <option value="show48">48 Per Page</option>
        </select>
      </div>
    </div>
  );
}
