import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecentNewsFooter = () => {
    return (
<div className='w-full flex flex-col gap-y-[14px]'>
    <div className={`text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#5271ff] before:h-full before:-left-0 pl-3`}>
        Recent News
    </div>

    <div className='grid grid-cols-1 gap-y-2 pt-1'>
{
[1,2,3].map((r,i) => {
    if (i < 4) {
        return <Link key={i} href={`/`} className='flex w-full'>
        <div className='group relative overflow-hidden w-[80px] h-[65px]'>
            <div className='w-[80px] h-[65px] block group-hover:scale-[1.1] transition-all duration-[1s]'>
                <Image
                className=''
                layout='fill'
                src={'https://res.cloudinary.com/dbxtifnah/image/upload/v1727025332/news_images/oxpv0zjlkcqsvnd6v94e.png'}
                alt='images'                
                />  
           <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' href={"#"}> 
                 </div>
            </div>  
         </div>

    <div className='w-[calc(100%-90px)] pl-2'>
        <div className='flex flex-col gap-y-1'>
            <h2 className='text-sm font-semibold text-white hover:text-[#c80000]'>What puzzles reveal about </h2>
            <div className='flex gap-x-2 text-xs font-normal text-white'>
        <span>20-09-2024</span>
        <span>By Ariyan</span>
            </div> 
        </div> 
    </div>

        </Link>
    }
})
}

    </div> 
</div>
    );
};

export default RecentNewsFooter;