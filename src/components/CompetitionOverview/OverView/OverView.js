import React from "react";
import "./OverView.css";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Table from "components/Tables/Table/Table";
import { useSelector } from "react-redux";
import Slider1 from "components/Sliders/Slider1/Slider1";

function OverView() {
  const { groupB } = useSelector((state) => state.competitionOverview);
  const { data } = useSelector((state) => state.battingLeaders);

  return (
    <div>
      <div className="container-wrapper-30">
        <div className="mb-30">
          <TitleBar5
            title="Overview"
            fontSize="1.25rem"
            showBg={false}
            flex={false}
            containerWrapper30={false}
          />
        </div>
        <div className="mb-30">
          <TitleBar5
            title="Group B"
            fontSize="1rem"
            showBg={false}
            flex={false}
            containerWrapper30={false}
          />
        </div>
      </div>

      <div className="overview-table-wrapper">
        <div className="container-wrapper-30">
          <div className="mb-30">
            <Table
              tabelHead={[
                "Rank",
                "Team",
                "M",
                "W",
                "L",
                "N/R",
                "D",
                "P",
                "NRP",
              ]}
              mainHeadTitle="Team"
              data={groupB}
            />
          </div>
        </div>
      </div>

      <div className="container-wrapper-30">
        <div className="mb-30">
          <TitleBar5
            title="Semi-Finals"
            fontSize="1rem"
            showBg={false}
            flex={false}
            containerWrapper30={false}
          />
        </div>
      </div>

      <div className="overview-table-wrapper">
        <div className="container-wrapper-30">
          <div className="mb-30">
            <Table
              tabelHead={[
                "Rank",
                "Team",
                "M",
                "W",
                "L",
                "N/R",
                "D",
                "P",
                "NRP",
              ]}
              mainHeadTitle="Team"
              data={groupB.slice(0, 2)}
            />
          </div>
        </div>
      </div>

      <div className="container-wrapper-30">
        <div className="mb-30">
          <TitleBar5
            title="Finals"
            fontSize="1rem"
            showBg={false}
            flex={false}
            containerWrapper30={false}
          />
        </div>
      </div>

      <div className="overview-table-wrapper">
        <div className="container-wrapper-30">
          <div className="mb-30">
            <Table
              tabelHead={[
                "Rank",
                "Team",
                "M",
                "W",
                "L",
                "N/R",
                "D",
                "P",
                "NRP",
              ]}
              mainHeadTitle="Team"
              data={groupB.slice(0, 2)}
            />
          </div>
        </div>
      </div>

      <div className="container-wrapper-30">
        <div className="mb-30">
          <TitleBar5
            title="Group A"
            fontSize="1rem"
            showBg={false}
            flex={false}
            containerWrapper30={false}
          />
        </div>
      </div>

      <div className="overview-table-wrapper">
        <div className="container-wrapper-30">
          <div className="mb-30">
            <Table
              tabelHead={[
                "Rank",
                "Team",
                "M",
                "W",
                "L",
                "N/R",
                "D",
                "P",
                "NRP",
              ]}
              mainHeadTitle="Team"
              data={groupB}
            />
          </div>
        </div>
      </div>

      <div className="mb-30">
        <Slider1 headerTitle="Batting leaders" data={data} />
      </div>
      <div className="mb-30">
        <Slider1 headerTitle="Bowling leaders" data={data} />
      </div>
      <div className="mb-30">
        <Slider1 headerTitle="Fielding leaders" data={data} />
      </div>
    </div>
  );
}

export default OverView;
