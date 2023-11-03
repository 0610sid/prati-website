import React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context(
    "../assets/gallery_webp",
    false,
    /\.(png|jpg|JPG|jpe?g|svg|webp)$/
  )
);

var imageNames = Object.keys(images);

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

imageNames = shuffle(imageNames);

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <HeroCommon
          imgClass="hero-gallery"
          title="GALLERY"
          subtitle="ALL THE BEST MOMENTS, CAPTURED"
        ></HeroCommon>
        <div className="wrapper">
          <div></div>
          <br />
          <Grid container spacing={2} style={{ padding: "0rem 1rem" }}>
            <Grid item md style={{ maxWidth: "1200px", margin: "auto" }}>
              <div id="gallery">
                {imageNames.map((i_name, key) => {
                  return (
                    <div key={key}>
                      <img
                        className="card img-responsive"
                        loading="lazy"
                        src={images[i_name]["default"]}
                        alt="Pratibimb"
                        key={key}
                      ></img>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
