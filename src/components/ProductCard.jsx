/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function ProductCard({
  title,
  author,
  img,
  genre,
  price,
  country,
  language,
}) {
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
          <p>
            {genre} ${price}
          </p>
          <p>
            C:{country} | L:{language}
          </p>
        </div>
      </div>

      {/* <div id="hc-cart">
        <p>Add to cart</p>
      </div> */}
    </div>
  );
}
