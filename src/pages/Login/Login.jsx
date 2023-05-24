/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../hook/UseTitle';

const Login = () => {
    UseTitle("Login");
    return (
        <div className='mt-10 mb-10'>
            <form
                className="p-10 bg-white rounded-lg shadow-lg w-1/3 mx-auto"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input input-bordered w-full"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input input-bordered w-full"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="">
                    <input type="submit" className="btn btn-primary w-full" value="login" />
                </div>
                <p className='text-center mt-2'>Don't have any account? <Link to="/registration" className='btn-link'>Create account</Link></p>
            </form>
        </div>
    );
};

export default Login;