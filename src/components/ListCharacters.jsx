import "../styles/ListCharacters.scss";

import CharacterItem from "./CharacterItem";

function ListCharacters({ characters }) {
  const {
    data: { results },
  } = characters;

  return (
    <ul className="listCharacters">
      {results.map((character, i) => (
        <CharacterItem character={character} key={i} />
      ))}
    </ul>
  );
}

export default ListCharacters;
