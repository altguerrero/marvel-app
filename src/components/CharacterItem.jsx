import CustomLink from "./CustomLink";
import CharacterImage from "./CharacterImage";
import Typography from "./Typography";
import Stack from "./Stack";

function CharacterItem({ character }) {
  const {
    id,
    name,
    thumbnail: { extension, path },
  } = character;

  return (
    <CustomLink href={`/character/${id}`} color="text" decoration="none">
      <Stack direction="column" spacing={2}>
        <CharacterImage src={`${path}.${extension}`} alt={name} />
        <Typography variant="h2" size="base" align="center">
          {name}
        </Typography>
      </Stack>
    </CustomLink>
  );
}

export default CharacterItem;
