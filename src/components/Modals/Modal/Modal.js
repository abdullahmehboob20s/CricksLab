import React from "react";
import "./Modal.css";
import BlackBackgroundScreen from "components/Screens/BlackBackgroundScreen";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import Search from "components/SearchBars/Search/Search";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Button from "components/Buttons/FollowButton/FollowButton";
import FollowButton from "components/Buttons/FollowButton/FollowButton";
import TabPan from "components/Tabs/TabPan";

function Modal(props) {
  const { show, setShow } = props;
  return (
    <div>
      <BlackBackgroundScreen show={show} hideOnClick={() => setShow(false)} />
      <div className={show ? "modal show" : "modal"}>
        <div className="modal_form">
          <Tabs defaultTab={1}>
            <div className="row mb-30">
              <Tab
                className="competitions_tab flex-1 text-center"
                activeClassName="competitions_tab_active"
                label="LOGIN"
                tabIndex={1}
              />
              <Tab
                className="competitions_tab flex-1 text-center"
                activeClassName="competitions_tab_active"
                label="SIGN UP"
                tabIndex={2}
              />
            </div>
            {/* <div className="mb-20">
              <TitleBar5
                title="LOGIN"
                fontSize="1.5rem"
                lineHeight="24px"
                containerWrapper30={false}
                color="#081027"
              />
            </div> */}
            <TabPan tabIndex={1}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <FollowButton
                title="LOGIN"
                background="#33A2D2"
                border="none"
                width="119px"
                height="50px"
                fontSize="14px"
                color="white"
                onPress={() => console.log("Nothing")}
              />
            </TabPan>
            <TabPan tabIndex={2}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <FollowButton
                title="SIGN UP"
                background="#33A2D2"
                border="none"
                width="119px"
                height="50px"
                fontSize="14px"
                color="white"
                onPress={() => console.log("Nothing")}
              />
            </TabPan>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Modal;
