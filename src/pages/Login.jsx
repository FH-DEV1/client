import React from "react";
import { useState } from "react"
import { Navigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    return(
        <div className="auth-form-container">
            <form className="login-form"onSubmit={handleSubmit}> 
                <label htmlFor="username">Nom d'utilisateur : </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username"></input>
                <button type="submit">Jouer</button>
            </form>
        </div>
    )
}