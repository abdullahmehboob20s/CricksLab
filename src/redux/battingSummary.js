import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
    {
      name: "Roger Torff",
      content: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "12.00", "2", "2"],
    },
  ],
};

export const battingSummary = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default battingSummary.reducer;
