import React from "react";
import "./Table2.css";

function Table2(props) {
  const { theads, tbodyData, showRange } = props;
  return (
    <table className="player_batting_formats">
      <thead>
        <tr>
          {theads.map((a, index) => (
            <th>{a}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbodyData.slice(0, showRange).map((b, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <p className="player_batting_formats_teams">
                <span>{b.teamName}</span> vs <span>{b.opponentTeamName}</span>
              </p>
              <p className="player_batting_formats_date">{b.date}</p>
            </td>
            <td>
              {b.score}{" "}
              <span className="color-blue">{b.onStrike ? "*" : ""}</span>
            </td>
            <td>{b.outType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table2;
