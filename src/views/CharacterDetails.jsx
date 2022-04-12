import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../service/Characters.service";

function CharacterDetails() {
  const [character, setCharacter] = useState();
  let { id } = useParams();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      const res = await getCharacter({ id });
      setCharacter(res.data.data.results[0]);
    } catch (error) {
      throw new Error("Error in request: " + error.message);
    }
  };

  if (character)
    return (
      <div>
        <p>{character.name}</p>
      </div>
    );
}

export default CharacterDetails;
