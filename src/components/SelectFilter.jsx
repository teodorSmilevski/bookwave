/* eslint-disable react/prop-types */
import filter from "../assets/data/filter";

export default function SelectFilter({ name, filterName }) {
  const filters = [...filter[filterName]];

  return (
    <div id="select-filter">
      <label htmlFor={name}> {name}</label> <br />
      <select name={name} id={name}>
        <option value="any" selected="selected">
          ...
        </option>
        {filters.map((index) => (
          <option value={index} key={index}>
            {index}
          </option>
        ))}
      </select>
    </div>
  );
}
