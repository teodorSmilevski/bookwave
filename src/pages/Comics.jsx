import "@/features/comics/Comics.css";
import ComicsHeader from "@/features/comics/components/ComicsHeader";
import ComicsStore from "@/features/comics/components/ComicsStore";
import ComicSearch from "@/features/comics/components/ComicSearch";
export default function Comics() {
  return (
    <section className="comics">
      <ComicsHeader />
      <ComicsStore />
      <ComicSearch />
    </section>
  );
}
