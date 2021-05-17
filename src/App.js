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

function App() {

  // placeholder content
const sources = [
  {
    id: 1,
    name: 'Netflix',
    url: "http://netflix.com",
    color: 'E50914'
  },
  {
    id: 2,
    name: 'Hulu',
    url: "http://hulu.com",
    color: '1CE783'
  },
  {
    id: 3,
    name: 'Amazon Prime',
    url: "http://hulu.com",
    color: '232F3E'
  },
  {
    id: 4,
    name: 'HBO Max',
    url: "http://hulu.com",
    color: 'B535F6'
  },
  {
    id: 5,
    name: 'Disney Plus',
    url: "http://disneyplus.com",
    color: '19C9D4'
  }
]
const shows = [
  {
    id: 0,
    name: 'Show Title',
    showType: "tv",
    genre: "drama",
    sourceIds: [0, 1, 2]
  },
  {
    id: 1,
    name: 'Another Show Title',
    showType: "movie",
    genre: "comedy",
    sourceIds: [0, 2]
  },
  {
    id: 2,
    name: 'A Show',
    showType: "tv",
    genre: "comedy",
    sourceIds: [1]
  }
]

const [listSources, setListSources] = useState([]);
const [listShows, setListShows] = useState([]);

useEffect(() => {
  setListSources(
    sources.map((source, index) => {
      return (
      <SourceCard key={index} source={source} />
      )
    })
  )
  setListShows(
    shows.map((show, index) => {
      return (
      <ShowCard key={index} show={show} />
      )
    })
  )
},[])

  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home placeholder={{sources, shows}} listSources={listSources} listShows={listShows} />
        </Route>
        <Route path="/sources/:sourceId">
          <SourcePage sources={sources} />
        </Route>
      </Switch>
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
