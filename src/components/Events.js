import React, { useState, useEffect } from "react";
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

  async function getEvents(db) {
    const events_col = collection(fire, "PA_Events_New");
    const events_snapshot = await getDocs(events_col);
    const events_list = events_snapshot.docs.map((doc) => doc.data());
    setInfo(events_list);
  }

  useEffect(() => {
    getEvents(fire);
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ margin: "6rem 0 2rem 0" }}>
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
                url={il.form}
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
        <div className="illuminati-theme">
          <h2 data-aos="fade-up">Upcoming Events of 2024</h2>
          <EventListUpcoming />
        </div>
        <div data-aos="fade-up">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="illuminati-events-wrapper pa-background">
        <div className="illuminati-events">
          <h2 style={{ color: "black" }} data-aos="fade-up">
            Events of 2021
          </h2>
          <EventListCurrent />
        </div>
      </div>

      <div
        className="illuminati-events-wrapper"
        style={{
          background:
            "linear-gradient(180deg, rgba(35,31,42,1) 0%, rgba(145,130,172,1) 100%)",
        }}
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
