import React from 'react';
import { Link } from "react-router-dom";
import { listSources, listShows } from "../../utils/api";
import { useEffect, useState } from 'react';
import ShowCard from '../shows/ShowCard';
import SourceCard from '../sources/SourceCard';

export default function Home(){

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



    return (
        <>
        <div className="container p-3 bg-white">
            <h2>
                Your Streaming Sources
                <Link className="ml-3 btn btn-success" title='add source' >
                    Add Source
                </ Link>
            </h2>
            <div className="row m-3" >
                {sourcesList}
            </div>
        </div>
        <div className="container-fluid bg-dark text-white">
            <div className="container p-3">
                <h2>
                    Your Shows
                    <Link className="ml-3 btn btn-success" title='add show' >
                        Add Show
                    </ Link>
                </h2>
                <div className="row m-3" >{showsList}</div>
            </div>
        </div>
        </>
    )
}