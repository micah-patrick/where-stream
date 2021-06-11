import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import NotFound from "../common/NotFound";
import { readSource } from "../../utils/api";


export default function SourcePage(){

    const [display, setDisplay] = useState(<NotFound />)
    const {sourceId} = useParams();

    const [source, setSource] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setError(null);
      const abortController = new AbortController();
      readSource(sourceId, abortController.signal).then(setSource).catch(setError);
      return () => abortController.abort();
    }, [sourceId]);

    
    useState(() =>{
        if (source){
            console.log(source);
            setDisplay(
                <>
                <div className="container">       
                    <a className="row" href={source.source_url}>
                        <div className="col m-1 p-0" style={{minWidth: "70px", maxWidth: "70px"}}>
                        <img style={{borderRadius: "50%", border: "5px solid #F6AEF6"}} src={source.source_img_url} className="card-img-top" alt={source.source_name} />
                        </div>
                        <h2 className="col pt-3" >
                            {source.source_name}
                        </h2>
                    </a>
                    <p> {error}</p>
                    <p>{source.source_url}</p>
                    <p>{source.source_id}</p>
                </div>
                <div className="container-fluid bg-dark text-white min-vh-100 d-inline-block">
                    <div className="container p-3">
                        <h2>
                            Shows on {source.name}
                            <Link to="/" className="ml-3 btn btn-success" title='add source' >
                                Add
                            </ Link>
                        </h2>
                    </div>
                </div>
                </>

            )
        }
    },[setSource])


    return (
        display
    )
}