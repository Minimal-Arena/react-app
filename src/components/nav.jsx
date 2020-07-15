import React from "react";
import {redirect} from '../utils/helperFunctions'
const Nav = props => {
    const authed = window.localStorage.getItem('token')

    

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user_id')
        window.localStorage.removeItem('username')
        redirect('/')
    }
    return (
        <nav>
            <p className="logo">MINIMAL ARENA</p>
            <div className="links">
                <a href="/dashboard">Home</a>
                <a href="/about">About</a>
                <a href="/">Login</a>
                <a href="/signup">Signup</a>
{authed ? <a href='#' onClick={handleLogout}>Log Out</a> : null}
            </div>
        </nav>
    )
}

export default Nav;