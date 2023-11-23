import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../sass/events.css"
import axios from 'axios';
import Navbar from "./Navbar";
import image from "../images/mr&msprati.png"


function MrandMs() {
  const [participantName, setParticipantName] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [participants, setParticipants] = useState([]); 
  let fields;
  const handleSubmit = async (e) => {
      console.log("clicked");
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:9000/mrandms/addDuo', {
          participants, // Send the array of participants
          token
        });
  
          console.log('Response:', response.data);
          // Optionally, you can reset the form fields here
          setParticipantName('');
          setCollegeId('');
      } catch (error) {
          console.error('Error:', error);
      }
  };
  const renderParticipantFields = () => {
    const participantFields = [];

    for (let i = 0; i < 2; i++) {
      participantFields.push(
        <div key={i}>
          <h3>Team Member-{i + 1}</h3>
          <div className='input-label'>
            <input
              type="text"
              id={`participant-name-${i}`}
              name={`participant-name-${i}`}
              value={participants[i]?.name || ''}
              onChange={(e) => handleParticipantChange(e, i, 'name')}
              required
            />
            <label htmlFor={`participant-name-${i}`} className='l1'>
              Participant Name
            </label>
          </div>
          <div className='input-label'>
            <input
              type="url"
              id={`college-id-${i}`}
              name={`college-id-${i}`}
              value={participants[i]?.collegeId || ''}
              onChange={(e) => handleParticipantChange(e, i, 'collegeId')}
              required
            />
            <label htmlFor={`college-id-${i}`} className='l3'>
              College ID (Drive Link)
            </label>
          </div>
        </div>
      );
    }

    return participantFields;
  };
  const handleParticipantChange = (e, index, field) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = {
      ...updatedParticipants[index],
      [field]: e.target.value,
    };
    setParticipants(updatedParticipants);
  };
  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar/>

       <section className="registration-form">
                <div className='main'>
                <div className='img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
                      <li className=''>January 5 , 2024 @ 12:00 pm</li>
                      <li className=''>Single entry per college</li>
                      <li className=''>Please maintain decency in outfit choice.</li>
                      <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a>.</li>
                      <li className=''><strong>Shubhangi Bagul : 8766816040</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                  <div id='titleform'>
                      <p id='heading'>Mr and Ms. Prati</p>
                    <h3 id='title2'>~Show your inner beauty</h3>
                  </div>
               
                {renderParticipantFields()}

                <div id='btn'>
                        <button type="submit" className='Sub'>Submit</button>
                    </div>
                </form>
                </div>
            </section>
    </div>
  )
}

export default MrandMs