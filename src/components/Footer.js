import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Box, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/signout") {
    return null;
  }

  return (
    <div className="footer">
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <div className="footer-prati">
              <h3>PRATIBIMB VJTI</h3>
              <br />
              {/* <p>
                Website Contributed By<br></br>
                <a
                  href="https://communityofcoders.in/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "green",
                    fontSize: "1.1rem",
                    fontWeight: "strong",
                  }}
                >
                  Community of Coders, VJTI
                </a>{" "}
                💚
              </p> */}
              <br />
              <Box
                className="social-icons"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                maxWidth="300px"
              >
                <Box>
                  <a
                    href="https://www.instagram.com/pratibimbvjti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-link"
                      icon={faInstagram}
                    />
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://twitter.com/pratibimbvjti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="social-link" icon={faTwitter} />
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.facebook.com/pratibimbvjti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-link"
                      icon={faFacebook}
                    />
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.youtube.com/user/PratibimbVJTI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="social-link" icon={faYoutube} />
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.linkedin.com/company/pratibimb-vjti/mycompany/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="social-link"
                      icon={faLinkedin}
                    />
                  </a>
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <br />
              <Link href="/" underline="none" color="inherit">
                <p>Home</p>
              </Link>
              <Link href="about" underline="none" color="inherit">
                <p>About</p>
              </Link>
              <Link href="/halloffame" underline="none" color="inherit">
                <p>Hall of Fame</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <br />
              <Link href="/illuminati" underline="none" color="inherit">
                <p>Illuminati</p>
              </Link>
              <Link href="/sponsors" underline="none" color="inherit">
                <p>Sponsors</p>
              </Link>
              <Link href="/events" underline="none" color="inherit">
                <p>Events</p>
              </Link>
              <Link href="gallery" underline="none" color="inherit">
                <p>Gallery</p>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
