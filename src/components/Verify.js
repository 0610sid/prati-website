import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
    const [values, setValues] = useState([]);
    const navigate = useNavigate();

      useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://localhost:9000/admin/verify");
                const fetchedData = await res.json();
                setValues(fetchedData)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);

    const handleSubmit = async (ccCode) => {
        axios.put(`http://localhost:9000/admin/verify/${ccCode}`)
            .then((response) => {
                if (!response.data.success) {
                    console.log(response.data.message);
                } else {
                    console.log(response.data);
                }
                // Move navigate inside the else block to avoid navigating on error
                navigate("/admin/verify");
            }); 
    };

    return (
        <>
            <br />
            <h2 style={{textAlign: "center"}}>Logged In users</h2>
            <table border="true" hover="true" size="sm" style={{ maxWidth: "1000px" }} align='center'>
            <thead>
                <tr>
                <th>CC_Code</th>
                <th>College Name</th>
                <th>College Id</th>
                <th>Name</th>
                <th>Mobile Number</th>  
                <th>Button</th>              
                </tr>
            </thead>
            <tbody>
                {values.rows && values.rows.map((getValues) => (
                    <tr>
                        <td>{ getValues.cc_code}</td>
                        <td>{ getValues.collegename }</td>
                        <td>{ getValues.college_id }</td>
                        <td>{ getValues.name }</td>
                        <td>{ getValues.mobile }</td>
                        <td><button type="submit" onClick={() => handleSubmit(getValues.cc_code)}>Verify</button></td>
                    </tr>
                ))
                }  
            </tbody>              
            </table>
        </>
    )
}

export default Verify