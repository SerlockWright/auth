import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Loader from "../components/common/Loader";

export default function Login() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}
