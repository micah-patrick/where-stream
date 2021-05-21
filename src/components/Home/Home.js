import React from 'react';
import { Link } from "react-router-dom";

export default function Home({listSources, listShows}){
    return (
        <>
        <div className="container p-3">
            <h2>
                Your Streaming Sources
                <Link className="ml-3 btn btn-success" title='add source' >
                    Add
                </ Link>
            </h2>
            <div className="row m-3" >
                {listSources}
            </div>
        </div>
        <div className="container-fluid bg-dark text-white min-vh-100 d-inline-block">
            <div className="container p-3">
                <h2>
                    Your Shows
                    <Link className="ml-3 btn btn-success" title='add source' >
                        Add
                    </ Link>
                </h2>
                <div className="row m-3" >{listShows}</div>
            </div>
        </div>
        </>
    )
}