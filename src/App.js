import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import NotFound from './components/common/NotFound';
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import SourcePage from "./components/sources/SourcePage";
import ShowPage from './components/shows/ShowPage';


function App() {




  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/sources/:sourceId">
          <SourcePage />
        </Route>
        <Route path="/shows/:showId">
          <ShowPage />
        </Route>
        <Route><NotFound /></Route>
      </Switch>
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
