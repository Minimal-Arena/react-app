import React from "react";

const Nav = props => {
    return (
        <nav>
            <p className="logo">MINIMAL ARENA</p>
            <div className="links">
                <a href="/dashboard">Home</a>
                <a href="/about">About</a>
                <a href="/">Login</a>
                <a href="/signup">Signup</a>
            </div>
        </nav>
    )
}

export default Nav;