import * as React from "react";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(url);
  };

  return (
    <div className="card-pa" style={{ marginBottom: "5rem" }}>
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-pa" style={{ marginTop: "-0.5rem" }}>
        <h3>{name}</h3>
        <br />
        <div className="btn-container" onClick={handleCardClick}>
          <button
            className="custom-btn btn-15"
            style={{ textDecoration: "none" }}
          >
            Register Now!
          </button>
        </div>
      </div>
    </div>
  );
};


const CommonCard = ({ type, name, image, url, results }) => {
  return (
    <div>
      {type === "pa" ? (
        <PACard name={name} image={image}/>
      ) : type === "reg" ? (
        <RegisterCard name={name} image={image} url={url}/>
      ) : (
        <PACard name={name} image={image} />
      )}
    </div>
  );
};

export default CommonCard;
