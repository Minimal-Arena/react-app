import jwt_decode from 'jwt-decode';

export const redirect = redirectUrl => {
    window.location = redirectUrl
  }

export const validateToken = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    const decoded = jwt_decode(token).exp*1000
    const nowTime = Date.now()
    if(decoded - nowTime <= 0) {
      window.localStorage.removeItem("token")
    }
  }
}