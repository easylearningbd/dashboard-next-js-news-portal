import React from 'react';

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
    
</div>

    );
};

export default Adminindex;