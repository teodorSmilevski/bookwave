import quotes from "./quotesData";
export default function Quotes() {
  const randNum = Math.floor(Math.random() * quotes.length);
  return (
    <section>
      <h1>{quotes[randNum].author}</h1>
      <q>{quotes[randNum].quote}</q>
      <img src={quotes[randNum].image} alt="author" />
    </section>
  );
}
