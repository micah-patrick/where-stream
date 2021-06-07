import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import NotFound from './components/common/NotFound';
import { useEffect, useState } from 'react';
import ShowCard from './components/shows/ShowCard';
import SourceCard from './components/sources/SourceCard';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import SourcePage from "./components/sources/SourcePage";
import ShowPage from './components/shows/ShowPage';
import { listSources, listShows } from "./utils/api";

function App() {

  const [sources, setSources] = useState([]);
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    listSources(abortController.signal).then(setSources).catch(setError);
    return () => abortController.abort();
  }, []);
  
  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    listShows(abortController.signal).then(setShows).catch(setError);
    return () => abortController.abort();
  }, []);


  // placeholder content
// const sources = [
//   {
//     id: 1,
//     name: 'Netflix',
//     url: "http://netflix.com",
//     color: 'E50914'
//   },
//   {
//     id: 2,
//     name: 'Hulu',
//     url: "http://hulu.com",
//     color: '1CE783'
//   },
//   {
//     id: 3,
//     name: 'Amazon Prime',
//     url: "http://hulu.com",
//     color: '232F3E'
//   },
//   {
//     id: 4,
//     name: 'HBO Max',
//     url: "http://hulu.com",
//     color: 'B535F6'
//   },
//   {
//     id: 5,
//     name: 'Disney Plus',
//     url: "http://disneyplus.com",
//     color: '19C9D4'
//   }
// ]
// const shows = [
//   {
//     id: 0,
//     name: 'Survivor',
//     showType: "tv",
//     genre: "gameshow",
//     sourceIds: [0, 1, 2],
//     color: '19C9D4',
//     description: "this is a description of the show"
//   },
//   {
//     id: 1,
//     name: 'Happy Gilmore',
//     showType: "movie",
//     genre: "comedy",
//     sourceIds: [0, 2],
//     color: '19C9D4',
//     description: "this is a description of the show"
//   },
//   {
//     id: 2,
//     name: 'Community',
//     showType: "tv",
//     genre: "comedy",
//     sourceIds: [1],
//     color: '19C9D4',
//     description: "this is a description of the show"
//   }
// ]

const [sourcesList, setSourcesList] = useState([]);
const [showsList, setShowsList] = useState([]);

useEffect(() => {
  setSourcesList(
    sources.map((source) => {
      return (
      <SourceCard key={source.source_id} source={source} />
      )
    })
  )
  setShowsList(
    shows.map((show) => {
      return (
      <ShowCard key={show.show_id} show={show} />
      )
    })
  )
},[shows])

console.log(sourcesList);

  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home placeholder={{sources, shows}} sourcesList={sourcesList} showsList={showsList} />
        </Route>
        <Route path="/sources/:sourceId">
          <SourcePage sources={sources} />
        </Route>
        <Route path="/shows/:showId">
          <ShowPage shows={shows} />
        </Route>
        <Route><NotFound /></Route>
      </Switch>
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
