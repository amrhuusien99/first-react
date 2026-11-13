import React from "react";
import './Navbar.css';

const Navbar = (propes) => {
    return(
        <h1 className="navbarline">this is navbar component <span className="hieara">{propes.hi}</span></h1>
    );
}

export default Navbar;