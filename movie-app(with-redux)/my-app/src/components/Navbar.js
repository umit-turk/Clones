import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-5">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link className="nav-link fs-1 text-dark" aria-current="page" to="/">
                        GrapMovie</Link>
                    </div>
                        <ul className="navbar-nav">
                            <li className="nav-item me-4 ">
                                <i className="fab fa-imdb fa-5x" id="imdb-logo"></i>
                            </li>
                            <li className="nav-item me-4 ">
                                <i className="fab fa-react fa-5x" id="react-logo"></i>
                            </li>
                        </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

