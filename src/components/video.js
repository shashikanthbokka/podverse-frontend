import React from "react";
import "./video.css";
import Navbar from "./navbar";
import video from "../video-1.mp4";

function Video() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="video-screen">
          <video id="video" controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
          <div className="video-list">
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
            <div className="video-item">
              <img src="images/starboy.png" />
              <div className="video-text">
                <h3>Starboy</h3>
                <p>The Weeknd, Daft Punk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
