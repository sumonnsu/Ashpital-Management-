import React from 'react';

const AllAppointmentDetails = ({appointment}) => {
    const {age,duration,symbol,doctorName, _id} = appointment;
    const handleDelete = (_id) =>{
        fetch(`http://localhost:5000/appointments/${_id}`)
        .then(res => res.json())
        .then(data => )
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