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


<div className='bg-white p-6 rounded-lg shadow-md text-gray-700'>
  <h2 className='text-lg font-bold text-center mb-5'>Change Password</h2>
  <form>
    <div className='space-y-4'>
        <div>
            <label htmlFor="old_password" className='block text-md font-semibold text-gray-600'>Old Password </label>
            <input type="password" id='old_password' name='old_password' placeholder='Enter Old Passowrd' className='w-full px-3 py-2 mt-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition duration-300' />
        </div>


        <div>
            <label htmlFor="new_password" className='block text-md font-semibold text-gray-600'>New Password </label>
            <input type="password" id='new_password' name='new_password' placeholder='Enter New Passowrd' className='w-full px-3 py-2 mt-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition duration-300' />
        </div> 
    </div>

    <div className='mt-6'>
        <button type='submit' className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300'>
            Change Password
        </button>

    </div>

  </form>

</div>

    
</div>
    );
};

export default Profile;