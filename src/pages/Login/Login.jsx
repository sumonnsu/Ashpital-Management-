/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseTitle from '../../hook/UseTitle';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    UseTitle("Login");
    const {signIn} = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log (email,password);

        signIn(email,password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setError("");
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='mt-10 mb-10'>
            <form
            onSubmit={handleLogin}
                className="p-10 bg-white rounded-lg shadow-lg w-1/3 mx-auto"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
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
                {
                    error ? <p className='mt-2 text-center text-red-500'>{error}</p> : <p className='mt-2 text-center text-green-500'>{success}</p>
                }
            </form>
        </div>
    );
};

export default Login;