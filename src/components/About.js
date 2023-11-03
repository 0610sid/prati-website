import React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <HeroCommon
        imgClass="hero-about"
        title="ABOUT US"
        subtitle="EVERYTHING YOU NEED TO KNOW ABOUT PRATIBIMB AND ITS GLORY!"
      ></HeroCommon>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(34,9,51,1) 0%, rgba(15,3,23,1) 50%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div className="vjti">
          <h2 data-aos="fade-up">About VJTI</h2>
          <p data-aos="fade-up">
            <b>Veermata Jijabai Technological Institute</b> is an engineering
            college located in Matunga, Mumbai, and is one of the oldest
            engineering colleges in Asia. It was founded in 1887, then known as
            the Victoria Jubilee Technological Institute.
          </p>
          <br />
          <p data-aos="fade-up">
            <b>Vision</b>: To establish global leadership in the field of
            technology and develop competent human resources for providing
            service to society.
          </p>
          <br />
          <p data-aos="fade-up">
            <b>Mission</b>: <br />- To provide students with a comprehensive
            knowledge of principles of engineering with a multi-disciplinary
            approach that is challenging.
            <br /> - To create a stimulating environment for research,
            creativity, innovation, and professional activity.
            <br /> - To foster a relationship with other leading institutes of
            learning and research, alumni, and industries to contribute to
            national international development.
          </p>
          <br />
          <p data-aos="fade-up">
            <b>Notable Alumni</b>: Sekhar Basu, Chaggan Bhujbal, Dr.Vijay
            Gupchup, Dr. Anil Kakodkar, Jayant Patil, among others.
          </p>
        </div>
        <div className="prati-about">
          <h2 data-aos="fade-up">About Pratibimb</h2>
          <Grid container spacing={5} alignItems="center" data-aos="fade-up">
            <Grid item xs={12} sm={12} md={5}>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/LuvEoW7KJ64"

                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <div>
                <p>
                  <b>Pratibimb means Reflection.</b> <br /> A reflection of
                  pulsating energy, infectious enthusiasm, heartwarming
                  fellowship, winning attitudes, crazy moments, and wonderful
                  times! It continues to provide an attractive platform for
                  showcasing the fresh talent that college students have within
                  them. <br />
                  Pratibimb is made out of the innovative, fresh, and
                  ever-buzzing minds of the students of VJTI, who not only
                  invest time into the festival but also their hearts. The whole
                  process of building this festival helps students build their
                  confidence, managerial skills and showcase their versatility.{" "}
                  <br /> Spanning three fun-filled days of the festival, there
                  are contests and workshops, encompassing everything from art
                  to music and dance. For those who like an intellectual
                  challenge, there is a range of events to test their skills in
                  the literary arts and managerial area. Pratibimb is the annual
                  national-level cultural extravaganza of VJTI, which musters a
                  huge enthusiastic crowd every year.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Team />
    </div>
  );
};

export default About;
