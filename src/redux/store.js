import { configureStore } from "@reduxjs/toolkit";
import relatedMatchesData from "./relatedMatchesData";
import standings from "./standings";
import leagues from "./leagues";
import footerLinks from "./footerLinks";
import playerDetails from "./playerDetails";
import teamsData from "./teamsData";

export const store = configureStore({
  reducer: {
    relatedMatchesData,
    standings,
    leagues,
    footerLinks,
    playerDetails,
    teamsData,
  },
});
