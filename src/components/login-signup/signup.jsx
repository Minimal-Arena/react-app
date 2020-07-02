import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions";
import * as yup from 'yup';
import SignupSchema from '../../validation/SignupSchema';
import {useShowPassword} from '../../hooks/useShowPassword';
import visable_icon from '../../icons/visable_icon.svg';
import hidden_icon from '../../icons/hidden_icon.svg';

const initialSignUpValues = {
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
};

const initialSignUpErrors = {
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
};

const Signup = (props) => {
  //Local state for handling form inputs
  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
  const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors);
  const [inputClass, setInputClass] = useState(true)
  const [isValid, setIsValid] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [type, hidden, onClickHandler, confirmType, confirmHidden, onClickConfirmHandle] =useShowPassword()

  //Dispatcher for reducer
  const dispatch = useDispatch();

  //handle functions
  const handleChanges = (e) => {
    const name = e.target.name
    const value = e.target.value
    

    yup.reach(SignupSchema, name).validate(value)
    .then(valid => {
      setSignUpErrors({...signUpErrors, [name]: ''})
      setInputClass(true)
      
    })
    .catch(err => {
      setSignUpErrors({...signUpErrors, [name]: err.errors[0]})
      setInputClass(false)
    })

    setSignUpValues({ ...signUpValues, [name]: value });
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
    if (signUpValues.password === signUpValues.passwordConfirm) {
      if (
        signUpValues.password.length !== 0 ||
        signUpValues.passwordConfirm.length !== 0
      ) {
        setButtonDisabled(false);
      }
    } else setButtonDisabled(true);
  }, [signUpValues.password, signUpValues.passwordConfirm]);


  useEffect(() =>  {
     SignupSchema.isValid(signUpValues)
    .then(valid => {
      setIsValid(!valid)
    })
  }, [signUpValues])

  return (
    <div className="signUpFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="innerSignUpFormDiv">
          <label>
            Enter email
            <input
            className={inputClass ? 'valid' : 'notValid'}
              type="text"
              name="email"
              value={signUpValues.email}
              onChange={handleChanges}
            />
          </label>
      <p className={'error'}>{signUpErrors.email}</p>
          <label>
            Create username
            <input
            className={inputClass ? 'valid' : 'notValid'}
              type="text"
              name="username"
              value={signUpValues.username}
              onChange={handleChanges}
            />
          </label>
          <p className={'error'}>{signUpErrors.username}</p>
          <label>
            Enter password
            <div className='passwordDiv'>
            <input
            className={inputClass ? 'valid' : 'notValid'}
              type={type}
              name="password"
              value={signUpValues.password}
              onChange={handleChanges}
            />
            <img className='iconStyle' onClick={ onClickHandler} src={hidden ? visable_icon: hidden_icon}/>
            </div>
          </label>
          <p className={'error'}>{signUpErrors.password}</p>
          <label>
            
            Confirm password
            <div className='passwordDiv'>
            <input
            className={!buttonDisabled ? 'valid' : 'notValid'}
            type={confirmType}
              name="passwordConfirm"
              value={signUpValues.passwordConfirm}
              onChange={handleChanges}
            />
            <img className='iconStyle' onClick={ onClickConfirmHandle} src={confirmHidden ? visable_icon: hidden_icon} alt="" />
            </div>
          </label>
          

          {buttonDisabled ? <p className={'error'}>Error message passwords need to match</p> : null}
          <div className="loginOrSignUp">
            <button className={ isValid ? 'disabledButton' : 'submitButton'} disabled={buttonDisabled} onClick={handleSubmit}>
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
