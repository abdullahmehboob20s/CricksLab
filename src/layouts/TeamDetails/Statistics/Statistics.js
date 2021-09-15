import React from "react";
import ScoreCard4 from "components/Cards/ScoreCard4/ScoreCard4";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Tab from "components/Tabs/Tab";
import Tabs from "components/Tabs/Tabs";
import "./Statistics.css";

function Statistics() {
  const statistics = [
    {
      title: "Total Matches",
      disc: "30",
    },
    {
      title: "Won",
      disc: "12",
    },
    {
      title: "Loss",
      disc: "05",
    },
    {
      title: "Upcoming Matches",
      disc: "2",
    },
  ];
  return (
    <>
      <div className="container-wrapper-30">
        <div className="mb-30">
          <ScoreCard4 data={statistics} />
        </div>
        <div className="batting_stats_tabs mb-30">
          <TitleBar5 title="Battings Statistics" fontSize="20px" />
          <div className="row">
            <Tabs defaultTab={1}>
              <Tab
                className="match_details_tab"
                activeClassName="match_details_tabs_active"
                label="Overall"
                tabIndex={1}
              />
              <Tab
                className="match_details_tab"
                activeClassName="match_details_tabs_active"
                label="Match Type"
                tabIndex={2}
              />
            </Tabs>
          </div>
        </div>
      </div>
      <div className="batting_stats_table_container scrollbar-height-0 mb-30">
        <table className="batting_stats_table">
          <thead>
            <tr>
              <th></th>
              <th>M</th>
              <th>INN</th>
              <th>NO</th>
              <th>Runs</th>
              <th>HS</th>
              <th>AVG</th>
              <th>BF</th>
              <th>SR</th>
              <th>100</th>
              <th>200</th>
              <th>50s</th>
              <th>4s</th>
              <th>6s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Summary</td>
              <td>30</td>
              <td>30</td>
              <td>2</td>
              <td>12443</td>
              <td>125</td>
              <td>225</td>
              <td>-</td>
              <td>220.78</td>
              <td>2</td>
              <td>0</td>
              <td>57</td>
              <td>453</td>
              <td>124</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-wrapper-30">
        <div className="batting_stats_tabs mb-30">
          <TitleBar5 title="Bowling Statistics" fontSize="20px" />
          <div className="row">
            <Tabs defaultTab={2}>
              <Tab
                className="match_details_tab"
                activeClassName="match_details_tabs_active"
                label="Overall"
                tabIndex={1}
              />
              <Tab
                className="match_details_tab"
                activeClassName="match_details_tabs_active"
                label="Match Type"
                tabIndex={2}
              />
            </Tabs>
          </div>
        </div>
      </div>
      <div className="batting_stats_table_container scrollbar-height-0 mb-30">
        <table className="batting_stats_table">
          <thead>
            <tr>
              <th></th>
              <th>M</th>
              <th>INN</th>
              <th>B</th>
              <th>Runs</th>
              <th>WKTs</th>
              <th>BBI</th>
              <th>BBM</th>
              <th>ECON</th>
              <th>AVG</th>
              <th>SR</th>
              <th>2W</th>
              <th>5W</th>
              <th>10W</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T20</td>
              <td>28</td>
              <td>28</td>
              <td>-</td>
              <td>-</td>
              <td>329</td>
              <td>0</td>
              <td>0</td>
              <td>30</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>88</td>
              <td>28</td>
              <td>28</td>
              <td>-</td>
              <td>-</td>
              <td>329</td>
              <td>0</td>
              <td>0</td>
              <td>30</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Statistics;
