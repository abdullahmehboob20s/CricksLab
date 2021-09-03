import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import MatchDetails from "pages/MatchDetails/MatchDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match-details" component={MatchDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
