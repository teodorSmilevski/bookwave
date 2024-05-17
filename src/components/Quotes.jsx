import quotes from "./quotesData";
export default function Quotes() {
  const randNum = Math.floor(Math.random() * quotes.length);
  return (
    <section className="quotes container">
      <div>
        <h2>
          <q>{quotes[randNum].quote}</q>
        </h2>
        <img src={quotes[randNum].image} alt="author" />
        <h4>{quotes[randNum].author}</h4>
      </div>
    </section>
  );
}
