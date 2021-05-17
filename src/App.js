import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import NotFound from './components/common/NotFound';
import { useEffect, useState } from 'react';
import ShowCard from './components/shows/ShowCard';
import SourceCard from './components/sources/SourceCard';
import { Link } from "react-router-dom";

function App() {

  // placeholder content
const sources = [
  {
    id: 0,
    name: 'Netflix',
    url: "http://netflix.com",
    color: 'E50914'
  },
  {
    id: 1,
    name: 'Hulu',
    url: "http://hulu.com",
    color: '1CE783'
  },
  {
    id: 2,
    name: 'Amazon Prime',
    url: "http://hulu.com",
    color: '232F3E'
  },
  {
    id: 3,
    name: 'HBO Max',
    url: "http://hulu.com",
    color: 'B535F6'
  },
  {
    id: 4,
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
console.log(listSources);
  return (
    <div className="">
      <Header />
      <div className="row m-3" >
        {listSources}
          <div className="col p-1" style={{minWidth: "80px", maxWidth: "100px"}}>
            <Link title='add source' >
                <img style={{borderRadius: "50%"}} src={`https://plchldr.co/i/100?text=%01&bg=ddd`} className="card-img-top" alt="..." />
            </ Link>
        </div>
      </div>
      <div className="row m-3" >{listShows}</div>
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
