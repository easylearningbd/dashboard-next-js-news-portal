import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import news from '../../assets/news.webp'

const Adminindex = () => {

    return (
<div className='mt-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {[
            {title: 'Total News', value:50, color: 'text-red-500'},
            {title: 'Pending News', value:55, color: 'text-purple-500'},
            {title: 'Active News', value:22, color: 'text-cyan-500'},
            {title: 'Deactive News', value:15, color: 'text-blue-500'},
            {title: 'Writers', value:10, color: 'text-green-500'},
        ].map((start, i) => (
            <div key={i} className='p-8 bg-white rounded-lg shadow-md flex flex-col items-center gap-2'>
                <span className={`text-4xl font-bold ${start.color}`}>
                {start.value}
                </span>
                <span className='text-md font-semibold text-gray-600'>{start.title}</span>
            </div>
        ))
        } 
    </div>

    <div className='bg-white p-6 mt-8 rounded-lg shadow-md'>
        <div className='flex justify-between items-center pb-4 border-b border-gray-500'>
            <h2 className='text-xl font-bold text-gray-600'>Recent News</h2>
            <Link to='/news' className='text-blue-500 hover:text-blue-800 font-semibold transition duration-300'>
                View All 
            </Link> 
        </div>

 <div className='overflow-x-auto mt-6'>
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
                    <img className='w-10 h-10 rounded-full object-cover' src={news} alt="news" />
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
                    </div>
                </td>
            </tr>
        ))

        }

    </tbody>
</table> 

 </div>


    </div> 
    
</div>

    );
};

export default Adminindex;