import "../styles/SearchResults.scss";
import { Link } from "react-router-dom";

function SearchResults({ searchResults }) {
  const {
    data: {
      data: { results },
    },
  } = searchResults;

  return (
    <ul className="searchResults">
      {results.length !== 0 ? (
        results.map((item, i) => (
          <li key={i}>
            <Link to={`/character/${item.id}`}>{item.name}</Link>
          </li>
        ))
      ) : (
        <p>0 Results. Try a different search</p>
      )}
    </ul>
  );
}

export default SearchResults;
