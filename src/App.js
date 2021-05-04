import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import NotFound from './components/common/NotFound';
import { useEffect, useState } from 'react';
import ShowCard from './components/shows/ShowCard';
import SourceCard from './components/sources/SourceCard';

function App() {

  // placeholder content
const sources = [
  {
    id: 0,
    name: 'Netflix',
    url: "http://netflix.com"
  },
  {
    id: 1,
    name: 'Hulu',
    url: "http://hulu.com"
  },
  {
    id: 2,
    name: 'Disney Plus',
    url: "http://disneyplus.com"
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
console.log(listSources);
  return (
    <div className="">
      <Header />
      {listSources}
      {listShows}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
