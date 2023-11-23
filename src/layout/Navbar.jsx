import React from "react";
import {Link, NavLink} from "react-router-dom";


const Navbar = () => {
  
    return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <Link className="navbar-brand bold" to='/'>
            m@nsUp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link " to="/Home">  Home
             </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
                  
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
              </li>
            </ul>
            <Link to="/NotFound"></Link>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
