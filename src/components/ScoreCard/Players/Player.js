import React from "react";
import bat from "assets/images/Bat.svg";
import ball from "assets/images/Ball.svg";

function Player(props) {
  return (
    <div
      className={
        props.roll === "bowler"
          ? "player_container bowler_division"
          : "player_container"
      }
    >
      <div className={props.onStrike ? "player strike" : "player"}>
        <div className="player_disc">
          {props.roll === "batsman" ? (
            <div className={props.onStrike ? "bat strike" : "bat"}>
              <img src={bat} alt="" />
            </div>
          ) : (
            <div className="bowler">
              <img src={ball} alt="" />
            </div>
          )}

          <p className="player_name">{props.name}</p>
        </div>
        <p className="player_score">{props.score}</p>
      </div>
    </div>
  );
}

export default Player;
