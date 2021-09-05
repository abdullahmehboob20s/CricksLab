import { createSlice } from "@reduxjs/toolkit";
import videoImg_1 from "assets/images/video-image-1.png";
import videoImg_2 from "assets/images/video-image-2.png";
import videoImg_3 from "assets/images/video-image-3.png";
import videoImg_4 from "assets/images/video-image-4.png";

const initialState = {
  data: [
    { videoThumbNail: videoImg_1 },
    { videoThumbNail: videoImg_2 },
    { videoThumbNail: videoImg_3 },
    { videoThumbNail: videoImg_1 },
    { videoThumbNail: videoImg_4 },
  ],
};

export const relatedMatchesData = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default relatedMatchesData.reducer;
