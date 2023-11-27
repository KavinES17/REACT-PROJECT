import React from 'react';
import {useState} from 'react';
import './log.css'
import axios from 'axios'
import{Link} from 'react-router-dom';
function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.get(` http://localhost:8002/user?email=${email}&password=${password}`)
        .then(res=>{
            if(res.data.length>0){
                alert('logged in successfully')
            }
            else{
                alert('Invalid username and password')
            }
        })
        .catch(err=>{console.log(err)})

    }
    return(
        <div className="bot">
           
        
         <div className="login">
            <h1 className="head1">LogIn</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" className="text" placeholder='Email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/><br></br>
                <input type="password" className="text" placeholder='Password' value={password} onChange={(event)=>{setPassword(event.target.value)}}/><br></br><br></br>
                <button type="submit"  className='but1' >Login</button>
            </form>
            New User ? Click Here !
            <Link className="s1text" to="/Signup">Signup</Link> 
        </div>
        
        </div>
    )
}
export default Login;