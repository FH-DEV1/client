import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import React, { useState } from "react";
import Login from "./pages/Login";
import Join from "./pages/Join";
import ErrorPage from "./pages/ErrorPage";

function App() {
  //const [currentForm, setCurrentForm] = useState('login')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/join-a-room" element={<Join />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;