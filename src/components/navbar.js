import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <img src="images/logo-podverse.png" />

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
              <Link to="/library">Library</Link>
            </li>
            <Link to="/profile">
              <img id="profile-pic" src="images/profile.jpeg" />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
