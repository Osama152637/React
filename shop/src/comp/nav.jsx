import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <Link to="/" className="logo">Products App</Link>
        <ul className="flex">
          <li className="main-list">
            <Link className="main-link" to="/registration">
            Registration
            </Link>
          </li>
          <li className="main-list">
            <Link className="main-link" to="/login">
              Log-In
            </Link>
          </li>
          <li className="main-list">
            <Link className="main-link" to="/card">
              &#128722;
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
