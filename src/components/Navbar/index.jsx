import React from 'react';
import { Link } from 'react-router-dom';
import '../../main.css';


const Navbar = () => {

    return(
    <nav className="navbar">
        <Link to="/Home" className="nav-element">Home</Link>
        <Link to="/About" className="nav-element">About</Link>
        <Link to='/Works' className="nav-element">Works</Link>
    </nav>
    )
};
export default Navbar;