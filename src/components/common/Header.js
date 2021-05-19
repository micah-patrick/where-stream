import { Link, useParams } from "react-router-dom";

export default function Header() {

    const headerLinkStyles = {
        textDecoration: "none",
        color: "#fff"
    }

    return(
        <header className="App-header">
            <Link to="/" style={headerLinkStyles}>
                <h1>
                Where Stream
                </h1>
            </Link>
        </header>
    )
}