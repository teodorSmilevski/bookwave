/* eslint-disable react/prop-types */
import filter from "@/features/filter/data/filter";
import { FilterContext } from "@/store/filter-items-context";

import { useContext } from "react";

export default function SelectFilter({ name, filterName }) {
  const filters = [...filter[filterName]];
  const { handleSelect } = useContext(FilterContext);
  return (
    <div id="select-filter">
      <strong>
        <label htmlFor={name}> {name}</label>
      </strong>{" "}
      <br />
      <select
        name={name}
        id={name}
        defaultValue="..."
        onChange={(item) => handleSelect(item.target.value, name)}
      >
        <option value="">...</option>
        {filters.map((index) => (
          <option value={index} key={index}>
            {index}
          </option>
        ))}
      </select>
    </div>
  );
}
