import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div className='w-full flex flex-col gap-y-[14px]'>
            <div className='text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#5271ff] before:h-full before:-left-0 pl-3'>
                Gallery
            </div>
        <div className='grid grid-cols-3 gap-2'>
            {
                [1,2,3,4,5,6].map((item,i) => (
                    <div key={i} className='w-full h-[85px] relative'>
                        <Image
                        className=''
                        layout='fill'
                        src={'https://res.cloudinary.com/dbxtifnah/image/upload/v1727024773/news_images/exyvlbygul69g61urbyn.png'}
                        alt='gallery image' 
                        /> 
                    </div>
                ))
            }
            
        </div>
            
        </div>
    );
};

export default Gallery;