import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions";

const initialSignUpValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Signup = (props) => {
  //Local state for handling form inputs
  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  //Dispatcher for reducer
  const dispatch = useDispatch();

  //handle functions
  const handleChanges = (e) => {
    setSignUpValues({ ...signUpValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdUser = {
      email: signUpValues.email,
      username: signUpValues.username,
      password: signUpValues.password,
    };

    dispatch(registerUser(createdUser));
    setSignUpValues(initialSignUpValues);
    setButtonDisabled(true)
  };

  //function for checking if password and confirm password are the same
  useEffect(() => {
    if (signUpValues.password === signUpValues.confirmPassword) {
      if (
        signUpValues.password.length !== 0 ||
        signUpValues.confirmPassword.length !== 0
      ) {
        setButtonDisabled(false);
      }
    } else setButtonDisabled(true);
  }, [signUpValues.password, signUpValues.confirmPassword]);

  return (
    <div className="signUpFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="innerSignUpFormDiv">
          <label>
            Enter email
            <input
              type="text"
              name="email"
              value={signUpValues.email}
              onChange={handleChanges}
            />
          </label>

          <label>
            Create username
            <input
              type="text"
              name="username"
              value={signUpValues.username}
              onChange={handleChanges}
            />
          </label>

          <label>
            Enter password
            <input
              type="password"
              name="password"
              value={signUpValues.password}
              onChange={handleChanges}
            />
          </label>

          <label>
            {" "}
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              value={signUpValues.confirmPassword}
              onChange={handleChanges}
            />
          </label>
          <div className="loginOrSignUp">
            <button className={ buttonDisabled ? 'disabledButton' : 'submitButton'} disabled={buttonDisabled} onClick={handleSubmit}>
              Sign up
            </button>

            <p>Already have an account?</p>
            <a href="#">Login</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
