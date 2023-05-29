import React from 'react';
import UseTitle from '../../hook/UseTitle';

const Blood = () => {
    UseTitle("Blood");
    const handleBloodReq = event =>{
        event.preventDefault();

        const from = event.target;
        const date = from.date.value;
        const group = from.blood.value;

        const blood = {date,group};
        console.log(blood);

        fetch(`http://localhost:5000/blood`,{
            method:"POST"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        
    }
    return (
        <div className='mt-10 mb-10'>
            <form className='w-1/3 mx-auto' onSubmit={handleBloodReq}>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date:</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        type="date"
                        id="date"
                        name='date'
                    />
                </div>
                <div>
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        id="bloodGroup"
                        name='blood'
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div className='mt-4'>
                    <input type="submit" value="Blood Req" className='w-full btn btn-primary' />
                </div>
            </form>
        </div>
    );
};

export default Blood;