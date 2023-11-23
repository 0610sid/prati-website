import React, { useState } from 'react';
import image from "../images/grpdance2.jpg"; 
import axios from 'axios';
import "../sass/events.css"
import Navbar from './Navbar';

export default function EventForm() {
  const [participantName, setParticipantName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [participantNumber, setParticipantNumber] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [participants, setParticipants] = useState([]); 
  let fields;

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/events/MGT/addTeam', {
        teamName,
        participantNumber,
        participants, // Send the array of participants
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

    for (let i = 0; i < Math.min(participantNumber, 2); i++) {
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
          <div className='input-label'>
            <input
              type="tel"
              id={`contact-number-${i}`}
              name={`contact-number-${i}`}
              value={participants[i]?.contactNumber || ''}
              onChange={(e) => handleParticipantChange(e, i, 'contactNumber')}
              required
            />
            <label htmlFor={`contact-number-${i}`} className='l4'>
              Contact Number
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
    <div style={{backgroundColor : "black"}}>
        <Navbar/>

      <section className="registration-form">
        <div className='main'>
          <div className='img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
            <h2 className='infotitle infotitle--shadow' >A quick go through before you register</h2>
            <ul className='ulimg'>
            <li className=''>January 4 , 2024 @ 04:30 pm</li>
            <li className=''>No age restrictions.</li>
            <li className=''>Kindly upload your performance drive link.</li>
            <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a>.</li>
            <li className=''><strong>Yashvi Gala : 9930336236</strong></li>
            </ul> 
          </div>
          
          <form onSubmit={handleSubmit} className="translucent-form">
            <div id="titleform">
              <p id="heading">MGT</p>
              <h3 id='title2'>~Mumbai's got Talent</h3>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="team-name"
                name="team-name"
                value={teamName}
                onChange={(e) => {setTeamName(e.target.value);}}
                required
              />
              <label htmlFor="team-name" className='l2'>Team Name</label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="participant-number"
                name="participant-number"
                value={participantNumber}
                onChange={(e) => setParticipantNumber(e.target.value)}
                required
              />
              <label  htmlFor="participant-number" className='l2'>Participant Number</label>
            </div>
            {renderParticipantFields()}
            <div id='btn'>
                        <button type="submit" className='Sub'>Submit</button>
                    </div>
          </form>
        </div>
      </section>
    </div>
  );
}