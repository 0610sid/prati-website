import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../images/monoact.jpg";
import "../sass/events.css"
import axios from 'axios';
import Navbar from "./Navbar";

function MonoAct() {
  const [participantName, setParticipantName] = useState('');
  const [collegeId, setCollegeId] = useState('');

  const [mobile, setmobile] = useState('');
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(3);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let countdownInterval;

    if (showSuccessMessage) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [showSuccessMessage]);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/events');
    }
  }, [countdown, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://51.20.66.1:9000/events/monoact/addParticipant', {
        participantName,
        collegeId,
        mobile,
        token
      });

      setParticipantName('');
      setCollegeId('');
      setmobile('');

      if (response.data === 'Participant added successfully') {
        setError('');
        setShowSuccessMessage(true);
      }
    } catch (error) {
      console.error('Error:', error);

      if (error.response && error.response.status === 400) {
        setError('Your college has already registered');
      } else {
        setError(error.response.data);
      }
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div>
        <section className="registration-form">
          <div className='main'>
            <div className='img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
              <h2 id='info-title' >A quick go through before you register</h2>
              <ul className='ulimg' style={{ textAlign: "left" }}>
                <li className=''>January 5 , 2024 @ 10:00 am</li>
                <li className=''>Single entry per college</li>
                <li className=''>The language of the performance should be only Hindi.</li>
                <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a></li>
                <li className=''><strong>Tejas Shinde : 8788201844</strong></li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="translucent-form">
              <p id='heading'>Lights, Camera, Abhinay!</p>
              <h3 id='title2'>~Entertainment, Entertainment, Entertainment</h3>
              <div className='input-label'>
                <input
                  type="text"
                  id="participant-name"
                  name="participant-name"
                  value={participantName}
                  onChange={(e) => setParticipantName(e.target.value)}
                  required
                />
                <label className='l1' htmlFor="participant-name">Participant Name</label>
              </div>
              <div className='input-label'>
                <input
                  type="url"
                  id="college-id"
                  name="college-id"
                  value={collegeId}
                  onChange={(e) => setCollegeId(e.target.value)}
                  required
                />
                <label htmlFor="college-id" className='l3'>College ID (Drive Link)</label>
              </div>

              <div className='input-label'>
                <input
                  type="tel"
                  id="contact-number"
                  name="contact-number"
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                  required
                />
                <label htmlFor="contact-number" className='l5'>Contact Number</label>
              </div>
              {error && <div className='success-div'><b><p style={{ color: 'red' }} className="error-message">{error}</p></b></div>}
              {showSuccessMessage && (
                <div className='success-div'>
                  <p style={{ color: 'green' }}>Form Submitted Successfully</p>
                  <p>Redirecting in {countdown} seconds</p>
                </div>
              )}

              <div className='sub-btn-div'><button type="submit" className='Sub'>Submit</button></div>
            </form>
          </div>
        </section>
      </div>
    </div>

  )
}

export default MonoAct