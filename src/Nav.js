import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="header">
            <h1 className="title">Lil' Playlist</h1>
            <nav>
                <ul>
                    <li className="nav-link">
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav