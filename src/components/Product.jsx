import { Link, useParams } from "react-router-dom";
import books from "../assets/data/data.json";
export default function Product() {
  const { id } = useParams();
  const product = books.find((book) => book.id == id);
  const {
    author,
    title,
    country,
    language,
    imageLink,
    link,
    pages,
    year,
    price,
    genre,
  } = product;

  return (
    <section>
      <h1>Book id = {id}</h1>
      <hr />
      <img src={`/${imageLink}`} alt={title} />
      <h1>Title: {title}</h1>
      <h3>Author: {author}</h3>
      <h5>Genre: {genre}</h5>
      <p>Country: {country}</p>
      <p>Language: {language}</p>
      <p>
        Pages: {pages} | Year: {year}
      </p>
      <p>
        <strong>Price: {price}</strong>
      </p>

      <p>
        <a href={link}>See more</a>
      </p>

      <Link to="/bookstore">back</Link>
    </section>
  );
}
