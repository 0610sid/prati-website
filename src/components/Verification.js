import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../sass/verification.css";
import HeroCommon from "./HeroCommon";

const Verification = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeId, setCollegeId] = useState("");
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    const inputValue = e.target.value; // TO ENSURE ONLY DIGITS ARE ADDED IN MOBILE NUMBER FIELD
    const isNumeric = /^[0-9]+$/.test(inputValue);

    if (isNumeric || inputValue === "") {
      setMobile(inputValue);
      setError("");
    } else {
      setError("Mobile number can only contain digits!");
    }
  };

  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
  };

  const handleCollegeIdChange = (e) => {
    setCollegeId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.post("http://localhost:9000/verification", { name, mobile, collegeName, collegeId, token });
  
      if (response.data.auth) {
        console.log(response.data.result);
        navigate("/verificationRedirect");
      } else {
        setLoginStatus(false);
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during verification:", error);
      setError("Error during submitting form");
    }
  };
  

  return (
    <div>
      <HeroCommon
        imgClass="hero-events"
        title=" "
        subtitle=" "
        customStyles={customStyles}
      />
      {/* <h2 style={{ textAlign: "center"}}>Please enter your details for Verification!</h2> */}
      <div className="box">
        <h2>Verification</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={handleNameChange}
            />
            <label>Name</label>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="mobile"
              required
              value={mobile}
              onChange={handleMobileChange}
            />
            <label>Mobile</label>
          </div>
          <div className="inputBox">
              <input
                type="text"
                name="college_name"
                required
                value={collegeName}
                onChange={handleCollegeNameChange}
              />
              <label>College Name</label>
            </div>
          <div className="inputBox">
            <input
              type="url"
              name="collegeId"
              required
              value={collegeId}
              onChange={handleCollegeIdChange}
            />
            <label>College Id (Drive Link)</label>
          </div>
          {error && <b><p style={{ color: 'red' }} className="error-message">{error}</p></b>}
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
      {/* </HeroCommon> */}
    </div>
  );
};

export default Verification;