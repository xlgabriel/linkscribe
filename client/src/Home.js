import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';

function Home() {
    return (
        <div>
            <Header />
            <SideBar />
            <Outlet />
        </div>
    );
}

export default Home;
