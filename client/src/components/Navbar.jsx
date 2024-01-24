import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <Link to="/">
                <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="links">
                <Link className="link" to="/?cat=CP">
                    <h4>CP</h4>
                </Link>
                <Link className="link" to="/?cat=ML">
                    <h4>ML</h4>
                </Link>
                <Link className="link" to="/?cat=Development">
                    <h4>Development</h4>
                </Link>
                <Link className="link" to="/?cat=CyberSecurity">
                    <h4>CyberSecurity</h4>
                </Link>
                <Link className="link" to="/?cat=Research">
                    <h4>Research</h4>
                </Link>
                <Link className="link" to="/?cat=Alumni">
                    <h4>Alumni</h4>
                </Link>
                <span className={currentUser?"currentuser":""}>{currentUser?.username}</span>
                {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
                <span className="write">
                    <Link className="link" to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar