import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../hook/UseTitle';
import { AuthContext } from '../../providers/AuthProvider';
import app from '../../firebase/firebase.config';

const AllAppointment = () => {
    UseTitle("Appointments");
    const { user } = useContext(AuthContext);
    console.log(user);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppointments(data);
            })
    }, [])

    // const [remainAppoint, setRemainAppoint] = useState([]);
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/appointments/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Appointment delete successfully");
                    const remainingAppoint = appointments.filter(appoint => appoint._id != _id);
                    setAppointments(remainingAppoint);
                }
            })
    }
    return (
        <div>
            <h1 className='text-center mt-5 mb-5 text-2xl'>Appointments</h1>
            <div className='grid grid-cols-2 w-3/4 mx-auto mt-10 mb-10 gap-5'>
                {
                    appointments.map(appointment => <div key={appointment._id} className='border pl-10 shadow-xl py-10 '>
                        <p>Age: {appointment.age}</p>
                        <p>Problem: {appointment.symbol}</p>
                        <p>Suffering Time: {appointment.duration}</p>
                        <p>Appointed Doctor: {appointment.doctorName}</p>
                        <button onClick={() => handleDelete(appointment._id)} className='btn btn-outline btn- mt-5'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllAppointment;