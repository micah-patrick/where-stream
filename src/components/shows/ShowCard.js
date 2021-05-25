import React from 'react';
import { Link } from "react-router-dom";

export default function ShowCard({show}){
    return (
        <>
        <div className="col showCard">
            <div className="card ">
                <Link to={`/shows/${show.id}`} title={show.name} >
                    <img src={`https://plchldr.co/i/110?text=${show.name}`} className="card-img-top" alt="..." />
                </ Link>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
            </div>
        </div>
        </>
    )
}

