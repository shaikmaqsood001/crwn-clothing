import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {currentUser != null && currentUser.displayName != null && (
        <div className="option"> Hi, {currentUser.displayName} </div>
      )}
      <Link to="/" className="option">
        HOME
      </Link>
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          LOGIN/SIGNUP
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProp = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProp)(Header);
