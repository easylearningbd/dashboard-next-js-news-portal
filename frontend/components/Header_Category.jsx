'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdList } from "react-icons/io"; 

const Header_Category = () => {

    const path = usePathname()
    const data = [
        {
            id: 1,
            name: 'Sports'
        },
        {
            id: 2,
            name: 'Travel'
        },
        {
            id: 3,
            name: 'Education'
        },
        {
            id: 4,
            name: 'National'
        },
        {
            id: 5,
            name: 'Politice'
        },
        {
            id: 6,
            name: 'Technology'
        },
    ]

    const [cate_show, set_cate_show] = useState(false)

    return (
<div className='w-full'>
    <div className='bg-[#5271ff] w-full text-white uppercase font-semibold relative'>
        <div className='px-8 flex justify-between items-center relative h-[50px]'>
            <div onClick={() => set_cate_show(!cate_show)} className={` text-3xl flex lg:hidden font-bold h-full w-[50px] cursor-pointer justify-center items-center ${cate_show ? 'bg-[#00000026]' : '' } hover:bg-[#00000026] `}>
                <IoMdList /> 
            </div>

        <div className='flex-wrap hidden lg:flex'>
            <Link className={`px-6 font-medium py-[13px] ${path === '/' ? 'bg-[#00000026]' : ''} `} href={'/'} > Home </Link>

            {
                data.map((c,i) => <Link key={i} className={`px-6 font-medium py-[13px] ${path === c.name ? 'bg-[#00000026]' : ''} `} href={'/'} > { c.name} </Link>)
            }

        </div>

        </div>
    </div>
    
</div>
    );
};

export default Header_Category;