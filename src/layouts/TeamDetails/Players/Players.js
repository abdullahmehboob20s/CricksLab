import React from "react";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Tab from "components/Tabs/Tab";
import Tabs from "components/Tabs/Tabs";
import { IoGridOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import SquadPlayerCard from "components/Cards/SquadPlayerCard/SquadPlayerCard";
import "./Players.css";

function Players() {
  const { squad2 } = useSelector((state) => state.playerDetails);
  const [isGrid, setisGrid] = React.useState(true);

  const changeLayout = (value) => {
    setisGrid(value);
  };

  return (
    <div className="container-wrapper-30">
      <div className="batting_stats_tabs mb-30">
        <TitleBar5 title="All Players" fontSize="20px" />
        <div className="row gap-50">
          <button
            onClick={() => changeLayout(false)}
            className={!isGrid ? "img_tab img_tab_active" : "img_tab"}
          >
            <FaBars />
          </button>

          <button
            onClick={() => changeLayout(true)}
            className={isGrid ? "img_tab img_tab_active" : "img_tab "}
          >
            <IoGridOutline />
          </button>
        </div>
      </div>

      <div className={isGrid ? "player_squad_player_card_wrapper" : ""}>
        {squad2.map((player, index) => (
          <SquadPlayerCard layout={isGrid} data={player} />
        ))}
      </div>
    </div>
  );
}

export default Players;
