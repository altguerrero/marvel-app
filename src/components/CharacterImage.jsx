import "../styles/CharacterImage.scss";

function CharacterImage({ src, alt }) {
  return <img className="characterImage" src={src} alt={alt} />;
}

export default CharacterImage;
