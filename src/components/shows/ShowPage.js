import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import NotFound from "../common/NotFound";

export default function ShowPage({shows}){

    const [display, setDisplay] = useState(<NotFound />)
    const {showId} = useParams();
    const show = shows.find((show) => show.id === Number(showId));
    // const show = shows[0];
    console.log(showId);

    useState(() =>{
        if (show){
            setDisplay(
                <>
                <div className="container-fluid bg-dark text-white py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col m-1 p-0" style={{minWidth: "70px", maxWidth: "70px"}}>
                                <img src={`https://plchldr.co/i/100?text=${show.name}&bg=${show.color}`} className="card-img-top" alt={show.name} />
                            </div>
                            <h2 className="col pt-3" >{show.name}</h2>
                        </div>
                        <p>{show.sourceIds.join(", ")}</p>
                        <p>{show.color}</p>
                        <p>{show.id}</p>
                        <p>{show.genre}</p>
                        <h4>Description</h4>
                        <p>{show.description}</p>
                    </div>
                </div>
                <div className="container-fluid py-3">
                    <div className="container">
                        <h3>Available on...</h3>
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