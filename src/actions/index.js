import axios from 'axios'

const baseURL = 'https://minimal-arena.herokuapp.com'
/****** API Cases ******/

/*Base Cases */
export const REGISTER_USER = 'REGISTER_USER';


/*Success Cases */

/*Fail Cases */


/****** API Actions ******/

export const registerUser = (newUser) => (dispatch) => {
    // dispatch({type: REGISTER_USER})
    console.log('action is working')
    axios
        .post(`${baseURL}/api/auth/register`, newUser)
        .then(res => console.log(res))
}