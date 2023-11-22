import React, { useState } from 'react';
import image from "../images/DuetDance.jpg"; 
import "../sass/events.css"
import axios from 'axios';

function WesternDuet() {
    const [participantName, setParticipantName] = useState('');
    const [participants, setParticipants] = useState('');
    const [collegeId, setCollegeId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here.
        try {
          const token = localStorage.getItem("token");
        const response = await axios.post('http://localhost:9000/westernduet/addDuo', {
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
  return (
    <div>
      <section className="registration-form">
                <div className='main'>
                <div className='img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
        
                        <li className=''>Rules:WebFree. Welcome to CodePen. Sign Up with Google. Sign Up with GitHub. Sign Up with Facebook. </li>
                        <li className=''>Rules:Or, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''>description:OOr, Sign Up with Email. By signing up, you agree to CodePen's Termsr, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''><strong>Contact person:@Tejal-1234567890</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                <h2>Rab ne bana di jodi</h2>
                <h3 id='title2'>~Chance pe dance</h3>
                <div className='input-label'>
                    <input
                        type="text"
                        id={`participant-name-${i}`}
                        name={`participant-name-${i}`}
                        value={participants[i]?.name || ''}
                        onChange={(e) => handleParticipantChange(e, i, 'name')}
                        required
                    />
                    <label className='l1' htmlFor="participant-name">Participant Name</label>
                    </div>
                    <div className='input-label'>
                    <input
                        type="text"
                        id={`college-id-${i}`}
                        name={`college-id-${i}`}
                        value={participants[i]?.collegeId || ''}
                        onChange={(e) => handleParticipantChange(e, i, 'collegeId')}
                        required
                    />
                    <label htmlFor="participant-number" className='l2'>Participant Number</label>
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

                    <button type="submit" className='Sub'>Submit</button>
                </form>
                </div>
            </section>
    </div>
  )
}

const handleParticipantChange = (e, index, field) => {
  const updatedParticipants = [...participants];
  updatedParticipants[index] = {
    ...updatedParticipants[index],
    [field]: e.target.value,
  };
  setParticipants(updatedParticipants);
};

export default WesternDuet