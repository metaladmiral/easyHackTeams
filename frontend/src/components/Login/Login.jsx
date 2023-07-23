import axios from 'axios';
import React, { useContext } from 'react'
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom"
import { Context } from '../..';

//bkj
const Login = () => {
    const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context)

    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            'http://127.0.0.1:8000/user/login', // Corrected endpoint for user registration
            {
              
              email: email,
              password: password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          // Handle the response data here (e.g., show success message, redirect user, etc.)
          console.log(response.data);
          if(response.data.userExists){
            setIsAuthenticated(true)
            setUser(response.data.userId)
          }else{
            setIsAuthenticated(false)
            toast.error("user doesnt exist")
            setUser('')
          }
          toast.success('Registration successful!');
        } catch (error) {
          // Handle any errors that occur during the request
          console.log('Error:', error);
          setIsAuthenticated(false)
          setUser('')
          toast.error('Registration failed. Please try again.');
        }
      };
      
    if(isAuthenticated){
        return <Navigate to={"/"}/>
    }
  return (
   <form style={styles.form} onSubmit={onSubmit}>
    <div className='mb-2'>
        <label className="form-label">Email address</label>
        <input type="text" className='form-control' placeholder='Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className='mb-2'>
        <label className="form-label">Password</label>
        <input type="password" placeholder='Password' value={password}  className='form-control' onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <button className="btn btn-primary">Login</button>
   </form>
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

export default Login