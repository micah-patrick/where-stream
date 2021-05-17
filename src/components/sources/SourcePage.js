import React from 'react';
import { Link } from "react-router-dom";

export default function SourcePage({source}){
    return (
        <div className="col p-1" style={{minWidth: "80px", maxWidth: "100px"}}>
            <Link title={source.name} >
                <img style={{borderRadius: "50%"}} src={`https://plchldr.co/i/100?text=${source.name}&bg=${source.color}`} className="card-img-top" alt="..." />
            </ Link>
        </div>
    )
}