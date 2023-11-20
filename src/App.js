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
import EventsUnprotected from "./components/EventsUnprotected"
import AOS from "aos";
import "aos/dist/aos.css";
import UpcomingEvents from "./components/UpcomingEvents";
import Loginform from "./components/Loginform";
import Verification from "./components/Verification";
import SignOut from "./components/SignOut";
import AdminLogin from "./components/AdminLogin";
import Verify from "./components/Verify" 
import ScrollToTop from "./utils/scrollToTop";
import UserRoutes from "./utils/UserRoutes";
import AdminRoutes from "./utils/AdminRoutes";
import TextForm from './components/TextForm';
import  EventForm from './components/EventGrpDance';
import  Standup from './components/EventStandUp';
import Solo_Singing from './components/EventSinging';
import WesternDuet from './components/EventWesternDuet';
import MonoAct from './components/EventMonoAct';
import  MrandMs from './components/EventMrAndMs';
import  SemiClassical from './components/EventSemiClassical';
import Band from './components/EventBand';
// import LoginForm from './components/login';
import Btn from './components/btns';

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

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sponsors", element: <Sponsors /> },
    { path: "/halloffame", element: <HallOfFame /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/about", element: <About /> },
    { path: "/illuminati", element: <Illuminati /> },
    { path: "/events", element: <UserRoutes> <Events /> </UserRoutes>},
    { path: "/list", element: <EventsUnprotected /> },
    // { path: "/events", element: <Events />},
    { path: "/login", element: <Loginform /> },
    { path: "/verification", element: <UserRoutes> <Verification /> </UserRoutes> },
    { path: "/signout", element: <SignOut /> },
    { path: "/admin/login", element: <AdminLogin /> },
    { path: "/admin/verify", element: <AdminRoutes><Verify /></AdminRoutes> },
    { path: "/GroupDance", element: <EventForm></EventForm> },
    { path: "/StandUp", element: <Standup></Standup> },
    { path: "/Western-duet", element: <WesternDuet></WesternDuet> },
    { path: "/SemiClassical", element: <SemiClassical></SemiClassical> },
    { path: "/SoloSinging", element: <Solo_Singing></Solo_Singing> },
    { path: "/MonoAct", element: <MonoAct></MonoAct> },
    { path: "/Mr&Ms", element: <MrandMs></MrandMs> },
    { path: "/Band", element: <Band></Band> },
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
