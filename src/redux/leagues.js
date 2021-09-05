import { createSlice } from "@reduxjs/toolkit";
import competition_card_img_1 from "assets/images/competition-card-img-1.png";
import competition_card_img_2 from "assets/images/competition-card-img-2.png";
import competition_card_img_3 from "assets/images/competition-card-img-3.png";
import competition_card_img_4 from "assets/images/competition-card-img-4.png";

const initialState = {
  data: [
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },

    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
  ],
};

export const leagues = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default leagues.reducer;
