import "../styles/Nav.scss";

import { useState } from "react";

import Logo from "../assets/svg/Marvel_Logo.svg";
import Container from "./Container";
import Avatar from "../assets/img/avartar-profile.png";
import { DownArrow } from "./Icons";
import { Link } from "react-router-dom";

function Nav({user, logout}) {
  const [settings, setSettings] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const handleSettings = () => {
    setSettings(!settings);
  };

  const showSettings = (e) => {
    if (
      e.target.classList.contains("container") ||
      e.target.classList.contains("nav__settings")
    )
      setSettings(!settings);
  };

  return (
    <>
      <nav className="nav">
        <Container>
          <Link to="/">
            <img className="nav__logo" src={Logo} alt="marvel logo" />
          </Link>

          <div className="nav__user" onClick={handleSettings}>
            <img
              src={user.photoURL ? user.photoURL : Avatar}
              alt={user.displayName}
            />
            <span>{user.displayName ? user.displayName : user.email}</span>
            <DownArrow />
          </div>
        </Container>
      </nav>
      {settings && (
        <div className="nav__settings" onClick={showSettings}>
          <Container>
            <div className="nav__options">
              <Link to="/profile" onClick={handleSettings}>
                See my profile
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default Nav;
