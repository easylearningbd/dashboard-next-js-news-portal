import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({item}) => {
    return (
<div className='bg-[#e5effe] shadow-md rounded-md flex p-4 hover:shadow-md transition-shadow duration-300'>
    <div className='relative flex-shrink-0 overflow-hidden rounded-md group'>
        <div className='group-hover:scale-110 transform transition-transform duration-700 w-[100px] md:w-[160px] h-[93px] lg:w-[100px] relative'>
            <Image
            layout='fill'
            className='object-cover rounded-md'
            src="https://res.cloudinary.com/dbxtifnah/image/upload/v1726960712/news_images/m3xqhhcapfjaudcdlkfl.png" alt='Image'
            />
        
        <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'> 
        </div> 
        </div>  
    </div> 

    <div className='flex flex-col justify-between pl-4 w-full'>
            <Link href={`/`} className='text-xs font-semibold text-blue-600 hover:underline'>
            Category Name
            </Link>

            <Link href={`/`} className='text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300'>
            What puzzles reveal about the depths of our own
            </Link> 
            <div className='flex gap-x-3 text-xs text-gray-500'>
                <span className='font-semibold'>02-09-2024</span>
                <span className='font-semibold'>By Ariyan</span>
            </div>
      </div>    


</div>
    );
};

export default NewsCard;