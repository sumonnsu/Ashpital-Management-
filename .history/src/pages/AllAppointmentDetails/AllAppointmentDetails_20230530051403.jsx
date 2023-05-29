import React, { useState } from 'react';

const AllAppointmentDetails = ({ appointments}) => { //appointment,
    // const {age,duration,symbol,doctorName, _id} = appointment;

    const [remainAppoint, setRemainAppoint] = useState([]);
    const handleDelete = (_id) =>{
        fetch(`http://localhost:5000/appointments/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.isConfirmed){
                alert("Appointment delete successfully");

                const remainingAppoint = appointments.filter (appoint => appoint._id != _id);
                setRemainAppoint(remainingAppoint);
            }
        })
    }
    return (
        <div>
            <div className='border pl-10 shadow-xl py-10 '>
                <p>Age: {appointments.age}</p>
                <p>Problem: {appointments.symbol}</p>
                <p>Suffering Time: {appointments.duration}</p>
                <p>Appointed Doctor: {appointments.doctorName}</p>
                <button onClick={() => handleDelete(appointments_id)} className='btn btn-outline btn- mt-5'>Delete</button>
            </div>
        </div>
    );
};

export default AllAppointmentDetails;