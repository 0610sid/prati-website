import React, { useState } from "react";
import { Box, Link, IconButton, Drawer } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/prati-white.png";

const Navbar = () => {
  const navchange = useMediaQuery("(min-width:1300px)");
  const user = localStorage.getItem("user");

  const Navlinks = ({ fd }) => {
    return (
      <div className="nav-links">
        <Box display="flex" flexDirection={fd} justifyContent="flex-end">
          <Box p={3}>
            <Link underline="none" href="/" color="inherit">
              <p>Home</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/about" color="inherit">
              <p>About</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/events" color="inherit">
              <p>Events</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/illuminati" color="inherit">
              <p>Illuminati</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/sponsors" color="inherit">
              <p>Sponsors</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/halloffame" color="inherit">
              <p>Hall of Fame</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/gallery" color="inherit">
              <p>Gallery</p>
            </Link>
          </Box>
          {user ? (
            <Box p={3}>
              <Link underline="none" href="/signout" color="inherit">
                <p>Sign Out</p>
              </Link>
            </Box>
          ) : (
            <Box p={3}>
              <Link underline="none" href="/login" color="inherit">
                <p>Login</p>
              </Link>
            </Box>
          )}
        </Box>
      </div>
    );
  };

  const [navopen, setNavopen] = useState(false);

  const toggleDrawer = (navopen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setNavopen(navopen);
  };

  return (
    <div className="nav-wrapper">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Link href="/" underline="none" color="inherit">
          <img src={logo} alt="logo" loading="lazy" />
        </Link>
      </Box>

      {navchange ? (
        <>
          <Navlinks fd="row" />
          <div></div>
        </>
      ) : (
        <>
          <IconButton aria-label="close" onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" style={{ fill: "#fff" }} />
          </IconButton>
          <Drawer anchor="right" open={navopen} onClose={toggleDrawer(false)}>
            <IconButton
              aria-label="close"
              onClick={toggleDrawer(false)}
              style={{ width: "fit-content" }}
            >
              <ArrowForwardIosIcon
                fontSize="large"
                style={{ fill: "#e9e9e9", justifyContent: "left" }}
              />
            </IconButton>
            <Navlinks fd="column" />
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Navbar;
