import React from 'react';
import Title from '../Title';
import NewsCard from './item/NewsCard';

const RecentNews = () => {
    return (
        <div className='w-full flex flex-col gap-y-[6px] bg-white pt-4'>
            <div className='pl-4'>
                <Title title="Recent News" /> 
            </div>
        <div className='grid grid-cols-1 gap-y-1'>
            {
                [1,2,3,4].map((item,i) => (
                    <NewsCard key={i} item={item} />
                ))
            }

        </div>
            
        </div>
    );
};

export default RecentNews;