import { createSlice } from "@reduxjs/toolkit";
import teamsCardImg1 from "assets/images/teams-card-img-1.png";
import teamsCardImg2 from "assets/images/teams-card-img-2.png";
import teamsCardImg3 from "assets/images/teams-card-img-3.png";
import teamsCardImg4 from "assets/images/teams-card-img-4.png";
import teamsCardImg5 from "assets/images/teams-card-img-5.png";
import teamsCardImg6 from "assets/images/teams-card-img-6.png";
import teamsCardImg7 from "assets/images/teams-card-img-7.png";
import teamsCardImg8 from "assets/images/teams-card-img-8.png";

const initialState = {
  teamsData: [
    {
      name: "Scorpion Kuwait",
      country: "Pakistan",
      logo: teamsCardImg1,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Channels Media",
      country: "Pakistan",
      logo: teamsCardImg2,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Desert Stallions",
      country: "Pakistan",
      logo: teamsCardImg3,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Young Srilankan Sports",
      country: "Pakistan",
      logo: teamsCardImg4,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Pakhtoon Heroes",
      country: "Pakistan",
      logo: teamsCardImg5,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Champions",
      country: "Pakistan",
      logo: teamsCardImg6,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "A-Waris",
      country: "Pakistan",
      logo: teamsCardImg7,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Badshah ",
      country: "Pakistan",
      logo: teamsCardImg8,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Scorpion Kuwait",
      country: "Pakistan",
      logo: teamsCardImg1,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Channels Media",
      country: "Pakistan",
      logo: teamsCardImg2,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Desert Stallions",
      country: "Pakistan",
      logo: teamsCardImg3,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Young Srilankan Sports",
      country: "Pakistan",
      logo: teamsCardImg4,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Pakhtoon Heroes",
      country: "Pakistan",
      logo: teamsCardImg5,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Champions",
      country: "Pakistan",
      logo: teamsCardImg6,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "A-Waris",
      country: "Pakistan",
      logo: teamsCardImg7,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Badshah ",
      country: "Pakistan",
      logo: teamsCardImg8,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Scorpion Kuwait",
      country: "Pakistan",
      logo: teamsCardImg1,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Channels Media",
      country: "Pakistan",
      logo: teamsCardImg2,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Desert Stallions",
      country: "Pakistan",
      logo: teamsCardImg3,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Young Srilankan Sports",
      country: "Pakistan",
      logo: teamsCardImg4,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Pakhtoon Heroes",
      country: "Pakistan",
      logo: teamsCardImg5,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Champions",
      country: "Pakistan",
      logo: teamsCardImg6,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "A-Waris",
      country: "Pakistan",
      logo: teamsCardImg7,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Badshah ",
      country: "Pakistan",
      logo: teamsCardImg8,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Scorpion Kuwait",
      country: "Pakistan",
      logo: teamsCardImg1,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Channels Media",
      country: "Pakistan",
      logo: teamsCardImg2,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Desert Stallions",
      country: "Pakistan",
      logo: teamsCardImg3,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Young Srilankan Sports",
      country: "Pakistan",
      logo: teamsCardImg4,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Pakhtoon Heroes",
      country: "Pakistan",
      logo: teamsCardImg5,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Champions",
      country: "Pakistan",
      logo: teamsCardImg6,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "A-Waris",
      country: "Pakistan",
      logo: teamsCardImg7,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Dukki Badshah ",
      country: "Pakistan",
      logo: teamsCardImg8,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
  ],
};

export const teamsData = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default teamsData.reducer;
