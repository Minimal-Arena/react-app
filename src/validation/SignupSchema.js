import * as yup from 'yup'


const SignupSchema = yup.object().shape({
    email: yup.string().email('A valid email is required').required('A valid email is required'),
    username: yup.string().trim().min(2, 'Username must be at least 2 characters long').required('Username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    passwordConfirm: yup.string().when("password", {
        is: val => val && val.length > 0,
        then: yup.string()
          .oneOf([yup.ref("password"), null], "Both passwords need to be the same")
          .required()
      }),
})

export default SignupSchema