import "./App.css";
import Card from "./components/Card";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhysicsPortal from "./Pages/PhysicsPortal/PhysicsPortal";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/PhysicsPortal" component={PhysicsPortal} />
      </Switch>
    </Router>
  );
}

export default App;
