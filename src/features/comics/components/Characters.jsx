/* eslint-disable react/prop-types */
export default function Characters({ data, onClick }) {
  return (
    <div className="comic-characters">
      {data.map((character) => {
        return (
          <div
            key={character.id}
            className="comic-character-card"
            style={{
              background: `url(${character.thumbnail.path}.${character.thumbnail.extension}) no-repeat center`,
              backgroundSize: "cover",
            }}
            onClick={() => onClick(character.id)}
          >
            <div className="caption">{character.name}</div>
            <div className="caption bottom">View Comics</div>
          </div>
        );
      })}
    </div>
  );
}
