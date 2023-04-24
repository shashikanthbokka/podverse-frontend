import React from "react";
import Navbar from "./navbar";
import Player from "./player";
import { Link } from "react-router-dom";
import "./library.css";
function Library() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="library-bar">
          <h1>Library</h1>
          <p>
            <Link to="/library">Show all</Link>
          </p>
        </div>
        <div className="library-section">
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="library-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default Library;
