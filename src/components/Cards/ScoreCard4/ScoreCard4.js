import React from "react";
import "./ScoreCard4.css";

function ScoreCard4({ data }) {
  return (
    <div className="score_card_4">
      {data.map((item, index) => (
        <div className="score_card_4_col">
          <p className="score_card_4_col_1st_child">{item.disc}</p>
          <p className="score_card_4_col_2nd_child">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ScoreCard4;
