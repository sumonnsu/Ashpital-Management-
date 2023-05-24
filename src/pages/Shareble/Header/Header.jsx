/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-black bg-opacity-50 px-20">
                <div className="flex-1">
                    <p className=" normal-case text-2xl text-white">𝓐𝓼𝓱𝓹𝓲𝓽𝓪𝓵</p>
                </div>
                <div className="flex-none">
                    <ul className=" menu-horizontal px-1 flex gap-8 items-center text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                        <li className='text-2xl'><Link to="/login"><BsPersonCircle/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;