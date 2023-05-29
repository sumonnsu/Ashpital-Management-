import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../hook/UseTitle';
import { AuthContext } from '../../providers/AuthProvider';
import AllAppointmentDetails from '../AllAppointmentDetails/AllAppointmentDetails';
import app from '../../firebase/firebase.config';

const AllAppointment = () => {
    UseTitle("Appointments");
    const {user} = useContext(AuthContext);

    const [appointments, setAppointments] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/appointment/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAppointments(data);
        })
    },[])
    return (
        <div className='grid grid-cols-2 w-3/4 mx-auto mt-10 mb-10 gap-5'>
            {
                appointments.map(appointment => <AllAppointmentDetails key={appointment._id} appointment={appointment}></AllAppointmentDetails>)
            }
        </div>
    );
};

export default AllAppointment;