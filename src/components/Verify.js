import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import "../sass/adminVerify.css"
import HeroCommon from "./HeroCommon";
import NeonButton from "./NeonButton";

const Verify = () => {
    const [values, setValues] = useState([]);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const customStyles = {
        content: {
          backgroundColor: "rgba(71, 70, 68, 0.7)",
          backdropFilter: "blur(10px)",
          border: "none",
        },
      };

    useEffect(() => {
        const getData = async() => {
            const res = await fetch("http://localhost:9000/admin/verify");
            const fetchedData = await res.json();
            setValues(fetchedData);
        }
        getData();
    }, []);

    const handleSubmit = async(ccCode) => {
        // e.preventDefault();

        axios.put("http://localhost:9000/admin/verify/ccCode")
        .then((response) => {
            if (!response.data.success) {
                console.log(response.data.message);
            } else {
            console.log(response.data);
         }
         navigate("/admin/verify");
        });
    };

    return (
        <>
            <HeroCommon
            imgClass="hero-events"
            title=" "
            subtitle=" "
            customStyles={customStyles}
        />
            <br />
            <h2 style={{textAlign: "center"}}>Logged In users</h2>
            <table bordered hover size="sm" style={{maxWidth: "1000px"}} align='center'>
            <thead>
                <tr>
                <th>CC_Code</th>
                <th>College Name</th>
                <th>College Id</th>
                <th>Name</th>
                <th>Mobile Number</th>  
                <th></th>              
                </tr>
            </thead>
            <tbody>
                {
                values.map( (getValues) => (
                    <tr>
                        <td>{ getValues.ccCode }</td>
                        <td>{ getValues.collegeName }</td>
                        <td>{ getValues.collegeId }</td>
                        <td>{ getValues.name }</td>
                        <td>{ getValues.mobNo }</td>
                        <td><button type="submit" onClick={handleSubmit(getValues.ccCode)}>Verify</button></td>
                    </tr>
                ))
                }  
            </tbody>              
            </table>
        </>
    )
}

export default Verify