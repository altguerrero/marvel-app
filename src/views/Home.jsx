import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import {
  getAllCharacters,
  searchCharacters,
} from "../service/Characters.service";

import ListCharacters from "../components/ListCharacters";
import Search from "../components/Search";

function Home() {
  const [characters, setCharacters] = useState();
  const [searchResults, setSearchResults] = useState();

  const { user, logout, loading } = useAuth();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getAllCharacters({ limit: 10 });
      setCharacters(res.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleSearch = async ({ target: { value } }) => {
    try {
      if (value) {
        const res = await searchCharacters({ search: value, limit: 10 });
        setSearchResults(res);
      } else {
        setSearchResults(null);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Search search={handleSearch} searchResults={searchResults} />

      <p>Werlcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
      {characters && <ListCharacters characters={characters} />}
    </div>
  );
}

export default Home;
