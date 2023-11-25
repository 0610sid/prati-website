import React, { useState } from "react";
import "../sass/verification.css";
import HeroCommon from "./HeroCommon";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const customStyles = {
    content: {
      backgroundColor: "rgba(71, 70, 68, 0.7)",
      backdropFilter: "blur(10px)",
      border: "none",
    },
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("https://backend-j6ar.onrender.com/admin/login", { username, password })
    .then((response) => {
        if (!response.data.auth) {
          setError(response.data.message);
        } else {
          // console.log(response.data);
          localStorage.setItem("token", response.data.token)
          navigate("/admin/verify"); }
      });
  };

  return (
    <div>
      <HeroCommon
        imgClass="hero-events"
        title=" "
        subtitle=" "
        customStyles={customStyles}
      />
      <div className="box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <label>Name</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
          </div>
          <div className="center-btn">
            <input
              type="submit"
              name="sign-in"
              value="Submit"
              className="custom-btn btn-15"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;