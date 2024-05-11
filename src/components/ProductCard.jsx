import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function ProductCard({ title, author, img, genre }) {
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
          <p>{genre}</p>
        </div>
      </div>

      <div id="hc-cart">
        {/* TODO: ADD TO CART */}
        <p>Add to cart</p>
      </div>
    </div>
  );
}
