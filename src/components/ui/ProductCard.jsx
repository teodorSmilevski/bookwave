/* eslint-disable react/prop-types */
import AddToCartBtn from "@/components/ui/AddToCartBtn";

import { Link } from "react-router-dom";

export default function ProductCard({ title, author, img, genre, price, id }) {
  return (
    <div className="item-card">
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
      </div>
      <h3>${price}</h3>
      <div className="item-card-btn">
        <AddToCartBtn
          title={title}
          author={author}
          img={img}
          genre={genre}
          price={price}
          id={id}
        />
      </div>
    </div>
  );
}
