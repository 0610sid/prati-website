import React from "react";
import { Grid } from "@mui/material";
import NeonButton from "./NeonButton";

const AboutUsHome = () => {
  return (
    <div className="aboutus-home">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6}>
          <div className="content">
            <h2 data-aos="fade-up">ABOUT US</h2>
            <p style={{ fontSize: "20px" }} data-aos="fade-up">
              Pratibimb means Reflection
            </p>
            <br />
            <p data-aos="fade-up">
              A reflection of pulsating energy, infectious enthusiasm,
              heartwarming fellowship, winning attitudes, crazy moments, and
              wonderful times!
            </p>
            <p data-aos="fade-up">
              Pratibimb is made out of the innovative, fresh, and ever-buzzing
              minds of the students of VJTI, who not only invest time into the
              festival but also their hearts. Spanning three fun-filled days of
              the festival, there are contests and workshops, encompassing
              everything from art to music and dance.
            </p>
            <p data-aos="fade-up">
              Pratibimb is the annual national-level cultural extravaganza of
              VJTI Mumbai, which musters a huge enthusiastic crowd every year.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="header-grid">
            <div id="b1" data-aos="fade-up" className="block"></div>
            <div id="b2" data-aos="fade-up" className="block"></div>
            <div id="b3" data-aos="fade-up" className="block"></div>
            <div id="b4" data-aos="fade-up" className="block"></div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{ margin: "auto", marginTop: "3rem", width: "fit-content" }}
        data-aos="fade-up"
      >
        <NeonButton href="/about">Know More!</NeonButton>
      </div>
    </div>
  );
};

export default AboutUsHome;
