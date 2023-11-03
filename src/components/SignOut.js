import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "../sass/signout.css";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("credential");
        navigate("/");
      })
      .catch((err) => {});
  }, [navigate]);

  return (
    <div id="loading-wrapper">
      <div id="loading-text">SIGNING OUT</div>
      <div id="loading-content"></div>
    </div>
  );
};

export default SignOut;
