import "./App.css";
import Home from "pages/Home/Home";
import MatchDetails from "pages/MatchDetails/MatchDetails";
import Competitions from "pages/Competitions/CompetitionsPage";
import Teams from "pages/Teams/Teams";
import ClubDetails from "pages/ClubDetails/ClubDetails";
import PlayerDetails from "pages/PlayerDetails/PlayerDetails";
import Officials from "pages/Officials/Officials";
import CompetitionOverview from "pages/CompetitionOverview/CompetitionOverview";
import TeamDetails from "pages/TeamDetails/TeamDetails";
import AdvanceSearch from "pages/AdvanceSearch/AdvanceSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import CompetitionOverviewDetails from "pages/CompetitionOverviewDetails/CompetitionOverviewDetails";
import PlayerDetails2 from "pages/PlayerDetails2/PlayerDetails2";
import MatchListing from "pages/MatchListing/MatchListing";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match-details" component={MatchDetails} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/club-details" component={ClubDetails} />
          <Route exact path="/player-details" component={PlayerDetails} />
          <Route exact path="/officials" component={Officials} />
          <Route exact path="/team-details" component={TeamDetails} />
          <Route exact path="/advance-search" component={AdvanceSearch} />
          <Route exact path="/competitions" component={Competitions} />
          <Route exact path="/player-details-2" component={PlayerDetails2} />
          <Route
            exact
            path="/competition-overview-details"
            component={CompetitionOverviewDetails}
          />
          <Route
            exact
            path="/competition-overview"
            component={CompetitionOverview}
          />
          <Route exact path="/match-listing" component={MatchListing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
