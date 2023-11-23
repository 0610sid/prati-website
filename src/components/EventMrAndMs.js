import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import image from '../images/mr&msprati.png';
import '../sass/events.css';

function MrandMs() {
  const [participant1, setParticipant1] = useState({
    name: '',
    gender: '',
    collegeId: '',
    mobile: '',
  });

  const [participant2, setParticipant2] = useState({
    name: '',
    gender: '',
    collegeId: '',
    mobile: '',
  });

  const [performanceLink, setPerformanceLink] = useState('');
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
      const token = localStorage.getItem('token');
      const response = await axios.post('http://51.20.66.1:9000/events/mrandms/addDuo', {
        participant1,
        participant2,
        performanceLink,
        token,
      });

      console.log('Response:', response.data);

      
      setParticipant1({
        name: '',
        gender: '',
        collegeId: '',
        mobile: '',
      });
      setParticipant2({
        name: '',
        gender: '',
        collegeId: '',
        mobile: '',
      });
      setPerformanceLink('');

      if (response.data === 'Participants added successfully') {
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
    <div style={{ backgroundColor: 'black' }}>
      <Navbar />

      <section className='registration-form'>
        <div className='main'>
          <div
            className='img'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            }}
          >
            <h2 id='info-title'>A quick go through before you register</h2>
            <ul className='ulimg'>
              <li className=''>January 5 , 2024 @ 12:00 pm</li>
              <li className=''>Single entry per college</li>
              <li className=''>Please maintain decency in outfit choice.</li>
              <li className=''>
                For detailed rules please visit{' '}
                <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>
                  here
                </a>
                .
              </li>
              <li className=''>
                <strong>Shubhangi Bagul : 8766816040</strong>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className='translucent-form'>
            <p id='heading'>
              Mr and Ms. Prati
            </p>
            <h3 id='title2'>~Show your inner beauty</h3>
         
             <div className='input-label'>
              <input
                type='text'
                id='participant-name-1'
                name='participant-name-1'
                value={participant1.name}
                onChange={(e) => setParticipant1({ ...participant1, name: e.target.value })}
                required
              />
              <label htmlFor='participant-name-1' className='l1'>
                Participant Name
              </label>
            </div>
            <div className='input-label'>
              <input
                type='text'
                id='college-id-1'
                name='college-id-1'
                value={participant1.collegeId}
                onChange={(e) => setParticipant1({ ...participant1, collegeId: e.target.value })}
                required
              />
              <label htmlFor='college-id-1' className='l3'>
                College ID
              </label>
            </div>
            <div className='input-label'>
              <input
                type='text'
                id='mobile-1'
                name='mobile-1'
                value={participant1.mobile}
                onChange={(e) => setParticipant1({ ...participant1, mobile: e.target.value })}
                required
              />
              <label htmlFor='mobile-1' className='l4'>
                Mobile
              </label>
            </div>
            <div className='input-label1'>
              <select
                id='gender-1'
                name='gender-1'
                value={participant1.gender}
                onChange={(e) => setParticipant1({ ...participant1, gender: e.target.value })}
                required
              >
                <option value='' disabled>
                  Select Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <label htmlFor='gender-1' className='l2'>
                Gender
              </label>
            </div>

            <div className='input-label'>
              <input
                type='text'
                id='participant-nam'
                name='participant-name-2'
                value={participant2.name}
                onChange={(e) => setParticipant2({ ...participant2, name: e.target.value })}
                required
              />
              <label htmlFor='participant-name-2' className='l1'>
                Participant Name
              </label>
            </div>
           
            <div className='input-label'>
              <input
                type='text'
                id='college-id-2'
                name='college-id-2'
                value={participant2.collegeId}
                onChange={(e) => setParticipant2({ ...participant2, collegeId: e.target.value })}
                required
              />
              <label htmlFor='college-id-2' className='l3'>
                College ID
              </label>
            </div>
            <div className='input-label'>
              <input
                type='text'
                id='mobile-2'
                name='mobile-2'
                value={participant2.mobile}
                onChange={(e) => setParticipant2({ ...participant2, mobile: e.target.value })}
                required
              />
              <label htmlFor='mobile-2' className='l4'>
                Mobile
              </label>
            </div>
            <div className='input-label1'>
              <select
                id='gender-2'
                name='gender-2'
                value={participant2.gender}
                onChange={(e) => setParticipant2({ ...participant2, gender: e.target.value })}
                required
              >
                <option value='' disabled>
                  Select Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <label htmlFor='gender-2' className='l2'>
                Gender
              </label>
            </div>
            <div className='input-label'>
              <input
                type='url'
                id='performance-link'
                name='performance-link'
                value={performanceLink}
                onChange={(e) => setPerformanceLink(e.target.value)}
                required
              />
              <label htmlFor='performance-link' className='l5'>
                Performance Link
              </label>
            </div>
            {error && <b><p style={{ color: 'red' }} className="error-message">{error}</p></b>}
                    {showSuccessMessage && (
                      <>
                      <p style={{ color: 'green' }}>Form Submitted Successfully</p>
                      <p>Redirecting in {countdown} seconds</p>
                      </>
                    )}

            <button type='submit' className='Sub'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default MrandMs;