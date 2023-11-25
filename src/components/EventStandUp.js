import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../images/standupimg.jpg";
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import Navbar from "./Navbar";

export default function EventForm() {
  const [participantName, setParticipantName] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [performanceLink, setPerformanceLink] = useState('');
  const [mobile, setmobile] = useState('');
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
      const token = localStorage.getItem("token");
      isLoading(true)
      const response = await axios.post('https://backend-j6ar.onrender.com/events/standup/addParticipant', {
        participantName,
        collegeId,
        performanceLink,
        mobile,
        token
      });

      setParticipantName('');
      setCollegeId('');
      setPerformanceLink('');
      setmobile('');
      isLoading(false)
      if (response.data === 'Participant added successfully') {
        setError('');
        setShowSuccessMessage(true);
      }
    } catch (error) {
      // console.error('Error:', error);
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
              <li className=''>January 6 , 2024 @ 12:30 pm</li>
              <li className=''>Single entry per college</li>
              <li className=''>For the first round kindly upload a reel on instagram and share with us.</li>
              <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a></li>
              <li className=''><strong>Niyati Bisht : 9100548380</strong></li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="translucent-form">
            <p id='heading'>Only Puns</p>
            <h3 id='title2'>~Sell your jokes</h3>
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
                type="url"
                id="performance-link"
                name="performance-link"
                value={performanceLink}
                onChange={(e) => setPerformanceLink(e.target.value)}
                required
              />
              <label htmlFor="performance-link" className='l3'>Performance Link</label>
            </div>

            <div className='input-label'>
              <input
                type="tel"
                id="mobile-no"
                name="mobile-no"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                required
              />
              <label htmlFor="mobile-no" className='l4'>Mobile No.</label>
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