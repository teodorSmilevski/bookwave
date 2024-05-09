import SelectFilter from "./SelectFilter";
import GenreCheckbox from "./GenreCheckbox";
import filter from "../assets/data/filter";
export default function Filter() {
  const genres = [...filter.genre];
  return (
    <div id="filter">
      <h3>Filter</h3>

      <div id="select-filter">
        <div className="sf-wrapper">
          {genres.map((genre) => (
            <GenreCheckbox name={genre} key={genre} />
          ))}
        </div>
      </div>

      <SelectFilter name="Price" filterName="price" />
      <SelectFilter name="Language" filterName="language" />
      <SelectFilter name="Country" filterName="country" />
    </div>
  );
}
