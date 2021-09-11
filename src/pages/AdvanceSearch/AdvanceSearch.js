import React from "react";
import "./AdvanceSearch.css";
import Navbar from "layouts/Navbar/Navbar";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
// import TabPan from "components/Tabs/TabPan";
import CompetitionsCard from "components/Cards/CompetitionsCard/CompetitionsCard";
import { useSelector } from "react-redux";
import Footer from "layouts/Footer/Footer";
import { FiSearch } from "react-icons/fi";
import cross from "assets/images/cross.png";
import Dropdowns from "components/Dropdowns/Dropdown/Dropdowns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function AdvanceSearch() {
  const { data } = useSelector((state) => state.leagues);

  const handleSelect = (ranges) => {
    console.log(ranges);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <>
      <Navbar showSearchBar={false} />

      <div>
        <Tabs defaultTab={1}>
          <div className="advance_search_title_bar_wrapper">
            <div className="container-wrapper">
              <div className="advance_search_title_bar">
                <div className="advance_search_input">
                  <div className="advance_search_input_icon search">
                    <FiSearch />
                  </div>
                  <input type="text" name="" id="" placeholder="Search" />
                  <div className="advance_search_input_icon">
                    <img src={cross} alt="" />
                  </div>
                </div>
                <div className="advance_search_tabs">
                  <Tab
                    className="adv_search_tab"
                    activeClassName="adv_search_tab_active"
                    label="Competitions"
                    tabIndex={1}
                  />
                  <Tab
                    className="adv_search_tab"
                    activeClassName="adv_search_tab_active"
                    label="Clubs"
                    tabIndex={2}
                  />
                  <Tab
                    className="adv_search_tab"
                    activeClassName="adv_search_tab_active"
                    label="Matches"
                    tabIndex={3}
                  />
                  <Tab
                    className="adv_search_tab"
                    activeClassName="adv_search_tab_active"
                    label="Teams"
                    tabIndex={4}
                  />
                  <Tab
                    className="adv_search_tab"
                    activeClassName="adv_search_tab_active"
                    label="Players"
                    tabIndex={5}
                  />
                  <Tab
                    className="adv_search_tab"
                    activeClassName="adv_search_tab_active"
                    label="Officials"
                    tabIndex={6}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="advance_search_dropdowns_wrapper">
            <div className="container-wrapper">
              <div className="advance_search_dropdowns">
                <div className="advance_search_dropdowns_left">
                  <Dropdowns
                    btnTitle="Competition Type"
                    checkBoxes={[
                      "Open",
                      "Corporate",
                      "Community",
                      "School",
                      "Other",
                    ]}
                  />
                  <Dropdowns btnTitle="Ball Type" />
                  <Dropdowns
                    btnTitle="Location"
                    searchBar={true}
                    checkBoxes={[
                      "India",
                      "Sri Lanka",
                      "Pakistan",
                      "New Zealand",
                      "Australia",
                    ]}
                  />
                  <Dropdowns btnTitle="Date Range">
                    <DateRangePicker
                      className="calendar_date_picker"
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                    />
                  </Dropdowns>
                </div>
                <div className="advance_search_dropdowns_right">
                  <Dropdowns width="180px" btnTitle="Sort By" />
                </div>
              </div>
            </div>
          </div>

          <div className="container-wrapper">
            <TitleBar2 mainTitle="Related Match Videos" showRightSide={false} />

            <div className="competitions_cards">
              {data.slice(0, 12).map((league, index) => (
                <CompetitionsCard key={index} data={league} />
              ))}
            </div>
          </div>
        </Tabs>
        <Footer />
      </div>
    </>
  );
}

export default AdvanceSearch;
