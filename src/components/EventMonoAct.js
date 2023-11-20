import React, { useState } from 'react';
import image from "../images/monoact.jpg"; 
import "../sass/events.css"
import axios from 'axios';

function MonoAct() {
    const [participantName, setParticipantName] = useState('');
    const [collegeId, setCollegeId] = useState('');

   
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log("clicked");
  
      try {
          const response = await axios.post('http://localhost:9000/MonoAct/addParticipant', {
              participantName,
              collegeId
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

                    <button type="submit" className='Sub'>Submit</button>
                </form>
                </div>
            </section>
    </div>
  )
}

export default MonoAct