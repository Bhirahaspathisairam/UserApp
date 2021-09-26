import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function Header({ props }) {
  let history = useHistory();

  function logout() {
    history.push("/");
    setLogoutStatus();
  }
  const authContext = useContext(AuthContext);
  const { isLoggedIn, setLogoutStatus } = authContext;

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WEBAPP
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign up
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <Link onClick={logout} to="/">
                  Logout
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);
