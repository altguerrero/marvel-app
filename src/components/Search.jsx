import "../styles/Search.scss";

import SearchResults from "./SearchResults";
import { SearchIcon } from "./Icons";

function Search({ search, searchResults }) {
  return (
    <div className="search">
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        onChange={search}
      />
      {searchResults && <SearchResults searchResults={searchResults} />}
    </div>
  );
}

export default Search;
