import React from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const MemberCard = ({ color, img, name, post, type, link, git }) => {
  return (
    <div
      className={`member-card ${color}`}
      style={{ backgroundColor: `${type === "web" ? "#111111" : "#200831"}` }}
    >
      <img src={img} alt="" loading="lazy" />
      <b>{name}</b>
      {type === "web" ? (
        <Box
          className="social-icons"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={1}
        >
          <Box>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="prof-link" />
            </a>
          </Box>
          <Box ml={2}></Box>
          <Box>
            <a href={git} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="prof-link" icon={faGithub} />
            </a>
          </Box>
        </Box>
      ) : (
        <p>{post}</p>
      )}
    </div>
  );
};

export default MemberCard;
