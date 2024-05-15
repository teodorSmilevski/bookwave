/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
export default function ProductCard({ title, author, img, genre, price, id }) {
  return (
    <div className="home-card">
      <div>
        <Link to={`/bookstore/${id}`}>
          <img src={`/${img}`} alt={title} />
        </Link>
        <div id="title-author">
          <Link to={`/bookstore/${id}`}>
            <h1>{title}</h1>
          </Link>

          <strong>
            <p>{author}</p>
          </strong>
          <p>
            {genre} ${price}
          </p>
        </div>
      </div>

      <AddToCartBtn />
    </div>
  );
}
