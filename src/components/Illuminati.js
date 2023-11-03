import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HeroCommon from "./HeroCommon";
import CommonCard from "./CommonCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import NeonButton from "./NeonButton";
import { fire } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import it1 from "../assets/it1.JPG";
import it2 from "../assets/it2.JPG";
import it4 from "../assets/it4.JPG";
import it5 from "../assets/it5.JPG";

const IlluminatiList = () => {
  const justify = useMediaQuery("(min-width:700px)");

  const [info, setInfo] = useState([]);

  async function getEvents(db) {
    const events_col = collection(db, "Illuminati_Events");
    const events_snapshot = await getDocs(events_col);
    const events_list = events_snapshot.docs.map((doc) => doc.data());
    setInfo(events_list);
  }

  useEffect(() => {
    getEvents(fire);
    console.log(info);
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
                results={il.result}
                type="ill"
              />
              <br />
              <br />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}; //

const Illuminati = () => {
  const justify = useMediaQuery("(min-width:700px)");

  return (
    <div>
      <HeroCommon
        imgClass="hero-illuminati"
        title="ILLUMINATI"
        subtitle="WHERE BRANCHES ENGAGE IN A FIERCE BATTLE TO WIN THE GLORIOUS ILLUMINATI CUP"
      ></HeroCommon>
      <div style={{ background: "black" }}>
        <div className="illuminati-theme">
          <h2 data-aos="fade-up">TURN IT INTO ART</h2>
          <br />
          <p data-aos="fade-up">
            The theme of Illuminati ‘23 is “Turn it into Art”. For eons, art has
            been a cultural bridge between civilizations, transcending all
            language and social barriers. For centuries, appreciators of art
            have come together, and despite the myriad of backgrounds they hail
            from, they have achieved common ground of intellect in the form of
            decrypting the secrets behind what would appear to be only a few
            layers of paint.
          </p>
          <p data-aos="fade-up">
            Art and its contribution to the psychological evolution of mankind
            is undisputed, and has now come to be appreciated and understood
            even in modern age.
          </p>
          <p data-aos="fade-up">
            We, at Pratibimb this year are celebrating exactly this, the
            creators of these timeless art pieces and their works, that have
            been around longer than any of us and would continue to ride the
            tide of time and pass all the tests of relevancy that would be
            thrown at them. Some of these pieces are happy, some tragic, and we
            as appreciators of art accept and celebrate them all equally.
          </p>
          <p>
            The true beauty of art lies in the fact that a traditional Japanese
            woodblock print by Hokusai, The Great Wave off Kanagawa ends up
            inspiring the likes of Vincent van Gogh, Claude Debussy, Claude
            Monet, and Hiroshige, substantiating the fact that in the end, all
            of this isn’t a competition, sit’s a collaboration.
          </p>
          <p data-aos="fade-up">
            Join us as we celebrate the same ethos this year by incorporating
            the theme in Illuminati, so let your creative mind free and see
            which uncharted road it takes you along!
          </p>
          <br />
          <br />
          <div
            data-aos="fade-up"
            style={{ width: "fit-content", margin: "auto" }}
          >
            <NeonButton href="https://www.youtube.com/watch?v=okWim4YxRms">
              Watch The Theme Video
            </NeonButton>
          </div>
        </div>
      </div>
      <div className="illuminati-events-wrapper ill-background">
        <div className="illuminati-events">
          <h2 data-aos="fade-up">Events of 2023</h2>
          <IlluminatiList />
        </div>
      </div>
      <div style={{ background: "black" }}>
        <div className="past-winners">
          <h2 data-aos="fade-up">Illuminati Winners 2022</h2>
          <h3 data-aos="fade-up">The Production Department</h3>
          <ImageList
            data-aos="fade-up"
            sx={{ width: "100%" }}
            cols={justify ? 2 : 1}
            gap={16}
          >
            <ImageListItem>
              <img
                src={`${it5}?w=100&fit=crop&auto=format`}
                srcSet={`${it5}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`${it1}?w=100&fit=crop&auto=format`}
                srcSet={`${it1}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`${it2}?w=100&fit=crop&auto=format`}
                srcSet={`${it2}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`${it4}?w=100&fit=crop&auto=format`}
                srcSet={`${it4}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
          <br />
          <i>
            <h4 data-aos="fade-up">
              The students of Production department as they lift the
              prestigiuous Illuminati 2022 Cup
            </h4>
          </i>
        </div>
      </div>
    </div>
  );
};
//
export default Illuminati;
