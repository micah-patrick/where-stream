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
                    <div className="p-0" style={{}}>
                        <img style={{}} src={`https://plchldr.co/i/500x50?text=${source.name}&bg=${source.color}`} className="card-img-top" />
                    </div>
                    <h2>{source.name}</h2>
                    <p>{source.url}</p>
                    <p>{source.color}</p>
                    <p>{source.id}</p>
                </>
            )
        }
    },[])


    return (
        display
    )
}