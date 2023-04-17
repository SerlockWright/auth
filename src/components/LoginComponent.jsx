import React, { useState } from 'react'
import {LoginAPI, GoogleSigninAPI} from '../api/AuthAPI'
import "../Sass/LoginComponent.scss";
import LinkLogo from "../asset/logo.jpg"
import { useNavigate } from "react-router-dom";
import {BsTelephoneFill, BsGoogle} from "react-icons/bs";
import {toast} from 'react-toastify'

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password); 
      toast.success("Sign in successfully!")
      console.log(res);
    } catch (error) {
      toast.error("Please check your email and password!")
    }
  }

  const googleSignin = () => {
    let response = GoogleSigninAPI();
    console.log(response);
  }
  return (
    <div className="login-wrapper">
      <img src={LinkLogo} alt='' className="logo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="OR" />
      <div className='btn-container'>
        <button className="login-btn" onClick={googleSignin}>
          <BsGoogle size={28}/> Sign in with Google
        </button>
      </div>
      <div className='btn-container'>
        <button className="login-btn">
          <BsTelephoneFill /> Sign in with phone  
        </button>
        <p className="go-to-signup">
          New to User?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
      {/* <div className="google-btn-container">
        
      </div> */}
    </div>
  )
}
