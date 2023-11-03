import React from "react";
import HeroCommon from "./HeroCommon";
import SponsItem from "./SponsItem";
import sponsors from "../content/sponsors";
import sponsgrid1 from "../assets/spons-grid.webp";
import sponsgrid2 from "../assets/spons-grid-vert.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

const SponsList = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {sponsors.map((sp, a) => {
        return (
          <Grid item data-aos="fade-up" xs={12} sm={6} md={6} lg={3} key={a}>
            <SponsItem
              name={sp.name}
              image={sp.logo}
              link={sp.link}
            ></SponsItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

const SponsContent = () => {
  const vert = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div className="past-spons">
      <h2 data-aos="fade-up">PRESENT SPONSORS</h2>
        <SponsList />
        <br />
        <br />
        <h2 data-aos="fade-up">PAST SPONSORS</h2>
        {vert ? (
          <img
            src={sponsgrid1}
            alt=""
            width="100%"
            height="auto"
            loading="lazy"
            data-aos="fade-up"
          ></img>
        ) : (
          <img
            src={sponsgrid2}
            alt=""
            width="100%"
            height="auto"
            loading="lazy"
            data-aos="fade-up"
          ></img>
        )}
      </div>
    </>
  );
};

const Sponsors = () => {
  return (
    <div>
      <HeroCommon
        imgClass="hero-spons"
        title="PRATIBIMB'S SPONSORS"
        subtitle="THE SPONSORSHIP SECTOR - THE HEART OF PRATIBIMB"
      ></HeroCommon>
      <SponsContent />
    </div>
  );
};

export default Sponsors;
