import React from 'react';
import { Link } from "react-router-dom";

export default function Home({listSources, listShows}){
    return (
        <>
        <div className="row m-3" >
            {listSources}
            <div className="col p-1" style={{minWidth: "80px", maxWidth: "100px"}}>
                <Link title='add source' >
                    <img style={{borderRadius: "50%"}} src={`https://plchldr.co/i/100?text=%01&bg=ddd`} className="card-img-top" alt='add source' />
                </ Link>
            </div>
        </div>
        <div className="row m-3" >{listShows}</div>
        </>
    )
}