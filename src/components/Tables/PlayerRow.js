import React from "react";

function PlayerRow(props) {
  const { data } = props;
  return (
    <tr className="teams_details_player_details_wrapper">
      <td className="teams_details_player_details">
        <img src={data.image} alt="" />
        <div>
          <p
            className={
              data.isBatting
                ? "teams_player_detail_title batting"
                : "teams_player_detail_title"
            }
          >
            {data.isBatting ? data.name + " *" : data.name}
          </p>
          <p className="teams_player_detail_subtitle">
            {data.isBatting ? "NOT OUT" : data.subName}
          </p>
        </div>
      </td>
      <td className="teams_details_table_text">{data.runs}</td>
      <td className="teams_details_table_text">{data.balls}</td>
      <td className="teams_details_table_text">{data.fours}</td>
      <td className="teams_details_table_text">{data.sixes}</td>
      <td className="teams_details_table_text">{data.strikeRate}</td>
    </tr>
  );
}

export default PlayerRow;
