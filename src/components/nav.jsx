import React from "react";
import { redirect } from "../utils/helperFunctions";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const authed = window.localStorage.getItem("token");

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("username");
    redirect("/");
  };
  return (
    <nav>
      <p className="logo">MINIMAL ARENA</p>
      <div className="links">
        <Link to="/dashboard">Home</Link>
        <Link Linkto="/about">About</Link>
        {authed ? null : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {authed ? <Link to="/" onClick={handleLogout}>Log Out</Link> : null}
      </div>
    </nav>
  );
};

export default Nav;
