import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Body from "./pages/body"
import Signup from "./pages/signup";
import Login from "./pages/login";
import Testimony from "./components/Testimony";



function App() {
  return (
     <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/testimony" element={<Testimony />} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
