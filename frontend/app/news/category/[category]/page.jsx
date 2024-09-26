import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';

const page = () => {
    return (
<div>
    <div className='bg-white shadow-sm py-4'>
        <div className='px-4 md:px-8 w-full'>
        <Breadcrumb one="Category" two="Sports" />
        </div>

    </div>
    
</div>
    );
};

export default page;