import { createSlice } from "@reduxjs/toolkit";
import bowlers_card_img_1 from "assets/images/bowlers-card-img-1.png";
import bowlers_card_img_2 from "assets/images/bowlers-card-img-2.png";
import bowlers_card_img_3 from "assets/images/bowlers-card-img-3.png";
import bowlers_card_img_4 from "assets/images/bowlers-card-img-4.png";

const initialState = {
  data: [
    {
      name: "Kwadwo Asamoah",
      color: "#BEE2EE",
      image: bowlers_card_img_1,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Javi Martinez",
      color: "#CBE9C4",
      image: bowlers_card_img_2,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "Shinji Kagawa",
      image: bowlers_card_img_3,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      color: "#F8DFE2",
      playerHistory: [7, 6, 1, 0, 12],
    },
    {
      name: "John Terry",
      image: bowlers_card_img_4,
      playerHistoryTitle: ["Mat", "Won", "Lost", "NR", "PTS"],
      color: "#F9F9F9",
      playerHistory: [7, 6, 1, 0, 12],
    },
  ],
};

export const standings = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default standings.reducer;
