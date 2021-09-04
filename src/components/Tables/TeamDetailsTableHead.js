import React from "react";

function TeamDetailsTableHead(props) {
  const { title, subtitles } = props;
  return (
    <tr className="teams_current_details_table_head">
      <th className="teams_details_table_headings">{title}</th>
      {subtitles.map((tabelTitle, index) => (
        <th className="teams_details_table_headings">{tabelTitle}</th>
      ))}
    </tr>
  );
}

export default TeamDetailsTableHead;
