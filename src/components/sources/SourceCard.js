import React from 'react';

export default function SourceCard({source}){
    return (
        <div className="card" style={{width: "18rem;"}}>
        <img src="https://plchldr.co/i/500x250" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    )
}