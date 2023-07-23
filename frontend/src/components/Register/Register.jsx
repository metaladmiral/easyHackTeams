/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios";
import { toast } from "react-hot-toast";
import { Navigate } from 'react-router-dom';

//hhh
const Register = () => {
    const[name,setName]=React.useState("");
    const[email,setEmail]=React.useState("");
    const[skills,setSkills]=React.useState("");
    const[password,setPassword]=React.useState("");
    const[register,setRegister]=React.useState("");

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/user/register', // Corrected endpoint for user registration
          {
            username: name,
            email: email,
            password: password,
            interests: skills,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        // Handle the response data here (e.g., show success message, redirect user, etc.)
        console.log(response.data);
        toast.success('Registration successful!');
        setRegister(true);
      } catch (error) {
        // Handle any errors that occur during the request
        console.log('Error:', error);
        toast.error('Registration failed. Please try again.');
        setRegister(false)
      }
    };

if(register){
  return <Navigate to={"/login"} />
}
  return (
    <div>
        <form onSubmit={onSubmit} style={styles.form}>
         <div className="mb-2">
            <label className="form-label">Name</label>
            <input type="text" className='form-control' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
         </div>
         <div className="mb-2">
            <label className="form-label">Email address</label>
            <input type="text" className='form-control' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
         </div>
         <div className="mb-2">
            <label className="form-label">Skills/Interests</label>
            <input type="text" className='form-control' placeholder='(seperate with commas)' onChange={(e)=>{setSkills(e.target.value)}}/>
         </div>
         <div className="mb-2">
            <label className="form-label">Password</label>
            <input type="password"  className='form-control' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
         </div>
            <button className="btn btn-primary">Sign Up</button>
        </form>
    </div>
  )
}


const styles={
    form:{
        display:"flex",
        'flex-direction':"column",
        width: "40%",
        margin: "auto",
        'margin-top': "3rem",
        gap:"1.6rem"
    }
  }

export default Register