import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getAllCharacters } from "../service/Characters.service";

import ListCharacters from "./ListCharacters";

function Home() {
  const [characters, setCharacters] = useState();
  const { user, logout, loading } = useAuth();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getAllCharacters();
      setCharacters(res.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <p>Werlcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
      {characters && <ListCharacters characters={characters} />}
    </div>
  );
}

export default Home;
