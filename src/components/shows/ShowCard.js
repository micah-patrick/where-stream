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
            <div className="card-body row">
                <img className="col px-1" style={{borderRadius: "50%", maxWidth: "25%"}} src={`https://plchldr.co/i/100?text=Netflix&bg=E50914`} />
                <img className="col px-1" style={{borderRadius: "50%", maxWidth: "25%"}} src={`https://plchldr.co/i/100?text=Amazon&bg=232F3E`} />
                <img className="col px-1" style={{borderRadius: "50%", maxWidth: "25%"}} src={`https://plchldr.co/i/100?text=Hulu&bg=1CE783`} />
                {
                    (show.id === 2) && (
                        <img className="col px-1" style={{borderRadius: "50%", maxWidth: "25%"}} src={`https://plchldr.co/i/100?text=Amazon&bg=232F3E`} />
                    )
                }
            </div>
            </div>
        </div>
        </>
    )
}

