import React from 'react';
import {useState} from 'react';
import './log.css';
import axios from 'axios';
function Signup () {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(` http://localhost:8002/user`,{name,email,password})
        .then(res=>alert('User Registered Successfully'))
        .catch(err=>{console.log(err)})
    }

  return (
    <div className="bot">
    <div className="login">
       
    <h1 className="head1">SignUp</h1> 
      <form  onSubmit={handleSubmit}>
        <input type="text" className="text" placeholder="Name" value={name} onChange={(event)=>{setName(event.target.value)}}/><br></br>
        <input type="email" className="text" placeholder="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/><br></br>
        <input type="password" className="text" placeholder="Password"  value={password} onChange={(event)=>{setPassword(event.target.value)}}/><br></br><br></br>
        <button type="Submit" className='but1'>SignUp</button>
      </form>
    </div>
    </div>
  )
}

export default Signup