import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username,
      password,
    }).then((res) => {
      const { username, token, userId } = res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      setIsAuth(true);
    });
  };
  return (
    <div className="login">
      <h1>Se connecter :</h1>

      <input
        placeholder="Nom d'utilisateur"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="Mot de passe"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}> Se connecter</button>
    </div>
  );
}

export default Login;