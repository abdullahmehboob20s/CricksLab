import { createSlice } from "@reduxjs/toolkit";
import table_img from "assets/images/table-img.png";
import table_player_2 from "assets/images/table-player-2.png";

const initialState = {
  groupB: [
    {
      img: table_img,
      name: "Rawalakot Hawks",
      content: [5, 3, 1, 54, 1, 10, 23],
    },
    {
      img: table_img,
      name: "Abrahm Khan",
      content: [5, 3, 1, 34, 1, 7, 215],
    },
    {
      img: table_img,
      name: "Rawalakot Hawks",
      content: [5, 3, 1, 54, 1, 7, "00.215"],
    },
    {
      img: table_img,
      name: "Abrahm Khan",
      content: [5, 3, 1, 34, 1, 7, "00.215"],
    },
    {
      img: table_img,
      name: "Rawalakot Hawks",
      content: [5, 3, 1, 54, 1, 7, "00.215"],
    },
  ],
  mvp: [
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
    {
      img: table_player_2,
      name: "Roger Torff",
      subtitle: "Dogar Rider",
      content: [30.39, 173.0, 4.32, 207.71, 1],
    },
  ],
};

export const competitionOverview = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default competitionOverview.reducer;
