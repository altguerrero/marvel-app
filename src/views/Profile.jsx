import "../styles/Profile.scss";

import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Container from "../components/Container";
import Avatar from "../assets/img/avartar-profile.png";
import { Link } from "react-router-dom";
import { FavoriteIcon } from "../components/Icons";

function Profile() {
  const { user, updateUser } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoriteComics();
  });

  const getFavoriteComics = async () => {
    let comics = [];
    const colRef = collection(db, `users/${user.uid}/comics`);
    const res = await getDocs(colRef);
    if (res) {
      res.docs.forEach((doc) => {
        comics.push({ ...doc.data(), id: doc.id });
      });
      setFavorites(comics);
    }
  };

  const handleUpdate = () => {
    updateUser();
  };

  const deleteFavoriteComic = async (comic, index) => {
    const { id } = comic;
    try {
      const ref = doc(db, `users/${user.uid}/comics`, id);
      await deleteDoc(ref);
      const data = favorites.splice(index, 1);
      setFavorites(data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section className="profile">
      <Container>
        <div className="profile__info">
          <figure>
            <img src={user.photoURL ? user.photoURL : Avatar} alt="" />
          </figure>
          <h1>{user.displayName ? user.displayName : user.email}</h1>
          <Link to="#" onClick={handleUpdate}>
            Edit profile
          </Link>
        </div>
        <div className="profile__comics">
          <h2>Favorite comics</h2>
          <ul>
            {favorites &&
              favorites.map((comic, i) => (
                <li key={i}>
                  <div onClick={() => deleteFavoriteComic(comic, i)}>
                    <FavoriteIcon />
                  </div>
                  <img src={comic.image} alt={comic.title} />
                  <h3>{comic.title}</h3>
                </li>
              ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Profile;
