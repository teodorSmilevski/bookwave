import SelectFilter from "./SelectFilter";

export default function Filter() {
  return (
    <div id="filter">
      <h1>Filter</h1>
      <SelectFilter name="Genre" filterName="genre" />
      <SelectFilter name="Price" filterName="price" />
      <SelectFilter name="Language" filterName="language" />
      <SelectFilter name="Country" filterName="country" />
    </div>
  );
}
