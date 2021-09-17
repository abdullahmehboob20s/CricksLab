import SquadPlayerCard from "components/Cards/SquadPlayerCard/SquadPlayerCard";
import Tab from "components/Tabs/Tab";
import Tabs from "components/Tabs/Tabs";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import TitleBar6 from "components/TitleBars/TitleBar6/TitleBar6";
import React from "react";
import { useSelector } from "react-redux";

function Squad() {
  const { squad } = useSelector((state) => state.playerDetails);
  return (
    <Tabs defaultTab="1">
      <div className="mb-30">
        <TitleBar5
          title="Team Squad"
          fontSize="1.25rem"
          showBg={false}
          flex={true}
          leading={
            <div className="live_commentry_right">
              <Tab
                className="match_details_tab"
                activeClassName="match_details_tabs_active"
                label="Crease Hunters"
                tabIndex="1"
              />
              <Tab
                className="match_details_tab"
                activeClassName="match_details_tabs_active"
                label="Mash Eagles"
                tabIndex="2"
              />
            </div>
          }
        />
      </div>

      {/* <div className="container-wrapper-30">
        <div className="live_commentry">
          <p className="live_commentry_title">Team Squad</p>
         
        </div>
      </div> */}

      <TitleBar5 showBg={true} title="Playing XI" fontSize="0.875rem" />

      <div className="container-wrapper-30">
        <div className="squad_playing_X1_cards">
          {squad.map((player, index) => (
            <SquadPlayerCard data={player} />
          ))}
        </div>
      </div>

      <TitleBar5 showBg={true} title="Extra Player" fontSize="0.875rem" />

      <div className="container-wrapper-30">
        <div className="squad_playing_X1_cards">
          {squad.slice(4, 8).map((player, index) => (
            <SquadPlayerCard data={player} />
          ))}
        </div>
      </div>
    </Tabs>
  );
}

export default Squad;
