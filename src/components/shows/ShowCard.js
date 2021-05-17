import React from 'react';
import { Link } from "react-router-dom";

export default function ShowCard({show}){
    return (
        <div className="col p-1" style={{minWidth: "80px", maxWidth: "100px"}}>
            <Link title={show.name} >
                <img src={`https://plchldr.co/i/100?text=${show.name}`} className="card-img-top" alt="..." />
            </ Link>
        </div>
    )
}