import React from "react";
import { Link } from "react-router-dom";
import "./explore.css";

import Navbar from "./navbar";
import Player from "./player";

function Explore() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="new-releases-bar">
          <h1>New Releases</h1>
          <p>Show all</p>
        </div>
        <div className="mid-section">
          <div className="mid-section-items">
            <div className="mid-section-item">
              <img src="images/starboy.png" />
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
            <div className="mid-section-item">
              <img src="images/starboy.png" />
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
            <div className="mid-section-item">
              <img src="images/starboy.png" />
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
            <div className="mid-section-item">
              <img src="images/starboy.png" />
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
            <div className="mid-section-item">
              <img src="images/starboy.png" />
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
            <div className="mid-section-item">
              <img src="images/starboy.png" />
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
        </div>

        <div className="language-section">
          <div className="language-section-bar">
            <h1>Languages</h1>
            <p>Show all</p>
          </div>
          <div className="langs">
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
            <div className="lang">English</div>
          </div>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default Explore;
