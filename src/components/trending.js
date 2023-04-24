import React from "react";
import "./trending.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Player from "./player";

function Trending() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="trending-bar">
          <h1>Trending</h1>
          <p>
            <Link to="/trending">Show all</Link>
          </p>
        </div>
        <div className="trending-section">
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
            <img src="images/starboy.png" />
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>
          </div>
          <div className="trending-item">
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

export default Trending;
