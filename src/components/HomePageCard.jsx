/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
export default function HomePageCard({ title, author, img, genre, price, id }) {
  return (
    <div className="home-card">
      <div>
        <Link>
          <img src={img} alt="book img" />
        </Link>
        <div id="title-author">
          <Link>
            <h1>{title}</h1>
          </Link>
          <strong>
            <p>{author}</p>
          </strong>
        </div>
      </div>

      <AddToCartBtn
        title={title}
        author={author}
        img={img}
        genre={genre}
        price={price}
        id={id}
      />
    </div>
  );
}
