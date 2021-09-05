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
      playerHistory: {
        matches: 7,
        won: 6,
        lost: 1,
        noResult: 0,
        points: 12,
      },
    },
    {
      name: "Javi Martinez",
      color: "#CBE9C4",
      image: bowlers_card_img_2,
      playerHistory: {
        matches: 6,
        won: 3,
        lost: 3,
        noResult: 0,
        points: 6,
      },
    },
    {
      name: "Shinji Kagawa",
      image: bowlers_card_img_3,
      color: "#F8DFE2",
      playerHistory: {
        matches: 5,
        won: 2,
        lost: 3,
        noResult: 0,
        points: 4,
      },
    },
    {
      name: "John Terry",
      image: bowlers_card_img_4,
      color: "#F9F9F9",
      playerHistory: {
        matches: 5,
        won: 2,
        lost: 3,
        noResult: 0,
        points: 4,
      },
    },
  ],
};

export const standings = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default standings.reducer;
