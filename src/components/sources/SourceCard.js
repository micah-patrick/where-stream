import React from 'react';
import { Link } from "react-router-dom";

export default function SourceCard({source}){
    return (
        <div className="col m-0 p-2" style={{minWidth: "25%", maxWidth: "25%"}}>
            <Link to={`/sources/${source.id}`} title={source.name} >
                <img style={{borderRadius: "50%"}} src={`https://plchldr.co/i/100?text=${source.name}&bg=${source.color}`} className="card-img-top" alt={source.name} />
            </ Link>
        </div>
    )
}