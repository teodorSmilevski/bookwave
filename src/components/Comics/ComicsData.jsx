/* eslint-disable react/prop-types */
export default function ComicsData({ data }) {
  return (
    <div className="comics-data">
      {data.map((comic) => {
        const detailsUrl = comic.urls.find(
          (element) => element["type"] === "detail"
        ).url;

        return (
          <a
            key={comic.id}
            className="comic-data-card"
            style={{
              background: `url(${comic.thumbnail.path}.${comic.thumbnail.extension}) no-repeat center`,
              backgroundSize: "cover",
            }}
            href={detailsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="caption">{comic.title}</div>
            <div className="caption bottom">View Comic Details</div>
          </a>
        );
      })}
    </div>
  );
}
