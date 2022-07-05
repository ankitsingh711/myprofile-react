import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'
import './header.css';

class Header extends Component{

    render(){
        return(
            <Fragment>
            {/* <!--Navbar--> */}
                <nav id="nab" className="navbar navbar-expand-lg navbar-dark">

                {/* <!-- Navbar brand --> */}
                <Link to="/" className="navbar-brand text-dark"><i className="fa-solid fa-display-code"></i>Ankit Singh</Link>

                {/* <!-- Collapse button --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Collapsible content --> */}
                <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">

                    {/* <!-- Links --> */}
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link text-dark"><span>Home</span>
                        <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link text-dark" >Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link text-dark"><span>Projects</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-dark"><span>Get in Touch</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-dark"><span>About</span></Link>
                    </li>

                    </ul>
                    {/* <!-- Links --> */}
                    {/* <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" alt="youtube icon" width="50px"/> */}
                    <i className="fa-brands fa-youtube"></i>
                    <li className="nav-item">
                        <a target="_blank" href="https://www.youtube.com/itsankitsingh" className="nav-link text-dark">My Youtube Channel</a>
                    </li>
                </div>
                {/* <!-- Collapsible content --> */}

                </nav><br/><br/><br/>
                {/* <!--/.Navbar--> */}
            </Fragment>
        )
    }
}

export default Header;