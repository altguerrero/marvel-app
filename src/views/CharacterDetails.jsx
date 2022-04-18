import "../styles/CharacterDetails.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter, getCharacterComic } from "../service/Characters.service";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";

import Container from "../components/Container";
import Hero from "../assets/img/marvelHero.jpeg";
import { FavoriteIconBorder, FavoriteIcon } from "../components/Icons";

function CharacterDetails() {
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      const res = await getCharacter({ id });
      const data = await res.data.data.results[0];
      const favorites = await getFavoriteComics();

      setCharacter(data);
      setFavorites(favorites);

      const comicsItems = [];

      for (const comic of data.comics.items) {
        const res = await getCharacterComic(comic.resourceURI);
        const comicItem = await res.data.data.results[0];
        comicsItems.push(comicItem);
      }

      const isFavorited = validIsFavorited(comicsItems, favorites);

      setComics(isFavorited);
      setLoading(false);
    } catch (error) {
      throw new Error("Error in request: " + error.message);
    }
  };

  const validIsFavorited = (data, favorites) => {
    const currentData = data;

    currentData.map((item, i) => {
      const isFavorited = favorites.findIndex(
        (favorite) => favorite.title === item.title
      );

      if (isFavorited !== -1) {
        currentData[i].favorite = true;
      } else {
        currentData[i].favorite = false;
      }

      return true;
    });

    return currentData;
  };

  const getFavoriteComics = async () => {
    let comics = [];
    const colRef = collection(db, `users/${user.uid}/comics`);
    const res = await getDocs(colRef);
    if (res) {
      res.docs.forEach((doc) => {
        comics.push({ ...doc.data(), id: doc.id });
      });
      return comics;
    }
  };

  const adddFavoriteComic = async (comic) => {
    const { title, thumbnail } = comic;
    try {
      const docRef = await addDoc(collection(db, `users/${user.uid}/comics`), {
        title,
        image: `${thumbnail.path}.${thumbnail.extension}`,
      });
      getFavoriteComics();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteFavoriteComic = async (comic) => {
    const deleteItem = favorites.filter((item) => item.title === comic.title);
    const { id } = deleteItem[0];
    try {
      const ref = doc(db, `users/${user.uid}/comics`, id);
      await deleteDoc(ref);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleFavorites = (index) => {
    const data = comics;
    let item = data[index];
    item.favorite = !item.favorite;
    setComics([...data]);

    if (item.favorite) {
      adddFavoriteComic(item);
    } else {
      deleteFavoriteComic(item);
    }
  };

  if (character)
    return (
      <section className="characterDetails">
        <header
          className="characterDetails__header"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <Container>
            <figure className="characterDetails__image">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.nameƒ}
              />
            </figure>
          </Container>
        </header>
        <Container>
          <div className="characterDetails__content">
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </div>
          <div className="comics">
            {loading ? (
              <h3>loading...</h3>
            ) : (
              <>
                <h2>Comics</h2>
                <ul className="comics__list">
                  {comics.map((comic, i) => (
                    <li
                      key={i}
                      // ={() => handleComic(comic)}
                      className="comics__item"
                    >
                      <div className="comics__favorite">
                        {comic.favorite ? (
                          <span onClick={() => handleFavorites(i)}>
                            <FavoriteIcon />
                          </span>
                        ) : (
                          <span onClick={() => handleFavorites(i)}>
                            <FavoriteIconBorder />
                          </span>
                        )}
                      </div>
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                      />
                      <p>{comic.title}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Container>
      </section>
    );
}

export default CharacterDetails;
