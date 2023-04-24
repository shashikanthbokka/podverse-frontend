import React from "react";
import "./player.css";

function Player() {
  return (
    <div>
      <div className="player">
        <div className="player-img">
          <img src="images/starboy.png" />
        </div>
        <div className="player-name">
          <div className="player-details">
            <h3>Starboy</h3>
            <p>The Weeknd, Daft Punk</p>

            <div className="player-icons">
              <i className="fas fa-heart"></i>
              <i className="fa-sharp fa-solid fa-list-check"></i>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </div>
        <div className="player-controls">
          <div className="player-buttons">
            <button className="small-btn">
              <i class="fa-solid fa-shuffle"></i>
            </button>

            <button className="prev-track-btn medium-btn glow">
              <i class="fa fa-step-backward"></i>
            </button>
            <button className="play-pause-btn large-btn glow">
              <i class="fa fa-play"></i>
            </button>
            <button className="next-track-btn medium-btn glow">
              <i class="fa fa-step-forward"></i>
            </button>
            <button className="small-btn">
              <i class="fa-solid fa-repeat"></i>
            </button>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
