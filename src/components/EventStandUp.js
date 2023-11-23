import React, { useState } from 'react';
import image from "../images/standupimg.jpg"; 
import axios from 'axios';

import Navbar from "./Navbar";

export default function EventForm() {
    const [participantName, setParticipantName] = useState('');
    const [collegeId, setCollegeId] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("clicked");
    
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('http://localhost:9000/events/standup/addParticipant', {
                participantName,
                collegeId,
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
        <div style={{backgroundColor : "black"}}>
            <Navbar/>
            <section className="registration-form">
                <div className='main'>
                <div className='img'style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }} >
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
                    <div id='titleform'>
                          <p id='heading'>Only Puns</p>
                          <h3 id='title2'>~Sell your jokes</h3>
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
                    <div id='btn'>
                        <button type="submit" className='Sub'>Submit</button>
                    </div>
                  
                </form>
                </div>
            </section>
        </div>
    );
}