import React from "react";
import "./homepage.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import Player from "./player";
import Navbar from "./navbar";

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <div className="top-section">
        <h1>Hi Mahesh,</h1>
        <div className="top-section-grid">
          <Link to="/video">
            <div className="top-section-grid-item">
              <img src="images/starboy.png" />
              <div className="top-section-grid-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
          </Link>

          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
          <div className="top-section-grid-item">
            <img src="images/starboy.png" />
            <div className="top-section-grid-text">
              <h3>Starboy</h3>
              <p>The Weeknd, Daft Punk</p>
            </div>
          </div>
        </div>
      </div>
      <div className="language-section">
        <div className="language-section-bar">
          <h1>Languages</h1>
          <p>
            <Link to="/explore">Show all</Link>
          </p>
        </div>
        <div className="languages">
          <div className="language">English</div>
          <div className="language">Hindi</div>
          <div className="language">Telugu</div>
          <div className="language">Tamil</div>
          <div className="language">Malayalam</div>
        </div>
      </div>

      <div className="mid-section-grid">
        <div className="mid-section">
          <div className="mid-section-bar">
            <h1>Trending</h1>
            <p>
              <Link to="/trending">Show all</Link>
            </p>
          </div>
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
        <div className="mid-section">
          <div className="mid-section-bar">
            <h1>New episodes</h1>
            <p>Show all</p>
          </div>
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
        <div className="mid-section">
          <div className="mid-section-bar">
            <h1>Recommended</h1>
            <p>Show all</p>
          </div>
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
        <div className="mid-section">
          <div className="mid-section-bar">
            <h1>Popular podcasters</h1>
            <p>Show all</p>
          </div>
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
        <Player />
      </div>
    </div>
  );
}

export default HomePage;
