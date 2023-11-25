import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../images/DuetDance.jpg";
import "../sass/events.css"
import axios from 'axios';
import Navbar from "./Navbar";
import { HashLoader } from 'react-spinners';

function WesternDuet() {
  const [participant1, setParticipant1] = useState({ name: '', contactNumber: '', collegeId: '' });
  const [participant2, setParticipant2] = useState({ name: '', contactNumber: '', collegeId: '' });
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(3);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loader, isLoading] = useState(false)

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
      isLoading(true)
      const token = localStorage.getItem("token");
      const response = await axios.post('https://backend-j6ar.onrender.com/events/westernduet/addDuo', {
        participant1,
        participant2,
        token
      });

      // console.log('Response:', response.data);
      setParticipant1({ name: '', contactNumber: '', collegeId: '' });
      setParticipant2({ name: '', contactNumber: '', collegeId: '' });
      isLoading(false)
      if (response.data === 'Participants added successfully') {
        setError('');
        setShowSuccessMessage(true);
      }
    } catch (error) {
      isLoading(false)
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

      <section className="registration-form">
        <div className='main'>
          <div className='img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
            <h2 id='info-title' >A quick go through before you register</h2>
            <ul className='ulimg'>
              <li className=''>January 5 , 2024 @ 2:00 pm</li>
              <li className=''>Single entry per college</li>
              <li className=''>Any kind of profanity will lead to direct elimination of the whole contigent.</li>
              <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a>.</li>
              <li className=''><strong>Ayush Patil : 7021797052</strong></li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="translucent-form">
            <div id='titleform'>
              <p id='heading'>Rab ne bana di jodi</p>
              <h3 id='title2'>~Chance pe dance</h3>
            </div>


            {/* Participant 1 */}
            <div className='input-label'>
              <input
                type="text"
                id="participant-name-1"
                name="participant-name-1"
                value={participant1.name}
                onChange={(e) => setParticipant1({ ...participant1, name: e.target.value })}
                required
              />
              <label className='l1' htmlFor="participant-name-1">Participant Name 1</label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="contact-number-1"
                name="contact-number-1"
                value={participant1.contactNumber}
                onChange={(e) => setParticipant1({ ...participant1, contactNumber: e.target.value })}
                required
              />
              <label htmlFor="contact-number-1" className='l2'>Contact Number 1</label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="college-id-1"
                name="college-id-1"
                value={participant1.collegeId}
                onChange={(e) => setParticipant1({ ...participant1, collegeId: e.target.value })}
                required
              />
              <label htmlFor="college-id-1" className='l3'>College ID 1 (Drive Link)</label>
            </div>

            {/* Participant 2 */}
            <div className='input-label'>
              <input
                type="text"
                id="participant-name-2"
                name="participant-name-2"
                value={participant2.name}
                onChange={(e) => setParticipant2({ ...participant2, name: e.target.value })}
                required
              />
              <label className='l1' htmlFor="participant-name-2">Participant Name 2</label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="contact-number-2"
                name="contact-number-2"
                value={participant2.contactNumber}
                onChange={(e) => setParticipant2({ ...participant2, contactNumber: e.target.value })}
                required
              />
              <label htmlFor="contact-number-2" className='l2'>Contact Number 2</label>
            </div>
            <div className='input-label'>
              <input
                type="url"
                id="college-id-2"
                name="college-id-2"
                value={participant2.collegeId}
                onChange={(e) => setParticipant2({ ...participant2, collegeId: e.target.value })}
                required
              />
              <label htmlFor="college-id-2" className='l3'>College ID 2 (Drive Link)</label>
            </div>
            {error && <div className='success-div'><b><p style={{ color: 'red' }} className="error-message">{error}</p></b></div>}
            {showSuccessMessage && (
              <div className='success-div'>
                <p style={{ color: 'green' }}>Form Submitted Successfully</p>
                <p>Redirecting in {countdown} seconds</p>
              </div>
            )}

            <div className='sub-btn-div'>
              {!loader ? <button type="submit" className='Sub'>Submit</button>
                :
                <HashLoader color="#692869" loader />}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default WesternDuet;