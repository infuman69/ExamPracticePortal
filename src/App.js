import "./App.css";
import Card from "./components/Card";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhysicsPortal from "./Pages/PhysicsPortal/PhysicsPortal";
import GlobalState, { QuestionContext } from "./Context/QuestionContext";

function App() {
  return (
    <Router>
      <GlobalState>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/PhysicsPortal" component={PhysicsPortal} />
          <Route exact={true} path="/MathPortal" component={PhysicsPortal} />
        </Switch>
      </GlobalState>
    </Router>
  );
}

export default App;
