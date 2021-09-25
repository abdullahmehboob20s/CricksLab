import React from "react";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import { BsChevronDown } from "react-icons/bs";
import Table from "components/Tables/Table/Table";
import { useSelector } from "react-redux";

function Leaderboard() {
  const { data } = useSelector((state) => state.battingSummary);

  return (
    <div>
      <div className="mb-30">
        <TitleBar5
          title="Boundaries Stats"
          fontSize="1.25rem"
          rowInResponsive={true}
          showBg={false}
          flex={true}
          containerWrapper30={true}
          leading={
            <div className="boundaries_dropdown">
              <p className="bold">Filter Matches</p>
              <BsChevronDown />
            </div>
          }
        />
      </div>

      <div className="mb-70">
        <Table
          tabelHead={[
            "Player",
            "M",
            "INN",
            "NO",
            "100'S",
            "50'S",
            "4'S",
            "6'S",
            "HS",
            "RUNS",
            "	AVG",
            "BF",
            "SR",
          ]}
          mainHeadTitle="Player"
          showIndexes={false}
          data={data}
          border={false}
          squeeze={true}
        />
      </div>

      <div className="container-wrapper-30">
        <div className="mb-30">
          <TitleBar5
            title="Bowling Summary"
            fontSize="1.25rem"
            showBg={false}
            flex={true}
            containerWrapper30={false}
          />
        </div>
      </div>
      <Table
        tabelHead={[
          "Player",
          "M",
          "INN",
          "NO",
          "100'S",
          "50'S",
          "4'S",
          "6'S",
          "HS",
          "RUNS",
          "	AVG",
          "BF",
          "SR",
        ]}
        mainHeadTitle="Player"
        showIndexes={false}
        data={data}
        border={false}
        squeeze={true}
      />
    </div>
  );
}

export default Leaderboard;
