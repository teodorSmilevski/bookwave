import { Link, useParams } from "react-router-dom";
import books from "../assets/data/data.json";
import AddToCartBtn from "./AddToCartBtn";
import ProductCard from "./ProductCard";
function shuffleRelatedBooks(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
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
  let relatedBooks = books.filter(
    (item) => item.genre === genre && item.id != id
  );
  relatedBooks = shuffleRelatedBooks(relatedBooks);
  relatedBooks = relatedBooks.slice(0, 4);

  return (
    <section className="product">
      <div className="product-go-back">
        <Link to="/bookstore">
          <i className="bx bx-chevrons-left"></i>GO BACK
        </Link>
      </div>
      <div className="product-wrapper">
        <img src={`/${imageLink}`} alt={title} />
        <div className="product-content">
          <div>
            <h1>{title}</h1>
            <h4>{author}</h4>
          </div>

          <div>
            <p>
              <strong>Genre </strong> {genre}
            </p>
            <p>
              <strong>Country </strong> {country}
            </p>
            <p>
              <strong>Language </strong> {language}
            </p>
            <p>
              {" "}
              <strong>Publish year </strong> {year}
            </p>
            <p>
              <strong>Pages </strong>
              {pages}
            </p>

            <p>
              <a href={link}>See more</a>
            </p>
          </div>
          <div>
            <h1>
              $<strong>{price} </strong>
            </h1>
            <AddToCartBtn
              title={title}
              author={author}
              img={imageLink}
              genre={genre}
              price={price}
              id={id}
            />
          </div>
        </div>
      </div>
      <div className="product-related-books">
        <h1>Related Books</h1>
        <div>
          {relatedBooks.map((book) => (
            <div key={book.id}>
              <ProductCard
                key={book.id}
                title={book.title}
                author={book.author}
                genre={book.genre}
                price={book.price}
                img={book.imageLink}
                id={book.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
