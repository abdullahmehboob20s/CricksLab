import { createSlice } from "@reduxjs/toolkit";
import club_img_1 from "assets/images/club-img-1.png";
import batting_logo from "assets/images/batting-logo.png";
import player1 from "assets/images/player-1.png";
import player2 from "assets/images/player-2.png";
import player3 from "assets/images/player-3.png";
import player4 from "assets/images/player-4.png";
import country_logo from "assets/images/country-logo.png";

const initialState = {
  data: [
    {
      name: "Kieron Pollard",
      country: "All Rounder",
      countryLogo: country_logo,
      logo: player1,
      playerHistoryTitle: ["Mat", "100S", "50S", "6S", "4S"],
      playerHistory: [39, 2, 4, 49, 41],
      score: 164,
      scoreTitle: "Max Runs",
    },
    {
      name: "Shane Watson",
      country: "All Rounder",
      countryLogo: country_logo,
      logo: player2,
      playerHistoryTitle: ["Mat", "100S", "50S", "6S", "4S"],
      playerHistory: [39, 2, 4, 49, 41],
      score: 164,
      scoreTitle: "Max Runs",
    },
    {
      name: "AB De Villirs",
      country: "Batsman | Right Handed",
      countryLogo: country_logo,
      logo: player3,
      playerHistoryTitle: ["Mat", "100S", "50S", "6S", "4S"],
      playerHistory: [39, 2, 4, 49, 41],
      score: 164,
      scoreTitle: "Max Runs",
    },
    {
      name: "Andre Russell",
      country: "All Rounder",
      countryLogo: country_logo,
      logo: player4,
      playerHistoryTitle: ["Mat", "100S", "50S", "6S", "4S"],
      playerHistory: [39, 2, 4, 49, 41],
      score: 164,
      scoreTitle: "Max Runs",
    },
    {
      name: "Kieron Pollard",
      country: "All Rounder",
      countryLogo: country_logo,
      logo: player1,
      playerHistoryTitle: ["Mat", "100S", "50S", "6S", "4S"],
      playerHistory: [39, 2, 4, 49, 41],
      score: 164,
      scoreTitle: "Max Runs",
    },
  ],
};

export const battingLeaders = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default battingLeaders.reducer;
