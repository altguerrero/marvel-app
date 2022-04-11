import { Link } from "react-router-dom";

function CharacterItem({ character }) {
  const {
    id,
    name,
    thumbnail: { extension, path },
  } = character;

  return (
    <Link to={`/character/${id}`}>
      <p>{name}</p>
      <img src={`${path}.${extension}`} alt={name} />
    </Link>
  );
}

export default CharacterItem;
