import { configureStore } from "@reduxjs/toolkit";
import relatedMatchesData from "./relatedMatchesData";
import standings from "./standings";
import leagues from "./leagues";
import footerLinks from "./footerLinks";
import playerDetails from "./playerDetails";
import teamsData from "./teamsData";
import clubDetails from "./clubDetails";
import PlayersDetails from "./PlayersDetails";
import Officials from "./officials";
import competitionOverview from "./competitionOverview";
import battingLeaders from "./battingLeaders";
import maxBoundaries from "./maxBoundaries";
import battingSummary from "./battingSummary";

export const store = configureStore({
  reducer: {
    relatedMatchesData,
    standings,
    leagues,
    footerLinks,
    playerDetails,
    teamsData,
    clubDetails,
    PlayersDetails,
    Officials,
    competitionOverview,
    battingLeaders,
    maxBoundaries,
    battingSummary,
  },
});
