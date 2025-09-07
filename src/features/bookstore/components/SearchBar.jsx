import { FilterContext } from "@/store/filter-items-context";

import { useContext } from "react";

export default function SearchBar() {
  const { handleSearch } = useContext(FilterContext);
  return (
    <div className="search-bar">
      <form action="search" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
      </form>
    </div>
  );
}
