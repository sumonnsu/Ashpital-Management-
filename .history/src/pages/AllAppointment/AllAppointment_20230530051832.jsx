import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../hook/UseTitle';
import { AuthContext } from '../../providers/AuthProvider';
import AllAppointmentDetails from '../AllAppointmentDetails/AllAppointmentDetails';
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
    return (
        <div>
            <h1 className='text-center mt-5 mb-5 text-2xl'>Appointments</h1>
            <div className='grid grid-cols-2 w-3/4 mx-auto mt-10 mb-10 gap-5'>
                {/* {
                    appointments.map(appointment => <AllAppointmentDetails key={appointment._id} appointment={appointment} appointments={appointments}></AllAppointmentDetails>)
                } */}
                {
                    appointments.map(appointment => <div key={} className='border pl-10 shadow-xl py-10 '>
                        <p>Age: {age}</p>
                        <p>Problem: {symbol}</p>
                        <p>Suffering Time: {duration}</p>
                        <p>Appointed Doctor: {doctorName}</p>
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline btn- mt-5'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllAppointment;