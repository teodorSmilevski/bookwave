import bookImg from "../assets/book-example.jpg";
import HomePageCard from "./HomePageCard";
let arr = [1, 2, 3, 4];
export default function Featured() {
  return (
    <section className="new-arrivals">
      <div className="na-wrapper">
        <div className="na-heading">
          <h1>FEATURED BOOKS</h1>
          <button>SEE ALL</button>
        </div>
        <div className="na-cards">
          {arr.map(() => (
            // eslint-disable-next-line react/jsx-key
            <HomePageCard
              title="Never Ending Sky"
              author="Joseph Kirkland"
              img={bookImg}
            />
          ))}
        </div>
        <div className="na-cards">
          {arr.map(() => (
            // eslint-disable-next-line react/jsx-key
            <HomePageCard
              title="Never Ending Sky"
              author="Joseph Kirkland"
              img={bookImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
