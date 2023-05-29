/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import UseTitle from '../../hook/UseTitle';

const Home = () => {
    UseTitle("Home");
    const {r}
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;