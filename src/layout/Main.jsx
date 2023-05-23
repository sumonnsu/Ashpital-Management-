/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shareble/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default Main;