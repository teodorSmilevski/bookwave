import "../components/HomePage.css";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
import NewReleases from "../components/NewReleases";
import ComicsFeature from "../components/ComicsFeature";
import Featured from "../components/Featured";
export default function HomePage() {
  return (
    <section>
      <Header />
      <Quotes />
      <NewReleases />
      <ComicsFeature />
      <Featured />
    </section>
  );
}
