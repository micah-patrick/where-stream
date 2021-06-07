import React from 'react';
import { Link } from "react-router-dom";

export default function SourceCard({source}){
    return (
        <div className="sourceCard col m-0 p-2 ">
            <Link to={`/sources/${source.source_id}`} title={source.source_name} >
                <img style={{borderRadius: "50%", border: "5px solid #F6AEF6"}} src={source.source_img_url} className="card-img-top" alt={source.source_name} />
            </ Link>
        </div>
    )
}