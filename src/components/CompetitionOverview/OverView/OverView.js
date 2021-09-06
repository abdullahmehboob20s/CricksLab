import React from "react";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Table from "components/Tables/Table/Table";
import { useSelector } from "react-redux";

function OverView() {
  const { groupB } = useSelector((state) => state.competitionOverview);
  return (
    <div>
      <div className="mb-30">
        <TitleBar5 title="Overview" fontSize="20px" />
      </div>
      <div className="mb-30">
        <TitleBar5 title="Group B" fontSize="16px" />
      </div>

      <div className="mb-30">
        <Table
          tabelHead={["Rank", "Team", "M", "W", "L", "N/R", "D", "P", "NRP"]}
          mainHeadTitle="Team"
          data={groupB}
        />
      </div>

      <div className="mb-30">
        <TitleBar5 title="Semi-Finals" fontSize="16px" />
      </div>

      <div className="mb-30">
        <Table
          tabelHead={["Rank", "Team", "M", "W", "L", "N/R", "D", "P", "NRP"]}
          mainHeadTitle="Team"
          data={groupB.slice(0, 2)}
        />
      </div>

      <div className="mb-30">
        <TitleBar5 title="Final" fontSize="16px" />
      </div>

      <div className="mb-30">
        <Table
          tabelHead={["Rank", "Team", "M", "W", "L", "N/R", "D", "P", "NRP"]}
          mainHeadTitle="Team"
          data={groupB.slice(0, 2)}
        />
      </div>

      <div className="mb-30">
        <TitleBar5 title="Group A" fontSize="16px" />
      </div>

      <div className="mb-30">
        <Table
          tabelHead={["Rank", "Team", "M", "W", "L", "N/R", "D", "P", "NRP"]}
          mainHeadTitle="Team"
          data={groupB}
        />
      </div>
    </div>
  );
}

export default OverView;
