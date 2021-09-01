import "./App.css";
import Signin from "./pages/Signin";
import { Route, Switch } from "react-router";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  );
}

export default App;
