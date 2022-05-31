import React from "react";
import { NavLink }  from "react-router-dom"
function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link">
              Anasayfa
            </NavLink>
            <a className="nav-link" href="#">
              Features
            </a>
            
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Header) ;
