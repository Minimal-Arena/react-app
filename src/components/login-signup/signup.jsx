import React from "react";

const Signup = props => {
    return (
        <form>
            <input
                type="text"
                name="username"
            />
            <input
                type="text"
                name="email"
            />
            <input
                type="text"
                name="password"
            />
        </form>
    )
}

export default Signup;