import React from 'react';
import { Link } from "react-router-dom";

export default function ShowCard({show}){
    return (
        <div className="col m-2 p-0" style={{minWidth: "110px", maxWidth: "110px"}}>
            <Link title={show.name} >
                <img src={`https://plchldr.co/i/110?text=${show.name}`} className="card-img-top" alt="..." />
            </ Link>
        </div>
    )
}