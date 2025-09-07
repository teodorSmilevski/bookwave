import HomePageCard from "@/features/home/components/HomePageCard";
import books from "@/assets/data/data.json";

import { Link } from "react-router-dom";

const featuredById = [2, 30, 45, 69];
const featured = books.filter((book) => featuredById.includes(book.id));

export default function Featured() {
  return (
    <section className="new-arrivals container">
      <div className="na-wrapper">
        <div className="na-heading">
          <h1>FEATURED BOOKS</h1>
          <Link to="/bookstore">
            <button>SEE ALL</button>
          </Link>
        </div>
        <div className="na-cards">
          {featured.map((item) => (
            <HomePageCard
              key={item.title}
              title={item.title}
              author={item.author}
              img={item.imageLink}
              genre={item.genre}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
