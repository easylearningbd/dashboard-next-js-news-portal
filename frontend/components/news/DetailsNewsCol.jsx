import React from 'react';
import Title from '../Title';
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard';
import NewsCard from './item/NewsCard';

const DetailsNewsCol = ({category}) => {
    return (
        <div className='w-full flex flex-col gap-[14px] pl-2'>
            <Title title={category} />
            <div className='grid grid-cols-1 gap-y-6'>
                <SimpleDetailsNewCard type="details_news" height={300} /> 
            </div>
        <div className='grid grid-cols-1 gap-y-[8px]'>
            {
                [1,2,3,4].map((item,i) => <NewsCard item={item} key={i} /> 
                )
            }

        </div>
             
        </div>
    );
};

export default DetailsNewsCol;