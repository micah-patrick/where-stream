import React from 'react';
import { Link } from "react-router-dom";

export default function SourceCard({source}){
    return (
        <div className="col m-2 p-0" style={{minWidth: "110px", maxWidth: "110px"}}>
            <Link to={`/sources/${source.id}`} title={source.name} >
                <img style={{borderRadius: "50%"}} src={`https://plchldr.co/i/100?text=${source.name}&bg=${source.color}`} className="card-img-top" alt={source.name} />
            </ Link>
        </div>
    )
}