import React from 'react';
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NewsContent = () => {

    return (
<div className='bg-gray-50 min-h-screen p-6'>
    <div className='flex items-center gap-4 mb-6'>
        <select name="status" className='w-48 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400'>
            <option value="">--- Select Status ---</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
        </select>
        <input type="text" placeholder='Search News' className='w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none' /> 
    </div>

    <div className='overflow-x-auto'>
<table className='w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden'>
    <thead className='bg-gray-100 text-gray-700 uppercase text-sm'>
        <tr>
            <th className='py-4 px-6 text-left'>No</th>
            <th className='py-4 px-6 text-left'>Title</th>
            <th className='py-4 px-6 text-left'>Image</th>
            <th className='py-4 px-6 text-left'>Category</th>
            <th className='py-4 px-6 text-left'>Description</th>
            <th className='py-4 px-6 text-left'>Date</th>
            <th className='py-4 px-6 text-left'>Status</th>
            <th className='py-4 px-6 text-left'>Action</th>
        </tr> 
    </thead>
    <tbody className='text-gray-600'>
        {[1,2,3].map((item,index) => (
            <tr key={index} className='border-t'>
                <td className='py-4 px-6'>1</td>
                <td className='py-4 px-6'>News Title</td>
                <td className='py-4 px-6'>
                    <img className='w-10 h-10 rounded-full object-cover' src={profile} alt="news" />
                </td>
                <td className='py-4 px-6'>Category Name</td>
                <td className='py-4 px-6'>Description</td>
                <td className='py-4 px-6'>12-08-2024</td>
                <td className='py-4 px-6'>
                    <span className='px-3 py-1 bg-green-200 rounded-full text-xs font-semibold'>Active</span>
                </td>
                <td className='py-4 px-6'>
                    <div className='flex gap-3 text-gray-500'>
                        <Link to="#" className='p-2 bg-blue-500 text-white rounded hover:bg-blue-800'>
                        <FaEye />
                        </Link> 
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

 
<div className='flex justify-between items-center py-6'>
    <div className='flex items-center gap-4'>
        <label className='text-sm font-semibold'>News Per Page:</label>
        <select name="category" id="category" className='px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    </div>

    <div className='flex items-center gap-4 text-sm text-gray-600'>
        <span>6/10 of 5</span>
        <div className='flex gap-2'>
        <IoIosArrowBack className='w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800' />
        <IoIosArrowForward  className='w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800' />
        </div> 
    </div> 
</div>

    
</div>
    );
};

export default NewsContent;