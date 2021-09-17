import { createSlice } from "@reduxjs/toolkit";
import Scorecard from "layouts/MatchDetails/Scorecard/Scorecard";
import BallByBall from "layouts/MatchDetails/BallByBall/BallByBall";
import Squad from "layouts/MatchDetails/Squad/Squad";
import TopPerformance from "layouts/MatchDetails/TopPerformance/TopPerformance";
import Information from "layouts/MatchDetails/Information/Information";
import Stats from "layouts/MatchDetails/Stats/Stats";

const initialState = {
  matchDetailsTabs: [
    {
      label: "Scorecard",
      tabIndex: 1,
      screen: <Scorecard />,
    },
    {
      label: "Ball by Ball",
      tabIndex: 2,
      screen: <BallByBall />,
    },
    {
      label: "Squad",
      tabIndex: 3,
      screen: <Squad />,
    },
    {
      label: "Highlights",
      tabIndex: 4,
      screen: "",
    },
    {
      label: "Stats",
      tabIndex: 5,
      screen: <Stats />,
    },
    {
      label: "Top Performers",
      tabIndex: 6,
      screen: <TopPerformance />,
    },
    {
      label: "Information",
      tabIndex: 7,
      screen: <Information />,
    },
  ],
};

export const tabs = createSlice({
  name: "tabs",
  initialState,
});

export default tabs.reducer;
