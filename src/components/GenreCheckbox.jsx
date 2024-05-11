/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FilterContext } from "../store/filter-items-context";

export default function GenreCheckbox({ name }) {
  const { handleFilterGenre } = useContext(FilterContext);
  return (
    <div className="">
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={() => handleFilterGenre(name)}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
