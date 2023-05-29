/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseTitle from '../../hook/UseTitle';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { BsCheckLg } from 'react-icons/bs';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    UseTitle("Registration");
    const navigate = useNavigate();

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const { signUp } = useContext(AuthContext);

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const role = form.role.value;
        console.log(name, email, password, photo, role);

        
        signUp(email, password, role)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
                event.target.reset();
                setError("");
                // navigate('/');
                console.log('reg done');
                profile(result.user, name, photo);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });

        const profile = (user, name, photo, role) => {
            updateProfile(...user, {
                displayName: name,
                photoURL: photo,
                role: role
            })
                .then(result => { console.log("Updated") })
                .catch(error => console.log * error.message)
        }
    }
    return (
        <div className='mt-10 mb-10'>
            <form
                onSubmit={handleRegisterForm}
                className="p-10 bg-white rounded-lg shadow-lg w-1/3 mx-auto"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <select
                        className="input input-bordered w-full"
                        id="role"
                        name="role"
                        defaultValue="user" // Set the default value for the role (e.g., "user")
                    >
                        <option value="">Select User Category</option>
                        <option value="user">User</option> // Add available role options
                        {/* <option value="admin">Admin</option> */}
                        <option value="doctor">Doctor</option>
                        <option value="shopKeeper">ShopKeeper</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        id="name"
                        name='name'
                        placeholder="Enter your name"
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
                        name='password'
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input input-bordered w-full"
                        type="email"
                        id="email"
                        name='email'
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                        Photo URL
                    </label>
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        id="photo"
                        name='photo'
                        placeholder="Enter the URL for your photo"
                    />
                </div>
                <div className="">
                    <input type="submit" className="btn btn-primary w-full" value="Registration" />
                </div>
                <p className='text-center mt-2'>Already have an account? <Link to="/login" className='btn-link'>Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;

// signUp(email,password)
        // .then(result =>{
        //     const createUser = result.user;
        //     console.log(createUser);
        //     event.target.reset();
        //     setError(""),
        //     // navigate('/');
        //     console.log('reg done');
        //     profile(result.user,name,photo);
        // })
        // .catch(error =>{
        //     console.log(error);
        //     setError(error.message);
        // })

        // signUp(email, password, role)
        //     .then(result => {
        //         const createUser = result.user;
        //         console.log(createUser);
        //         event.target.reset();
        //         setError("");
        //         // navigate('/');
        //         console.log('reg done');
        //         profile(result.user, name, photo);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         setError(error.message);
        //     });
