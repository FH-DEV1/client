// import React from "react";
// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// function Login() {
//     const [username, setUsername] = useState('');
//     let navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(username);
//     }
//     return (
//         <div className="auth-form-container">
//                 <form className="login-form"onSubmit={handleSubmit}> 
//                 <h1>Nom d'utilisateur :</h1>
//                 <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username"></input>
//                 <button type="submit" onClick={() => {navigate("/join-a-room")}}>{" "}Jouer</button>
//             </form>
//         </div>
//   );
// }

// export default Login;



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
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="Password"
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