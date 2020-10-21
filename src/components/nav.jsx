import React from "react";
import { redirect } from "../utils/helperFunctions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const authed = window.localStorage.getItem("token");
  const characterLen = useSelector((state) => state.generalReducer.characters).length;
  
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
        {authed && characterLen ? (
          <Link
            to="/game"
            style={{
              backgroundColor: "green",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            Fight
          </Link>
        ) : null}
        <Link to="/dashboard">Home</Link>
        <Link to="/about">About</Link>
        {authed ? null : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {authed ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
