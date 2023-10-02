import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';

export const MainApp = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  )
}

export default MainApp;
