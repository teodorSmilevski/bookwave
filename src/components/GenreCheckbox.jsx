/* eslint-disable react/prop-types */
export default function GenreCheckbox({ name }) {
  return (
    <div className="">
      <input type="checkbox" id={name} name={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
