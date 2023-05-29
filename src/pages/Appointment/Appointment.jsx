import React, { useContext } from 'react';
import UseTitle from '../../hook/UseTitle';
import { BsCheckLg } from 'react-icons/bs';
import { AuthContext } from '../../providers/AuthProvider';

const Appointment = () => {
    UseTitle("Appointment");

    const { user } = useContext(AuthContext);
    // console.log(user);

    const handleAppointment = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const age = form.age.value;
        const duration = form.duration.value;
        const symbol = form.symbol.value;
        const doctorName = form.doctorName.value;
        const addAppointment = { age, duration, symbol, doctorName, email };
        console.log(addAppointment);

        fetch('http://localhost:5000/appointment', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(addAppointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Appointment req send successfully");
                    event.target.reset();
                }
            })
    }
    return (
        <div className='my-20'>
            <form className='w-1/3 mx-auto' onSubmit={handleAppointment}>
                <p className='text-center font-bold text-xl'>Appointment Req</p>
                <div className="p-4 bg-white rounded shadow">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                            Age
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                            Problem Duration
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            id="duration"
                            name="duration"
                            placeholder="Enter problem duration"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symbol">
                            Symbol
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            id="symbol"
                            name="symbol"
                            placeholder="Enter symbol"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctorName">
                            Doctor Name
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            id="doctorName"
                            name="doctorName"
                            placeholder="Enter doctor name"
                        />
                    </div>
                    <div>
                        <input type="submit" value="Appointment Req" className='w-full btn btn-primary' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Appointment;