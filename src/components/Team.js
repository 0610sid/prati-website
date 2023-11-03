import React from "react";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Team3 from "./Team3";
import WebDevTeam from "./WebDevTeam";

const Team = () => {
  return (
    <div>
      <div className="team">
        <h2 data-aos="fade-up">THE TORCHBEARERS</h2>
        <div className="team-sec1">
          <h3 data-aos="fade-up">The Senate</h3>
          <Team1 />
        </div>
        <br />
        <br />
        <div className="team-sec1">
          <h3 data-aos="fade-up">The Pillars</h3>
          <Team2 />
        </div>
        <br />
        <br />
        <div className="team-sec1">
          <h3 data-aos="fade-up">The Creatives</h3>
          <Team3 />
        </div>
      </div>
      <div className="web-dev">
        <div className="team-sec1">
          <h3 data-aos="fade-up">The Web Dev Team</h3>
          <br />
          <WebDevTeam />
        </div>
      </div>
    </div>
  );
};

export default Team;
