function SearchResults({ searchResults }) {
  const {
    data: {
      data: { results },
    },
  } = searchResults;

  return (
    <ul>
      {results.length !== 0 ? (
        results.map((item, i) => <li key={i}>{item.name}</li>)
      ) : (
        <p>0 Results. Try a different search</p>
      )}
    </ul>
  );
}

export default SearchResults;
