import React from 'react';
import { Link } from 'react-router-dom';

const CreateNews = () => {
    return (
        <div className='bg-white shadow-md rounded-md p-6'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold text-gray-700'>Add News</h2>
                <Link className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-300' to='/dashboard/news'>View All
                </Link>

            </div>
             
        </div>
    );
};

export default CreateNews;