import Image from 'next/image';
import React from 'react';
 
const SimpleNewsCard = () => {
    return (
<div className='group relative'>
    <div className='overflow-hidden'>
        <div className='h-[250px] sm:h-[470px] w-full'>
            <Image className='' layout='fill' src={'https://res.cloudinary.com/dbxtifnah/image/upload/v1727089746/news_images/rdoyrpq7gexo1phaclnf.webp'} alt='images' />

        </div>

    </div>
    
</div>
    );
};

export default SimpleNewsCard;