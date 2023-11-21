import React, { useState } from 'react';
import axios from 'axios';
import image from "../images/SemiClassicalDance.jpg"; 
import "../sass/events.css"

export default function SemiClassical() {
    const [participantName, setParticipantName] = useState('');
    const [collegeId, setCollegeId] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("clicked");
    
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('http://localhost:9000/semiclassical/addParticipant', {
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
        <>
            <section className="registration-form">
                <div className='main'>
                <div className='img'style={{backgroundImage:`url(${image})`}}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
        
                        <li className=''>Rules:WebFree. Welcome to CodePen. Sign Up with Google. Sign Up with GitHub. Sign Up with Facebook. </li>
                        <li className=''>Rules:Or, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''>description:OOr, Sign Up with Email. By signing up, you agree to CodePen's Termsr, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''><strong>Contact person:@Tejal-1234567890</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                <h2>Nritta Nada</h2>
                <h3 id='title2'>~Dance in harmony</h3>
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
        </>
    );
}



