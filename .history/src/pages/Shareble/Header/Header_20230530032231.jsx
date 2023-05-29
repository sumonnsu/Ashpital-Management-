/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut, role} = useContext(AuthContext);

    const logout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

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
                        {
                            user  ? <div className='flex gap-5 justify-center items-center'>
                                <Link to="/appointment">Appointment</Link>
                                <Link to="/blood">Blood Req</Link>
                                <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
                                <button onClick={logOut}>Logout</button>
                                <Link to="/feedback">Feedback</Link>
                                <Link to="/appointments">All appointment</Link>
                            </div> :
                                <div className='flex gap-5'>
                                    <li><Link to="/registration">Registration</Link></li>
                                    <li className='text-2xl'><Link to="/login"><BsPersonCircle /></Link></li>
                                </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;