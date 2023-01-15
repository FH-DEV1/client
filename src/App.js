import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
//import React, { useState } from "react";
import { Login } from "./pages/Login";

function App() {
  //const [currentForm, setCurrentForm] = useState('login')

  return (
    <Router>
      <Routes>
        <Route path={Login}/>
      </Routes>
    </Router>
  );
}

export default App;
//bitcoin is cool
