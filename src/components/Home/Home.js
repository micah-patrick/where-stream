import React from 'react';
import { Link } from "react-router-dom";

export default function Home({listSources, listShows}){
    return (
        <>
        <div className="row m-3 justify-content-center" >
            {listSources}
            <div className="col p-1" style={{minWidth: "80px", maxWidth: "100px"}}>
                <Link title='add source' >
                    <button type="button" class="btn btn-success">Add</button>
                </ Link>
            </div>
        </div>
        <div className="row m-3" >{listShows}</div>
        </>
    )
}