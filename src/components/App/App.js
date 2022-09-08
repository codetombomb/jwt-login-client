import { useEffect, useState } from "react";
import "./App.css";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:3000/";

function App() {
  const [user, setUser] = useState({});
  const [authMode, setAuthMode] = useState("login");
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const resp = await fetch(API_BASE_URL + "login");
    const data = await resp.json();
  };

  const onSignUpSubmit = async (credentials) => {
    const config = {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    }
    // debugger
    const resp = await fetch("http://localhost:3000/users", config)
    const data = await resp.json()
    console.log(data);
  }

  useEffect(() => {
    if (!user.user_id) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route
          path="/sign-up"
          element={<SignUp onSignUpSubmit={onSignUpSubmit} />}
        />

      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
