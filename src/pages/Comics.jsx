import "../components/Comics/Comics.css";
import ComicsHeader from "../components/Comics/ComicsHeader";
import ComicsStore from "../components/Comics/ComicsStore";
import ComicSearch from "../components/Comics/ComicSearch";
export default function Comics() {
  return (
    <section className="comics">
      <ComicsHeader />
      <ComicsStore />
      <ComicSearch />
    </section>
  );
}
