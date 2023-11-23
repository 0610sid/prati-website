import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from "../images/solosemiclassical.png"; 
import "../sass/events.css";
import Navbar from "./Navbar";

export default function SemiClassical() {
    const [participantName, setParticipantName] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [error, setError] = useState('');
    const [countdown, setCountdown] = useState(5);
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
          const response = await axios.post('http://localhost:9000/events/semiclassical/addParticipant', {
            participantName,
            collegeId,
            token
          });
    
          setParticipantName('');
          setCollegeId('');
    
          if (response.data === 'Participant added successfully') {
            setError(''); 
            setShowSuccessMessage(true);
          }
        } catch (error) {
          console.error('Error:', error);
    
          if (error.response && error.response.status === 400) {
            setError('Your college has already registered');
          } else {
            setError('Internal Server Error');
          }
        }
      };

    return (
        <div style={{backgroundColor:"black"}}>
          <Navbar/>
            <section className="registration-form">
                <div className='main'>
                <div className='img'style={{backgroundImage:`url(${image})`}}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                    <ul className='ulimg'>
                        <li className=''>January 4 , 2024 @ 10:00 am</li>
                        <li className=''>Single entry per college</li>
                        <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a>.</li>
                        <li className=''><strong>Parthvi Paunikar : 8668248946</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                  <div id='titleform'>
                      <p id='heading'>Natarang</p>
                    <h3 id='title2'>~Dance in harmony</h3>
                  </div>
                
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
                    {error && <b><p style={{ color: 'red' }} className="error-message">{error}</p></b>}
                    {showSuccessMessage && (
                        <>
                        <p style={{ color: 'green' }}>Form Submitted Successfully</p>
                        <p>Redirecting in {countdown} seconds</p>
                        </>
                    )}

                    <div id='btn'>
                        <button type="submit" className='Sub'>Submit</button>
                    </div>
                </form>
                </div>
            </section>
        </div>
    );
}



