import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-5`}>
        <button className="navbar-toggler" type="button" da ta-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link className="navbar-brand" to="/">{props.title}</Link>
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Cratonik"
}