import * as React from "react";
import NeonButton from "./NeonButton";
const user = localStorage.getItem("user");

const IlluminatiCard = ({ name, image, results }) => {
  return (
    <div className="card-illuminati">
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-illuminati">
        <p>{`1st Place - ${results[0]}`}</p>
        <p>{`2nd Place - ${results[1]}`}</p>
        <p>{`3rd Place - ${results[2]}`}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

const PACard = ({ name, image }) => {
  return (
    <div className="card-pa">
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-pa">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

const RegisterCard = ({ name, image, url }) => {
  console.log(url);
  return (
    <div className="card-pa" style={{ marginBottom: "2rem" }}>
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-pa" style={{ marginTop: "-0.5rem" }}>
        <h3>{name}</h3>
        <br />
        {user && (
          <a
            className="custom-btn btn-15"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            href={url}
          >
            {" "}
            Register Now!{" "}
          </a>
        )}
      </div>
    </div>
  );
};

const CommonCard = ({ type, name, image, url, results }) => {
  return (
    <div>
      {type === "pa" ? (
        <PACard name={name} image={image} />
      ) : type === "reg" ? (
        <RegisterCard name={name} image={image} url={url} />
      ) : (
        <PACard name={name} image={image} />
      )}
    </div>
  );
};

export default CommonCard;
