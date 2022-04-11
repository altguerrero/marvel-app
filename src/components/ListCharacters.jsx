import CharacterItem from "./CharacterItem";

function ListCharacters({ characters }) {
  const {
    data: { results },
  } = characters;

  return (
    <div>
      {results.map((character, i) => (
        <CharacterItem character={character} key={i} />
      ))}
    </div>
  );
}

export default ListCharacters;
