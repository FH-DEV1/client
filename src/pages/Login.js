import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    return (
        <div className="auth-form-container">
                <form className="login-form"onSubmit={handleSubmit}> 
                <h1>Nom d'utilisateur :</h1>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username"></input>
                <button type="submit" onClick={() => {navigate("/join-a-room")}}>{" "}Jouer</button>
            </form>
        </div>
  );
}

export default Login;