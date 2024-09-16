import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaImages } from "react-icons/fa6";
import JoditEditor from 'jodit-react';


const CreateNews = () => {
    const [loader, setLoader] = useState(false);

    return (
<div className='bg-white shadow-md rounded-md p-6'>
    <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-gray-700'>Add News</h2>
        <Link className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-300' to='/dashboard/news'>View All
        </Link> 
    </div>

    <form>
        <div>
            <label htmlFor="title" className='block text-md font-medium text-gray-600 mb-2'>Title</label>
            <input type="text" placeholder='Enter News Title' name='title' id='title' className='w-full px-4 py-2 border rounded-md border-gray-300 focus:border-blue-500 outline-none transition h-10' required/>
        </div>

        <div>
            <label htmlFor="img" className='w-full h-[240px] flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-500 rounded-lg text-gray-500 hover:border-blue-500 transition mt-4'>
            <FaImages className='text-4xl mb-2' />
            <span className='font-medium'>Select Image</span>
            </label>
            <input type="file" className='hidden' id='img' required /> 
        </div>

        <div>
            <div className='flex justify-between items-center mb-2 mt-4'>
                <label htmlFor="description" className='block text-md font-medium text-gray-600'>Description </label>
                <div className='text-blue-500 hover:text-blue-800 cursor-pointer'>
                <FaImages className='text-2xl ' />
                </div> 
            </div>
            <JoditEditor className='w-full border border-gray-400 rounded-md' />
        </div>

        <div className='mt-4'>
        <button type='submit' disabled={loader} className='px-3 py-[6px] bg-blue-500 rounded-md text-white hover:bg-blue-800'>
        {loader ? 'Loading...' : 'Add News'}
        </button>

    </div>


    </form>
        
</div>



    );
};

export default CreateNews;