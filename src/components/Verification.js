import React, { useState } from "react";
import "../sass/verification.css";
import HeroCommon from "./HeroCommon";

const Verification = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [collegeId, setCollegeId] = useState("");

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
    setMobile(e.target.value);
  };

  const handleCollegeIdChange = (e) => {
    setCollegeId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mobile,
          collegeId,
        }),
      });

      if (response.ok) {
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
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
              name="collegeId"
              required
              value={collegeId}
              onChange={handleCollegeIdChange}
            />
            <label>College Id (Drive Link)</label>
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
      {/* </HeroCommon> */}
    </div>
  );
};

export default Verification;