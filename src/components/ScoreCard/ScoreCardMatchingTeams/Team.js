import React from "react";

function Team(props) {
  return (
    <div className={props.reverse ? "team reverse" : "team"}>
      <div className={props.reverse ? "team_img reverse" : "team_img"}>
        <img src={props.img} alt="" />
      </div>
      <div className={props.reverse ? "team_content reverse" : "team_content"}>
        <p className="team_name">
          {props.name} {props.yetToBat ? "" : "*"}
        </p>
        {props.yetToBat ? (
          <>
            <p className="yet_to_bat">*Yet to Bat</p>
          </>
        ) : (
          <>
            <p className="team_score">80 / 7</p>
            <p className="team_overs">(14 Overs)</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Team;
