/* eslint-disable no-unused-vars */
import React from 'react';
import { GiLoveInjection } from 'react-icons/gi';
import { FaCut } from 'react-icons/fa';
import doctor1 from '../../assets/doctor-1.jpg';
import doctor2 from '../../assets/doctor-2.jpg';
import doctor3 from '../../assets/doctor-3.jpg';

const Services = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-2'>Best Hospital In Town</h1>
                <p className='text-xl mt-3 text-slate-400'>When it comes to health care</p>
            </div>
            <div className='grid grid-cols-3 mx-20 gap-5 mt-10'>
                <div className='shadow-xl'>
                    <div className='px-8 py-8 rounded'>
                        <GiLoveInjection className='text-5xl text-red-600 mx-auto' />
                        <p className='text-center text-3xl mt-5 text-slate-500'>Vaccination</p>
                        <p className='text-center text-lg mt-5'>Vaccination treatment service refers to the medical service provided to individuals to protect them from infectious diseases through vaccination. Vaccination is a preventive measure that involves the administration of vaccines to stimulate the immune system to produce antibodies that can fight and protect against specific diseases.</p>
                    </div>
                </div>
                <div className='shadow-xl'>
                    <div className='px-8 py-8 rounded'>
                        <FaCut className='text-5xl text-red-600 mx-auto' />
                        <p className='text-center text-3xl mt-5 text-slate-500'>Surgery</p>
                        <p className='text-center text-lg mt-5'>Surgery treatment service is a type of medical service that involves the use of surgical procedures to diagnose, treat or manage various health conditions or diseases. It is a complex and specialized field of medicine that requires highly trained and skilled surgeons, nurses, and other medical professionals to provide safe and effective care to patients..</p>
                    </div>
                </div>
                <div className='shadow-xl'>
                    <div className='px-8 py-8 rounded'>
                        <FaCut className='text-5xl text-red-600 mx-auto' />
                        <p className='text-center text-3xl mt-5 text-slate-500'>Pathology</p>
                        <p className='text-center text-lg mt-5'>In our service hospital, the pathology department also plays a pivotal role in cancer diagnosis and treatment. The pathologists analyze tissue samples obtained during biopsies or surgeries to determine the presence of cancer cells, their type, and stage.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center mt-5 mb-5 text-6xl font-bold'>Doctor</h1>
                <p className='text-center text-xl text-slate-500 mb-5'>Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                <div className='max-w-screen-xl grid grid-cols-3 mx-auto gap-3'>
                    {/* card-1 */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={doctor1} alt="Shoes" className='h-52' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <h1>Dr. Shishir Oishy</h1>
                            </h2>
                            <p className="text-slate-500">Gynecologist</p>
                            <p>Dhaka Medical College</p>
                            
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={doctor2} alt="Shoes" className='h-52' /></figure>
                        <div className="card-body">
                            <div className="card-title">
                                <p>Dr. Ashraful Islam</p>
                            </div>
                            <p className="text-slate-500">Medicine Specialist</p>
                            <p>Dhaka Medical College</p>
                            
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={doctor3} alt="Shoes" className='h-52' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p>Dr. Ash</p>
                            </h2>
                            <p className="text-slate-500">Heart Specialist</p>
                            <p>Chittagong Medical College</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;