import PropTypes from "prop-types";

export default function HomePageCard({ title, author, img }) {
  return (
    <div className="home-card">
      <img src={img} alt="book img" />
      <h1>{title}</h1>
      <p>{author}</p>

      <div id="hc-cart">
        <p>Add to cart</p>
      </div>
    </div>
  );
}

HomePageCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
