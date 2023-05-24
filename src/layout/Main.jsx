/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shareble/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shareble/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;