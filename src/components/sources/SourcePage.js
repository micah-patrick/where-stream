import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import NotFound from "../common/NotFound";

export default function SourcePage({sources}){

    const [display, setDisplay] = useState(<NotFound />)
    const {sourceId} = useParams();
    const source = sources.find((source) => source.id === Number(sourceId));
    // const source = sources[0];
    console.log(sourceId);

    useState(() =>{
        if (source){
            setDisplay(
                <>
                <div className="container">       
                    <a className="row" href={source.url} target="_blank">
                        <div className="col m-1 p-0" style={{minWidth: "70px", maxWidth: "70px"}}>
                            <img style={{borderRadius: "50%"}} src={`https://plchldr.co/i/100?text=${source.name}&bg=${source.color}`} className="card-img-top" alt={source.name} />
                        </div>
                        <h2 className="col pt-3" >
                            {source.name}
                        </h2>
                    </a>
                    <p>{source.url}</p>
                    <p>{source.color}</p>
                    <p>{source.id}</p>
                </div>
                <div className="container-fluid bg-dark text-white min-vh-100 d-inline-block">
                    <div className="container p-3">
                        <h2>
                            Shows on {source.name}
                            <Link className="ml-3 btn btn-success" title='add source' >
                                Add
                            </ Link>
                        </h2>
                    </div>
                </div>
                </>

            )
        }
    },[])


    return (
        display
    )
}