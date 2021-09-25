import React from "react";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Table from "components/Tables/Table/Table";
import { useSelector } from "react-redux";

function OverView() {
  const { mvp } = useSelector((state) => state.competitionOverview);
  return (
    <div>
      <div className="container-wrapper-30">
        <div className=" mb-30">
          <TitleBar5
            title="MVP"
            fontSize="1.25rem"
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
                "Player",
                "Batting",
                "Bowling",
                "Fielding",
                "Total",
                "Rank",
              ]}
              mainHeadTitle="Player"
              borderInResponsive={true}
              showIndexes={false}
              data={mvp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
