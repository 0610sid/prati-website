import React, { useState } from 'react';
import "../sass/events.css"
import axios from 'axios';
import image from "../images/band1.jpg"; 

import Navbar from "./Navbar";

function Band() {
    const [teamName, setTeamName] = useState('');
    const [participantNumber, setParticipantNumber] = useState('');
    const [leader, setleader] = useState({ name: '', contactNumber: '', collegeId: '' });
    const [alternate, setalternate] = useState({ name: '', contactNumber: '', collegeId: '' }) 

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post('http://localhost:9000/events/band/addTeam', {
          teamName,
          leader,
          alternate,
          token
        });
  
        console.log('Response:', response.data);
        setleader({ name: '', contactNumber: '', collegeId: '' });
        setalternate({ name: '', contactNumber: '', collegeId: '' });
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div style={{backgroundColor : "black"}}>
      <Navbar/>

       <section className="registration-form">
                <div className='main'>
                <div className='img'style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
                      <li className=''>January 6 , 2024 @ 1:00 pm</li>
                      <li className=''>Two entries per college</li>
                      <li className=''>Please carry all your instruments and inform about same.</li>
                      <li className=''>For detailed rules please visit <a href='https://drive.google.com/file/d/12ADjgD9CZMaOUB5QMZG-19gIMWQEp19t/view?usp=drive_link'>here</a>.</li>
                      <li className=''><strong>Aditi Chajjed : 7021332166</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                  <div id='titleform'>
                      <p id='heading'>Rhythme Rebels</p>
                    <h3 id='title2'>~Unleash your inner beat</h3>
                  </div>
                
               <div className='input-label'>
                    <input
                        type="text"
                        id="participant-name"
                        name="participant-name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                    <label className='l1' htmlFor="participant-name">Team Name</label>
                    </div>
                    <div className='input-label'>
                    <select
                      id="participant-number"
                      name="participant-number"
                      value={participantNumber}
                      onChange={(e) => setParticipantNumber(e.target.value)}
                      required
                    >
                      <option  value="0">0</option>
                      {[...Array(12).keys()].map((num) => (
                        <option key={num + 4} value={(num + 4).toString()}>
                          {num + 4}
                        </option>
                      ))}
                    </select>
                      <label id="grpNo" htmlFor="participant-number" className='l2'>Number of participants</label>
                    </div>
                 
                    {/* Participant 1 */}
            <div className='input-label'>
              <input
                type="text"
                id="participant-name-1"
                name="participant-name-1"
                value={leader.name}
                onChange={(e) => setleader({ ...leader, name: e.target.value })}
                required
              />
              <label className='l1' htmlFor="participant-name-1">Leader: Name </label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="contact-number-1"
                name="contact-number-1"
                value={leader.contactNumber}
                onChange={(e) => setleader({ ...leader, contactNumber: e.target.value })}
                required
              />
              <label htmlFor="contact-number-1" className='l2'>Leader: Contact Number </label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="college-id-1"
                name="college-id-1"
                value={leader.collegeId}
                onChange={(e) => setleader({ ...leader, collegeId: e.target.value })}
                required
              />
              <label htmlFor="college-id-1" className='l3'>Leader: College ID (Drive Link)</label>
            </div>

            {/* Participant 2 */}
            <div className='input-label'>
              <input
                type="text"
                id="participant-name-2"
                name="participant-name-2"
                value={alternate.name}
                onChange={(e) => setalternate({ ...alternate, name: e.target.value })}
                required
              />
              <label className='l1' htmlFor="participant-name-2">Alternate Leader: Name </label>
            </div>
            <div className='input-label'>
              <input
                type="text"
                id="contact-number-2"
                name="contact-number-2"
                value={alternate.contactNumber}
                onChange={(e) => setalternate({ ...alternate, contactNumber: e.target.value })}
                required
              />
              <label htmlFor="contact-number-2" className='l2'>Alternate Leader: Contact Number </label>
            </div>
            <div className='input-label'>
              <input
                type="url"
                id="college-id-2"
                name="college-id-2"
                value={alternate.collegeId}
                onChange={(e) => setalternate({ ...alternate, collegeId: e.target.value })}
                required
              />
              <label htmlFor="college-id-2" className='l3'>Alternate Leader: College ID (Drive Link)</label>
            </div>
          <button type="submit" className='Sub'>Submit</button>
                </form>
                </div>
            </section>
    </div>

  )
}

export default Band;