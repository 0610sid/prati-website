import React, { useEffect } from "react";
import "./sass/index.css";
import "./index.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutUsHome from "./components/AboutUsHome";
import IlluminatiHome from "./components/IlluminatiHome";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import HeroCommon from "./components/HeroCommon";
import EventsHome from "./components/EventsHome";
import HallOfFame from "./components/HallOfFame";
import About from "./components/About";
import Illuminati from "./components/Illuminati";
import Events from "./components/Events";
import AOS from "aos";
import "aos/dist/aos.css";
import UpcomingEvents from "./components/UpcomingEvents";
import Loginform from "./components/Loginform";
import SignOut from "./components/SignOut";
import ScrollToTop from "./utils/scrollToTop";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Readex Pro', sans-serif",
  },
});

const Home = () => {
  return (
    <>
      <div className="App">
        <HeroCommon
          title="PRATIBIMB VJTI"
          subtitle="THE CULTURAL EXTRAVAGANZA OF VJTI, MUMBAI"
          imgClass="hero-home"
        />
        <AboutUsHome />
        <IlluminatiHome />
        <EventsHome />
        <UpcomingEvents />
      </div>
    </>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sponsors", element: <Sponsors /> },
    { path: "/halloffame", element: <HallOfFame /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/about", element: <About /> },
    { path: "/illuminati", element: <Illuminati /> },
    { path: "/events", element: <Events /> },
    { path: "/login", element: <Loginform /> },
    { path: "/signout", element: <SignOut /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <App />
        <Footer />
      </ThemeProvider>
    </Router>
  );
};
export default AppWrapper;
