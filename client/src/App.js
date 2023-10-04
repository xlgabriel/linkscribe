import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import SignUp from './SignUp';
import Home from './Home';
import Categories from './components/Categories';
import Settings from './components/Settings';
import Extract from './components/Extract';
import AdvSearch from './components/AdvSearch';

export const MainApp = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />}>
          <Route path="extract" element={<Extract />} />
          <Route path="categories" element={<Categories />} />
          <Route path="search" element={<AdvSearch />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default MainApp;
