/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import UseTitle from '../../hook/UseTitle';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    UseTitle("Home");
    console.log(role);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;