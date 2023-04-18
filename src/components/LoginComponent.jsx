import React, { useState } from "react";
import { LoginAPI, GoogleSigninAPI, RegisterAPI } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/LoginComponent.css";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Sign in successfully!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (error) {
      toast.error("Please check your email and password!");
    }
  };

  const googleSignin = async () => {
    let response = await GoogleSigninAPI();
    toast.success("Sign in successfully!");
    console.log(response);
  };

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      console.log(res);
    } catch (error) {
      toast.error("Cannot Create your Account");
    }
  };
  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>

          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(event) =>
                    setCredentials({
                      ...credentails,
                      email: event.target.value,
                    })
                  }
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) =>
                    setCredentials({
                      ...credentails,
                      password: event.target.value,
                    })
                  }
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In"
                  onClick={login}
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In With Google"
                  onClick={googleSignin}
                ></input>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In With Phone"
                />
              </div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(event) =>
                    setCredentials({ ...credentails, name: event.target.value })
                  }
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) =>
                    setCredentials({
                      ...credentails,
                      password: event.target.value,
                    })
                  }
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(event) =>
                    setCredentials({
                      ...credentails,
                      email: event.target.value,
                    })
                  }
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={register}
                />
              </div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
