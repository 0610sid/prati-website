import * as React from "react";

const EventCard = ({ name, image, desc }) => {
  return (
    <div className="card-pratibimb-event">
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="pratibimb-event-content">
        <p>{desc}</p>
        <br />
        <h2>{name}</h2>
      </div>
    </div>
  );
};
////
//
//
export default EventCard;
