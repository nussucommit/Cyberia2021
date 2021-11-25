import { Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Competition from "./pages/Competition";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Schedule">
          <Schedule />
        </Route>
        <Route path="/Competition">
          <Competition />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
