/* eslint-disable react/prop-types */
export default function ComicStoreCard({ img, title, year, price }) {
  return (
    <div className="comic-store-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{year}</h5>
      <h5>{price}</h5>
    </div>
  );
}
