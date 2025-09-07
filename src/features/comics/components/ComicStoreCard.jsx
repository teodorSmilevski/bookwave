/* eslint-disable react/prop-types */
import AddToCartBtn from "@/components/ui/AddToCartBtn";

export default function ComicStoreCard({ img, title, year, price, id }) {
  return (
    <div className="comic-store-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h2>${price}</h2>
      <div className="comic-store-btn">
        <AddToCartBtn
          title={title}
          author={year}
          img={img}
          price={price}
          id={id}
        />
      </div>
    </div>
  );
}
