import React from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const VerificationCheck = ({ children }) => {
    const returnVerificationStatus = (reqToken) => {
        if (reqToken) {
            let decodedToken = jwtDecode(reqToken);
            // console.log(decodedToken.isverified);
            return (decodedToken.isverified);
        } else return (null);
    }
    let isverified = returnVerificationStatus(localStorage.getItem("token"));
    return (
        (localStorage.getItem("token") && isverified) ? children : <Navigate to={"/verificationRedirect"} />
    )
}

export default VerificationCheck