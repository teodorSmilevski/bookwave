import { useRef, forwardRef, useImperativeHandle, useContext } from "react";
import { FilterContext } from "../store/filter-items-context";
import SelectFilter from "./SelectFilter";
import GenreCheckbox from "./GenreCheckbox";
import filter from "../assets/data/filter";
import "./FilterModal.css";
const FilterModal = forwardRef(function Modal(_, ref) {
  const filterDialog = useRef();
  const { handleSort, handleItemsPerPage, handleFilterOpen } =
    useContext(FilterContext);

  useImperativeHandle(ref, () => {
    return {
      show: () => filterDialog.current.showModal(),
    };
  });

  const genres = [...filter.genre];
  return (
    <dialog className="filter-modal" ref={filterDialog}>
      <div className="close-fm">
        <form method="dialog">
          <button onClick={handleFilterOpen}>
            <strong>
              <i className="bx bx-x bx-md"></i>
            </strong>
          </button>
        </form>
      </div>
      <div className="filter-modal-wrapper">
        <h3>Filter</h3>
        <div className="filter-select">
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
        <div>
          <div className="select-filter-modal">
            <div className="sfm-wrapper">
              {genres.map((genre) => (
                <GenreCheckbox name={genre} key={genre} />
              ))}
            </div>
          </div>
          <div>
            <SelectFilter name="Price" filterName="price" />
            <SelectFilter name="Language" filterName="language" />
          </div>
        </div>
      </div>
    </dialog>
  );
});

export default FilterModal;
