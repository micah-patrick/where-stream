import React from 'react';
import { Link } from "react-router-dom";

export default function ShowCard({show}){
    return (
        <>
        <div className="col showCard">
            <div className="card ">
                <Link to={`/shows/${show.show_id}`} title={show.show_name} >
                    <img src={show.show_img_url} className="card-img-top" alt="..." />
                </ Link>
                    {/* <span className="bi-star" style={{fontSize: '2rem', color: 'cornflowerblue', height: '10px'}}></span> */}
                    {/* <svg class="bi bi-star-fill" style={{color: "red"}}/> */}
                    {/* <span className="oi oi-plus text-dark" /> */}
                    <i className="where-star fas fa-star"></i>
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

