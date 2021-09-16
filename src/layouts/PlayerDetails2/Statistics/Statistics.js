import React from "react";
import "./Statistics.css";
import ScoreCard4 from "components/Cards/ScoreCard4/ScoreCard4";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Table2 from "components/Tables/Table2/Table2";
import { useSelector } from "react-redux";
import Button from "components/Buttons/FollowButton/FollowButton";

function Statistics() {
  const [show, setShow] = React.useState(3);
  const { battingForm } = useSelector((state) => state.PlayersDetails);
  const statistics = [
    {
      title: "Matches",
      disc: "30",
    },
    {
      title: "Highest",
      disc: "52",
    },
    {
      title: "100s",
      disc: "0",
    },
    {
      title: "50s",
      disc: "2",
    },
    {
      title: "6s",
      disc: "49",
    },
    {
      title: "4s",
      disc: "41",
    },
  ];
  return (
    <div>
      <div className="container-wrapper-30">
        <div className="mb-30">
          <ScoreCard4 data={statistics} />
        </div>
        <div className="mb-30">
          <TitleBar5 title="Recent Batting form" fontSize="20px" />
        </div>
      </div>

      <div className="stats_table scrollbar-height-0 mb-30">
        <Table2
          showRange={show}
          theads={["Sr.", "Innings", "Score", "Out Type"]}
          tbodyData={battingForm}
        />
      </div>
      <div className="row justify-center">
        <Button
          title="View All"
          onPress={() => setShow(show + 3)}
          style={{
            padding: "16px 30px",
            border: "0",
            background: "#E5F3F8",
            borderRadius: "10px",
            color: "#33A2D2",
          }}
        />
      </div>
    </div>
  );
}

export default Statistics;
