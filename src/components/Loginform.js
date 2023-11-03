import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, collection, getDoc, setDoc } from "firebase/firestore";
import { auth, provider, fire } from "../firebaseConfig";
import "../sass/loginform.css";
import HeroCommon from "./HeroCommon";
import { TextField } from "@mui/material";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "100",
    backgroundColor: "#474644",
    opacity: "100%",
  },
};

const LoginForm = () => {
  let subtitle;
  const navigate = useNavigate();
  const [errorLoggingIn, setErrorLoggingIn] = useState(false);
  const [status, setStatus] = useState();
  const [showCC, setShowCC] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const user1 = localStorage.getItem("user");
  const [isOpen, setIsOpen] = useState(false);

  function openModal(msg) {
    setErrorMsg(msg);
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleCC = async (user) => {
    if (user) {
      const docRef = doc(fire, "Email_Map", user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.data()) {
        navigate("/events");
      } else {
        setShowCC(true);
      }
    }
  };

  useEffect(() => {
    if (user1) {
      handleCC(JSON.parse(user1));
    }
  }, [navigate]);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        localStorage.setItem("credential", JSON.stringify(credential));
        localStorage.setItem("user", JSON.stringify(user));
        handleCC(user);
      })
      .catch((err) => {
        setErrorLoggingIn(true);
      });
  };

  const verifyAndRegisterCC = async (e) => {
    e.preventDefault();
    if (status === "NCP") {
      const docRef = collection(fire, "Email_Map");
      const email = JSON.parse(localStorage.getItem("user")).email;
      await setDoc(doc(docRef, email), {
        id: "-1",
      });
      navigate("/events");
    } else if (
      status.slice(0, 3) === "CC-" &&
      status.slice(3).match("[0-9]{2}")
    ) {
      const ccId = status.slice(3);
      const docRef = doc(fire, "CC_Map", ccId);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      if (docSnap.data()) {
        openModal(
          "This College Code has already registered. Login found invalid"
        );
      } else {
        const docRef = collection(fire, "CC_Map");
        const email = JSON.parse(localStorage.getItem("user")).email;
        await setDoc(doc(docRef, status.slice(3)), {
          email,
        });
        const docRef1 = collection(fire, "Email_Map");
        await setDoc(doc(docRef1, email), {
          id: status.slice(3),
        });
        navigate("/events");
      }
    } else {
      openModal("Incorrect status given as input, please try again");
    }
  };

  return !errorLoggingIn ? (
    <div>
      <HeroCommon
        imgClass="hero-events"
        title="Event Registration"
        subtitle="Login using your Gmail"
      ></HeroCommon>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Alert"
      >
        <center>
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{ color: "#f5aeb1" }}
          >
            Error!
          </h2>
          <div style={{ color: "white" }}>{errorMsg}</div>
          <button
            style={{ color: "black", padding: "0.3rem", marginTop: "1rem" }}
            onClick={closeModal}
          >
            Close
          </button>
        </center>
      </Modal>
      <div style={{ background: "black" }}>
        <div className="illuminati-theme">
          {!showCC ? (
            <center>
              <button onClick={signIn} className="custom-btn btn-15">
                Login Here
              </button>
            </center>
          ) : (
            <center className="vjti">
              <h2 data-aos="fade-up">Enter your participation type</h2>
              <p data-aos="fade-up">
                <b>CC</b> - College Contingent (Mention along with code -
                Example CC-71)
              </p>
              <p data-aos="fade-up">
                <b>NCP</b> - Non Contingent Participant
              </p>
              <br />
              <div>
                {!isOpen && (
                  <form>
                    <TextField
                      id="outlined-basic"
                      label="Participation Status"
                      variant="outlined"
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <br />
                    <button
                      onClick={verifyAndRegisterCC}
                      className="custom-btn btn-15"
                      style={{ marginTop: "2rem" }}
                    >
                      Register participation status
                    </button>
                  </form>
                )}
              </div>
            </center>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <HeroCommon
        imgClass="hero-events"
        title="Event Registration"
        subtitle="An Error occured while registering. Please try again!"
      ></HeroCommon>
      <div style={{ background: "black" }}>
        <div className="illuminati-theme">
          <center>
            <button onClick={signIn} className="custom-btn btn-15">
              Login Here
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
