import Characters from "@/features/comics/components/Characters";
import ComicsData from "@/features/comics/components/ComicsData";

import md5 from "md5";
import { useState } from "react";

export default function Search() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  function handleSubmit(event) {
    event.preventDefault();

    getCharacterData();
  }
  function getCharacterData() {
    setCharacterData(null);
    setComicData(null);

    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);

    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=8`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCharacterData(result.data);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  }
  function getComicData(characterId) {
    window.scrollTo({ bottom: 0, left: 0 });

    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&limit=8`;

    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setComicData(results.data);
      })
      .catch((error) => {
        console.log("Error while fetching: ", error);
      });
  }

  const generateHash = (timeStamp) => {
    return md5(timeStamp + privateKey + publicKey);
  };

  function handleChange(event) {
    setCharacterName(event.target.value);
  }
  function handleReset() {
    setCharacterData(null);
    setCharacterName("");
    setComicData(null);
  }

  return (
    <>
      <form className="comic-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter character name..."
          onChange={handleChange}
        />
        <div className="comic-search-btns">
          <button type="submit">Search</button>
          <button type="reset" className="reset-search" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {!comicData && characterData && characterData.results[0] && (
        <Characters data={characterData.results} onClick={getComicData} />
      )}

      {comicData && comicData.results[0] && (
        <ComicsData data={comicData.results} />
      )}
    </>
  );
}
