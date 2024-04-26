import "../components/HomePage.css";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
import NewReleases from "../components/NewReleases";
import ComicsFeature from "../components/ComicsFeature";
export default function HomePage() {
  return (
    <section>
      <Header />
      <Quotes />
      <NewReleases />
      <ComicsFeature />
    </section>
  );
}
