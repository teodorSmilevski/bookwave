import Header from "@/features/home/components/Header";
import Quotes from "@/features/home/components/Quotes";
import NewReleases from "@/features/home/components/NewReleases";
import ComicsFeature from "@/features/home/components/ComicsFeature";
import Featured from "@/features/home/components/Featured";
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
