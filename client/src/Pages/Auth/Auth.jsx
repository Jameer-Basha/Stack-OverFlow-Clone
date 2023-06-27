import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import './Auth.css';
import { signup , login } from '../../actions/auth';

const Auth = () => {
    const [issignup ,setIssignup]=useState(false)
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
/* Prevent the page relode and username and password in url */
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!email || !password){
            alert("Enter email and password")
        }
        if(issignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name, email,password},navigate))
        }
        else{
            dispatch(login({email,password},navigate))
        }
    }
    const handleSwitch=()=>{
        setIssignup(!issignup)
    }
  return (
   <section className='auth-section'>
    <p></p>
        {issignup && <AboutAuth/>}
        <div className='auth-container-2'>
            {!issignup && <img src={icon} alt ='stackoverflow icon' className='login-logo'/>}
            <form onSubmit={handleSubmit}>
                {issignup &&(
                    <label htmlFor="name">
                        <h4>Display Name</h4>
                        <input type="text"  name='name' id='name' onChange={(e)=> {setName(e.target.value)}}/>
                    </label>
                )}
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e)=> {setEmail(e.target.value)}}/>
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    {!issignup && <p style={{color:"#007ac6",fontSize:"13px"}}>Forget Password</p>}
                    </div>
                    <input type="password" name='password' id='password' onChange={(e)=> {setPassword(e.target.value)}} />
                </label>
                {issignup&&(
                    <p style={{color:"#666767",fontSize:"13px"}}>
                        Password must contains upper and lower cases<br/> and atleast one character and one number
                    </p>
                )}
                
                <button type='submit' className='auth-btn'>{issignup ? 'Signup' : 'login' }</button>
            </form>
            {issignup&&(
                <p style={{color:"#666767",fontSize:"13px"}}>
                    By clicking “Sign up”, you agree to our 
                    <span style={{color:"#007ac6"}}> terms of <br /> service </span>,
                    <span style={{color:"#007ac6"}}> privacy policy</span> and 
                    <span style={{color:"#007ac6"}}>cookie policy</span>
                </p>
            )}
            <p>
                {issignup? "Already have an account " : "Don't have an account "}
                <button type='button' className="handle-switch-btn" onClick={handleSwitch}>{issignup? 'login': 'signup'}</button>
            </p>
        </div>
   </section> 
  )
}

export default Auth
