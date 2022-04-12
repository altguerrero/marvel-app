import SearchResults from "./SearchResults";

function Search({ search, searchResults }) {
  return (
    <div>
      <input type="search" name="search" onChange={search} />
      {searchResults && <SearchResults searchResults={searchResults} />}
    </div>
  );
}

export default Search;
