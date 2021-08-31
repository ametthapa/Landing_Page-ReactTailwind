import "./App.css";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import { Route, Switch } from "react-router";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </switch>
    </>
  );
}

export default App;
