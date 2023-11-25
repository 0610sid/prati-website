import React from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const AdminRoutes = ({ children }) => {
    const returnRole = (reqToken) => {
        if (reqToken) {
            let decodedToken = jwtDecode(reqToken);
            // console.log(decodedToken.role);
            return (decodedToken.role);
        } else return (null);
    }
    let role = returnRole(localStorage.getItem("token"));
    return (
        (localStorage.getItem("token") && role === "Admin") ? children : <Navigate to={"/admin/login"} />
    )
}

export default AdminRoutes