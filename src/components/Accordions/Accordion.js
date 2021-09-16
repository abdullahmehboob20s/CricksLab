import React from "react";
import "./Accordion.css";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import SquadPlayerCard from "components/Cards/SquadPlayerCard/SquadPlayerCard";

function Accordion(props) {
  const [active, setActive] = React.useState(false);
  const { squad } = useSelector((state) => state.playerDetails);
  const accordionRef = React.useRef("");

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="accordion ">
      <div className="accordion_header" onClick={toggleAccordion}>
        <div className="container-wrapper-30">
          <div className="accordion_wrapper">
            <div className="accordion_left">
              <img className="accordion_img" src={props.titleImg} alt="" />
              <p className="accordion_title">{props.title}</p>
            </div>
            <div
              className={active ? "accordion_btn reversed" : "accordion_btn"}
            >
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={accordionRef}
        style={{
          height: active ? accordionRef.current?.scrollHeight + "px" : "0px",
        }}
        className="accordion_body_wrapper"
      >
        <div className="accordion_body">
          <div className="container-wrapper-30 mb-30">
            <div className="squad_playing_X1_cards">
              {squad.map((player, index) => (
                <SquadPlayerCard data={player} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
