import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../images/sing.jpg"; 
// import "../sass/events.css"
import axios from 'axios';
import Navbar from "./Navbar";

function Singing() {
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
        const response = await axios.post('http://localhost:9000/solosinging/addParticipant', {
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
    <div>
       <section className="registration-form">
                <div className='main'>
                <div className='img'style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
        
                        <li className=''>Rules:WebFree. Welcome to CodePen. Sign Up with Google. Sign Up with GitHub. Sign Up with Facebook. </li>
                        <li className=''>Rules:Or, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''>description:OOr, Sign Up with Email. By signing up, you agree to CodePen's Termsr, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''><strong>Contact person:@Tejal-1234567890</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                <h2>Mehefile-e-prati</h2>
                <h3 id='title2'>~Ek shaam pratibimb ke naam</h3>
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

                    <button type="submit" className='Sub'>Submit</button>
                </form>
                </div>
            </section>
    </div>
  )
}

export default Singing