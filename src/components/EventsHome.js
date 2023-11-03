import React from "react";
import { past_events } from "../content/past_events";
import Carousel from "./Carousel";
import { CarouselItem } from "./Carousel";
import EventCardHome from "./EventCardHome";
import NeonButton from "./NeonButton";

const EventsHome = () => {
  return (
    <div className="events-home">
      <div className="content">
        <h2 data-aos="fade-up">EVENTS</h2>
        <div data-aos="fade-up">
          {past_events ? (
            <Carousel>
              {past_events.slice(0, 12).map((e, key) => {
                return (
                  <CarouselItem key={key}>
                    <EventCardHome name={e.name} image={e.image} />
                  </CarouselItem>
                );
              })}
            </Carousel>
          ) : null}
        </div>
        <div data-aos="fade-up">
          <NeonButton href="/events">See All Events</NeonButton>
        </div>
        <br />
      </div>
    </div>
  );
};

export default EventsHome;
