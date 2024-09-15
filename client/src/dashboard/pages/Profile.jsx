import React from 'react';
import { FaImage } from "react-icons/fa";

const Profile = () => {
    return (
<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5'>
    <div className='bg-white p-6 rounded-lg flex items-center shadow-md'>
        <div className='flex-shrink-0'>
            <label htmlFor="img" className='w-[150px] h-[150px] flex flex-col justify-center items-center rounded-full bg-gray-200 border-2 border-dashed border-gray-300 text-gray-600 cursor-pointer hover:bg-gray-200 transition duration-300'>
            <FaImage className='text-4xl' />
            <span className='mt-2'>Select Image</span>
            </label>
            <input type="file" id='img' className='hidden' /> 
        </div>

        <div className='ml-6 text-gray-700 flex flex-col space-y-2'>
            <h3 className='text-xl font-bold'>Kazi Ariyan</h3>
            <p className='text-sm'>Email: <span className='text-gray-600'>ariyan@gmail.com</span></p>
            <p className='text-sm'>Category: <span className='text-gray-600'>Education</span></p>

        </div>



    </div>
    
</div>
    );
};

export default Profile;