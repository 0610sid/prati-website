import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../sass/loginform.css"
import HeroCommon from "./HeroCommon";
import NeonButton from "./NeonButton";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate();

  const customStyles = {
    content: {
      backgroundColor: "rgba(71, 70, 68, 0.7)",
      backdropFilter: "blur(10px)",
      border: "none",
    },
  };

  const userAuthenticated = () => {
    axios.get("http://localhost:9000/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/login", { username, password })
    .then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
          setError(response.data.message);
        } else {
          console.log(response.data);
          localStorage.setItem("token", response.data.token)
          setLoginStatus (true);
          if (response.data.result[0].isVerified)
          { navigate("/events"); }
          else navigate("/verification");
        }
      });
};

  return (
    
    <div>
      <HeroCommon
        imgClass="hero-events"
        title=""
        subtitle=""
      />

      <div style={{ background: "black" }}>
      
        <div className="illuminati-theme">
          <h2 data-aos="fade-up">PERFORMING ARTS</h2>
          <br />
          <p data-aos="fade-up">
            The goal of art is Expression. It is the journey of the free soul.
            It is the escapist fantasy to live as well as the grim reality to be
            felt. For every talented bone and every whisper of creativity,
            PratibimbVJTI is a cocooning hub and the best platform to showcase
            your zing and panache.
          </p>
          <p data-aos="fade-up">
            The Performance Arts Sector include all the events ranging from
            Drama, Dance, Vocals, Poetry to Instrumentals, Raps and Beatboxing,
            Artwork and Social-work. These events not only add fun to your life
            but also help build your personality as a whole.
          </p>
          <p data-aos="fade-up">
            Pratibimb also brings you the opportunity to interact with immensely
            talented peers from other colleges too, which in itself would be a
            great experience! When so many passionate and fierce people get
            together, it really is a sight to behold. So join us on this
            beautiful and enthralling ride full of fun and captivating
            experiences.
          </p>
        </div>
      </div>

      <div style={{ background: "black" }}>
      <h2 data-aos="fade-up" style={{ textAlign: "center"}}>Please Login to Register for Events!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      
        <div className="box">
        <h2>Login</h2>      
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="username"
                required
                value={username}
                onChange={handleUsernameChange}
              />
              <label>CC Code</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
            </div>
            {/* {loginStatus && (<button>Check if authenticated</button>)} */}
            {error && <b><p style={{ color: 'red' }} className="error-message">{error}</p></b>}
            <div className="center-btn">
              <input
                type="submit"
                name="sign-in"
                value="Login"
                className="custom-btn btn-15"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;