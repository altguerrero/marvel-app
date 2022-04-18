import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import {
  getAllCharacters,
  searchCharacters,
} from "../service/Characters.service";

import ListCharacters from "../components/ListCharacters";
import Container from "../components/Container";
import Hero from "../components/Hero";
import HeroImg from "../assets/img/CharacterHero.jpeg";
import Search from "../components/Search";

function Home() {
  const [characters, setCharacters] = useState();
  const [searchResults, setSearchResults] = useState();

  const { loading } = useAuth();

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
    <>
      <Hero img={HeroImg}>
        <h1>MARVEL CHARACTERS</h1>
        <p>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </p>
      </Hero>
      <Container>
        <Search search={handleSearch} searchResults={searchResults} />
        {characters && <ListCharacters characters={characters} />}
      </Container>
    </>
  );
}

export default Home;
