import React from "react";
import "./AdvanceSearch.css";
import Navbar from "layouts/Navbar/Navbar";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import CompetitionsCard from "components/Cards/CompetitionsCard/CompetitionsCard";
import { useSelector } from "react-redux";
import Footer from "layouts/Footer/Footer";
import { FiSearch } from "react-icons/fi";
import cross from "assets/images/cross.png";
import Dropdowns from "components/Dropdowns/Dropdown/Dropdowns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Checkbox from "components/Checkbox/Checkbox";
import { ImCross } from "react-icons/im";
import { FiFilter } from "react-icons/fi";
import BlackBackgroundScreen from "components/Screens/BlackBackgroundScreen";

function AdvanceSearch() {
  const [open, setOpen] = React.useState(false);
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
      <BlackBackgroundScreen show={open} hideOnClick={() => setOpen(false)} />
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

                <div className="advance_search_tabs_wrapper">
                  <div onClick={() => setOpen(!open)} className="filter_icon">
                    <FiFilter />
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
          </div>

          <div className="advance_search_dropdowns_wrapper">
            <div className="container-wrapper">
              <div className="advance_search_dropdowns">
                <div
                  className={
                    open
                      ? "advance_search_dropdowns_left_wrapper show"
                      : "advance_search_dropdowns_left_wrapper"
                  }
                >
                  <div className="advance_search_dropdowns_left_wrapper_btns">
                    <button>RESET</button>
                    <button>APPLY</button>
                  </div>
                  <div className="advance_search_dropdowns_left">
                    <p className="advance_search_dropdowns_left_filter_title">
                      Filter <ImCross onClick={() => setOpen(false)} />
                    </p>
                    <p className="advance_search_dropdowns_left_filter_subtitle">
                      Filter by
                    </p>

                    <div className="advance_search_dropdowns_left_wrapper_checkboxes ">
                      <Tab
                        className="radio_tab_container"
                        tabIndex={1}
                        label={
                          <Checkbox
                            radio={true}
                            radioTitle="tab"
                            rounded={true}
                            title="Competitions"
                          />
                        }
                      />

                      <Tab
                        className="radio_tab_container"
                        tabIndex={2}
                        label={
                          <Checkbox
                            radio={true}
                            radioTitle="tab"
                            rounded={true}
                            title="Clubs"
                          />
                        }
                      />
                      <Tab
                        className="radio_tab_container"
                        tabIndex={3}
                        label={
                          <Checkbox
                            radio={true}
                            radioTitle="tab"
                            rounded={true}
                            title="Matches"
                          />
                        }
                      />
                      <Tab
                        className="radio_tab_container"
                        tabIndex={4}
                        label={
                          <Checkbox
                            radio={true}
                            radioTitle="tab"
                            rounded={true}
                            title="Teams"
                          />
                        }
                      />
                      <Tab
                        className="radio_tab_container"
                        tabIndex={5}
                        label={
                          <Checkbox
                            radio={true}
                            radioTitle="tab"
                            rounded={true}
                            title="Players"
                          />
                        }
                      />
                      <Tab
                        className="radio_tab_container"
                        tabIndex={6}
                        label={
                          <Checkbox
                            radio={true}
                            radioTitle="tab"
                            rounded={true}
                            title="Officials"
                          />
                        }
                      />
                    </div>
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
                    <Dropdowns
                      btnTitle="Ball Type"
                      checkBoxes={[
                        "India",
                        "Sri Lanka",
                        "Pakistan",
                        "New Zealand",
                        "Australia",
                      ]}
                    />
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
                    <Dropdowns
                      btnTitle="Date Range"
                      showRightSide={true}
                      checkBoxes={[
                        "This Week",
                        "Last Week",
                        "This Month",
                        "Last Month",
                        "This Quarter",
                        "Last Quarter",
                        "This Year",
                        "Last Year",
                      ]}
                    >
                      <DateRangePicker
                        className="calendar_date_picker"
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        showMonthAndYearPickers={false}
                        // dayDisplayFormat={}
                        weekdayDisplayFormat="EEEEE"
                      />
                    </Dropdowns>
                  </div>
                </div>
                <div className="advance_search_dropdowns_right">
                  <Dropdowns
                    dropdownWidth="fit-content"
                    width="180px"
                    btnTitle="Sort By"
                    showRightSide={false}
                  >
                    Drodown
                  </Dropdowns>
                </div>
              </div>
            </div>
          </div>

          <TabPan tabIndex={1}>
            <div className="container-wrapper">
              <TitleBar2
                mainTitle="Related Match Videos"
                showRightSide={false}
              />

              <div className="team_cards_wrapper">
                {data.slice(0, 12).map((league, index) => (
                  <CompetitionsCard key={index} data={league} />
                ))}
              </div>
            </div>
          </TabPan>
          <TabPan tabIndex={2}>
            <div className="container-wrapper">index 2</div>
          </TabPan>
          <TabPan tabIndex={3}>
            <div className="container-wrapper">index 3</div>
          </TabPan>
          <TabPan tabIndex={4}>
            <div className="container-wrapper">index 4</div>
          </TabPan>
          <TabPan tabIndex={5}>
            <div className="container-wrapper">index 5</div>
          </TabPan>
          <TabPan tabIndex={6}>
            <div className="container-wrapper">index 6</div>
          </TabPan>
        </Tabs>
        <Footer />
      </div>
    </>
  );
}

export default AdvanceSearch;
