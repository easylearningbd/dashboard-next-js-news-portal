import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import profile from '../../assets/profile.png'

const Writers = () => {
    return (
<div className='bg-white rounded-lg shadow-md'>
    <div className='flex justify-between items-center px-6 py-4 border-b border-gray-400'>
        <h2 className='text-2xl font-semibold text-gray-800'>Writers</h2>
        <Link to='/dashboard/writer/add' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 transition duration-300'>
            Add Writer
        </Link>
    </div>

    <div className='overflow-x-auto'>
    <table className='w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden'>
    <thead className='bg-gray-100 text-gray-700 uppercase text-sm'>
        <tr>
            <th className='py-4 px-6 text-left'>No</th>
            <th className='py-4 px-6 text-left'>Name</th>
            <th className='py-4 px-6 text-left'>Category</th>
            <th className='py-4 px-6 text-left'>Role</th>
            <th className='py-4 px-6 text-left'>Image</th>
            <th className='py-4 px-6 text-left'>Email</th> 
            <th className='py-4 px-6 text-left'>Action</th>
        </tr> 
    </thead>
    <tbody className='text-gray-600'>
        {[1,2,3,4].map((item,index) => (
            <tr key={index} className='border-t'>
                <td className='py-4 px-6'>1</td>
                <td className='py-4 px-6'>Name </td>
                <td className='py-4 px-6'>Category Name</td>
                <td className='py-4 px-6'>Writer</td>
                <td className='py-4 px-6'>
                    <img className='w-10 h-10 rounded-full object-cover' src={profile} alt="news" />
                </td>
                
                <td className='py-4 px-6'>test@gmail.com</td> 
                <td className='py-4 px-6'>
                    <div className='flex gap-3 text-gray-500'> 
                        <Link to="#" className='p-2 bg-yellow-500 text-white rounded hover:bg-yellow-800'>
                        <FaEdit />
                        </Link> 
                        <Link to="#" className='p-2 bg-red-500 text-white rounded hover:bg-red-800'>
                        <FaTrashAlt />
                        </Link> 
                    </div>
                </td>
            </tr>
        ))

        }

    </tbody>
</table> 

    </div>
    
</div>
    );
};

export default Writers;