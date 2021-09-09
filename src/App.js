import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match-details" component={MatchDetails} />
          <Route exact path="/competitions" component={Competitions} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/club-details" component={ClubDetails} />
          <Route exact path="/player-details" component={PlayerDetails} />
          <Route exact path="/officials" component={Officials} />
          <Route exact path="/team-details" component={TeamDetails} />
          <Route exact path="/advance-search" component={AdvanceSearch} />
          <Route
            exact
            path="/competition-overview"
            component={CompetitionOverview}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
