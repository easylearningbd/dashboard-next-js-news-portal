import React from 'react';
import Title from '../Title';
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard';

const DetailsNews = ({category}) => {
    return (
        <div className='w-full flex flex-col gap-[14px] pr-2 py-8'>
            <Title title={category} />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 lg:gap-x-3'>
            <SimpleDetailsNewCard type="details_news" height={300} />
            <SimpleDetailsNewCard type="details_news" height={300} />

        </div>
             
        </div>
    );
};

export default DetailsNews;