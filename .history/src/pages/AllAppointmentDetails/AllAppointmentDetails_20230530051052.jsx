import React from 'react';

const AllAppointmentDetails = ({appointment, appointments}) => {
    const {age,duration,symbol,doctorName, _id} = appointment;
    const handleDelete = (_id) =>{
        fetch(`http://localhost:5000/appointments/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.isConfirmed){
                alert("Appointment delete successfully");

                const remainingAppoint = appointments.filter (appoint => appoint.)
            }
        })
    }
    return (
        <div>
            <div className='border pl-10 shadow-xl py-10 '>
                <p>Age: {age}</p>
                <p>Problem: {symbol}</p>
                <p>Suffering Time: {duration}</p>
                <p>Appointed Doctor: {doctorName}</p>
                <button className='btn btn-outline btn- mt-5'>Delete</button>
            </div>
        </div>
    );
};

export default AllAppointmentDetails;