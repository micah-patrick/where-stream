import React from 'react';
import { Link, useParams } from "react-router-dom";

export default function SourcePage({sources}){

    const {sourceId} = useParams();
    const source = sources.find((source) => source.id === Number(sourceId));
    // const source = sources[0];
    console.log(sourceId);

    return (
        <div className="p-0" style={{}}>
                <img style={{}} src={`https://plchldr.co/i/1000x100?text=${source.name}&bg=${source.color}`} className="card-img-top" />
        </div>
    )
}