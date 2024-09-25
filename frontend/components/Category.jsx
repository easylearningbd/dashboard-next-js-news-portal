import Link from 'next/link';
import React from 'react';

const Category = ({titleStyle}) => {
    return (
        <div className='w-full flex flex-col gap-y-[14px]'>
             <div className={`text-xl font-bold ${titleStyle} relative before:absolute before:w-[4px] before:bg-[#5271ff] before:h-full before:-left-0 pl-3`}>
                Category
            </div>

        <div className={`flex flex-col justify-start items-start text-sm gap-y-3 ${titleStyle} pt-1 `}>
            {
                [1,2,3,4,5,6].map((item,i) => (
                    <li className='list-none font-semibold' key={i}>
                        <Link href={`/`}> Category (5)
                        </Link>
                    </li>
                ))
            }

        </div>
            
        </div>
    );
};

export default Category;