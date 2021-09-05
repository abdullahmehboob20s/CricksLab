import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import MatchDetails from "pages/MatchDetails/MatchDetails";
import Competitions from "pages/Competitions/CompetitionsPage";
import Teams from "pages/Teams/Teams";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match-details" component={MatchDetails} />
          <Route exact path="/competitions" component={Competitions} />
          <Route exact path="/teams" component={Teams} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
