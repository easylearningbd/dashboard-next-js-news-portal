import React from 'react';
import Title from '../Title';
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard';

const DetailsNewsRow = ({category,type}) => {
    return (
        <div className='w-full flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md'>
            <Title title={category} />

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
            <SimpleDetailsNewCard type={type} height={300} />

        </div>
          
        </div>
    );
};

export default DetailsNewsRow;