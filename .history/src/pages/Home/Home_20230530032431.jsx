/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import UseTitle from '../../hook/UseTitle';

const Home = () => {
    UseTitle("Home");
    const {role} = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;