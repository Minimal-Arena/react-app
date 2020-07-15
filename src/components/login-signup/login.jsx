import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions";
import { useShowPassword } from "../../hooks/useShowPassword";
import visable_icon from "../../icons/visable_icon.svg";
import hidden_icon from "../../icons/hidden_icon.svg";
import Loader from "react-loader-spinner";

const initialLoginValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [type, hidden, onClickHandler] = useShowPassword();
  const isLoading = useSelector((state) => state.generalReducer.isLoading);
  //Dispatcher for reducer

  const dispatch = useDispatch();
  //handle functions

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLogin = {
      username: loginValues.username,
      password: loginValues.password,
    };
    dispatch(loginUser(newLogin));
    setLoginValues(initialLoginValues);
  };
  return (
    <div className="loginFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="innerLoginFormDiv">
          <label>
            {" "}
            Enter username
            <input
              className="valid"
              type="text"
              name="username"
              value={loginValues.username}
              onChange={handleChanges}
            />
          </label>
          <label>
            {" "}
            Enter password
            <div className="passwordDiv">
              <input
                className="valid"
                type={type}
                name="password"
                value={loginValues.password}
                onChange={handleChanges}
              />
              <img
                className="iconStyle"
                onClick={onClickHandler}
                src={hidden ? visable_icon : hidden_icon}
              />
            </div>
          </label>
          <div className="loginOrSignUp">
            <button className="submitButton">login</button>
            <p>Don't have an account?</p>
            <a href="/signup">Signup</a>
          </div>
          <div className='loader'>
          <Loader visible={isLoading}  type="ThreeDots" color="#3086c2" height={60} width={60} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
