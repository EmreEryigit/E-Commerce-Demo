import React, {useContext} from "react";
import { NavLink }  from "react-router-dom"
import AuthContext from "../store/auth-context";

function Header() {
  const authCtx = useContext(AuthContext)
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
            {authCtx.isLoggedIn && <NavLink  to="/new" className="nav-link" href="#">
              New
            </NavLink>}
            
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
            
            
            
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Header) ;
