import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";
import past_events from "../content/past_events";
import current_events from "../content/current_events";
import CommonCard from "./CommonCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { fire } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import NeonButton from "./NeonButton";
import { useNavigate } from "react-router-dom";

import MonoAct from "../assets/Pa/PA_Mono_Act.png"
import StandUp from "../assets/Pa/PA_StandUp.png"
import Band from "../assets/Pa/PA_Band.png"
import GroupDance from "../assets/Pa/PA_Group_Dance.png"
import MGT from "../assets/Pa/PA_MGT.png"
import MrMs from "../assets/Pa/PA_Mr_MS_Prati.png"
import SoloSinging from "../assets/Pa/PA_Solo_Singing.png"
import SoloClassical from "../assets/Pa/PA_Solo_Classical.png"
import Duet from "../assets/Pa/PA_Western_Duet.png"

const EventListPast = () => {
  const justify1 = useMediaQuery("(min-width:1000px)");
  const justify2 = useMediaQuery("(min-width:600px)");

  return (

    <ImageList
      sx={{ width: "100%" }}
      cols={justify2 ? (justify1 ? 6 : 4) : 2}
      gap={10}
      data-aos="fade-up"
    >
      {past_events
        .map((item) => (
          <ImageListItem key={item.name}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar title={item.name} />
          </ImageListItem>
        ))
        .reverse()}
    </ImageList>
  );
};

const EventListCurrent = () => {
  const justify = useMediaQuery("(min-width:700px)");
  return (
    <div style={{ margin: "6rem 0 2rem 0" }}>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {current_events.map((il, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={index}
              data-aos="fade-up"
            >
              <CommonCard
                name={il.name}
                image={il.image}
                desc={il.desc}
                url={il.form}
                type="pa"
              />
              <br />
              <br />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const EventListUpcoming = () => {
  const justify = useMediaQuery("(min-width:700px)");

  const [info, setInfo] = useState([]);

  const localData = [
    {
      "desc": "Mono Acting",
      "poster": MonoAct,
      "name": "Lights Camera Abhinay",
      "url": "/MonoAct"
    },
    {
      "name": "OnlyPuns",
      "desc": "StandUp",
      "poster": StandUp,
      "url": "/StandUp"
    },
    {
      "poster": SoloClassical,
      "desc": "Solo Semi-Classical",
      "name": "Natarang",
      "url": "/SemiClassical"
    },
    {
      "poster": Duet,
      "desc": "Western Duet",
      "name": "Rab ne bana-di Jodi",
      "url": "/WesternDuet"
    },
    {
      "poster": GroupDance,
      "name": "Nachne de Saare",
      "desc": "Group Dance",
      "url": "/GroupDance"
    },
    {
      "desc": "Solo Singing",
      "name": "Mehfil-E-Prati",
      "poster": SoloSinging,
      "url": "/SoloSinging"
    },
    {
      "name": "Rythm Rebels",
      "poster": Band,
      "desc": "Band",
      "url": "/Band"
    },
    {
      "desc": "Fashion Show",
      "name": "Mr. & Ms. Prati",
      "poster": MrMs,
      "url": "/Mr&Ms"
    },
    {
      "name": "Mumbai's Got Talent",
      "poster": MGT,
      "desc": "Talent Show",
      "url": "/MGT"
    }
  ]


  useEffect(() => {
    setInfo(localData)
    // eslint-disable-next-line
  }, []);

  return (

    <div style={{ margin: "6rem 0 0 0" }}>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {info.map((il, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={index}
              data-aos="fade-up"
            >
              <CommonCard
                name={il.name}
                image={il.poster}
                desc={il.result}
                url={il.url}
                type="reg"
              />
              <br />
              <br />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <div style={{ background: "black" }}>
        <Navbar />
        <div className="illuminati-theme">
          <h2 data-aos="fade-up">Upcoming Events of 2024</h2>
          <EventListUpcoming />
        </div>
      </div>

      {/* <div className="illuminati-events-wrapper pa-background">
        <div className="illuminati-events">
          <h2 style={{ color: "black" }} data-aos="fade-up">
            Events of 2021
          </h2>
          <EventListCurrent />
        </div>
      </div> */}

      <div
        className="illuminati-events-wrapper pa-background"
      >
        <div className="illuminati-events">
          <h2 data-aos="fade-up">Past Events</h2>
          <EventListPast />
        </div>
      </div>
    </div>
  );
};
//
export default Events;
