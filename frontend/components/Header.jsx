import React from 'react';
import moment from 'moment';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Header = () => {
    return (
        <header className='bg-[#333333] text-[#cccccc]'>
            <div className='px-5 lg:px-8 flex justify-between items-center py-2 border-b border-[#444444]'>
                <span className='text-sm font-medium'>{moment().format('LLLL')}</span>

    <div className='flex space-x-2'>
        <a href="" className='w-8 h-8 flex justify-center items-center bg-[#2045ea] rounded-full hover:bg-slate-500 transition duration-200'><FaFacebookF  /></a>

        <a href="" className='w-8 h-8 flex justify-center items-center bg-[#5271ff] rounded-full hover:bg-slate-500 transition duration-200'><FaTwitter  /></a>

        <a href="" className='w-8 h-8 flex justify-center items-center bg-[#ff5157] rounded-full hover:bg-slate-500 transition duration-200'><FaYoutube  /></a>
    </div>

            </div>
            
        </header>
    );
};

export default Header;