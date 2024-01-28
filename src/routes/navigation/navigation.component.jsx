import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  // Wenn sich der aktuelle Nutzer ändern, wird das Komponent durch den Hook wieder gerendert.
  const { currentUser, setCurrentUser } = useContext(UserContext);
  //console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img width={64} src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>ABMELDEN</span>
            ) : ( 
            <Link className="nav-link" to='/auth'>LOGIN</Link>
            )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
