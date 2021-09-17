import SquadPlayerCard from "components/Cards/SquadPlayerCard/SquadPlayerCard";
import Tab from "components/Tabs/Tab";
import Tabs from "components/Tabs/Tabs";
import React from "react";
import { useSelector } from "react-redux";

function Squad() {
  const { squad } = useSelector((state) => state.playerDetails);
  return (
    <Tabs defaultTab="1">
      <div className="container-wrapper-30">
        <div className="live_commentry">
          <p className="live_commentry_title">Team Squad</p>
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
        </div>
      </div>

      <div className="squad_playing_X1">
        <div className="container-wrapper-30">
          <p>Playing XI</p>
        </div>
      </div>

      <div className="container-wrapper-30">
        <div className="squad_playing_X1_cards">
          {squad.map((player, index) => (
            <SquadPlayerCard data={player} />
          ))}
        </div>
      </div>

      <div className="squad_playing_X1">
        <div className="container-wrapper-30">
          <p>Extra Player</p>
        </div>
      </div>

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
