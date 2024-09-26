'use client'
import React from 'react';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className='p-4 bg-white'>
            <form className='flex'>
                <div className='w-[calc(100%-45px)] h-[45px]'>
                    <input type="text" required value="" onChange={() => {}} className='w-full h-full p-2 border border-l-slate-300 outline-none bg-slate-100' /> 
                </div>
    <button className='w-[45px] outline-none h-[45px] flex justify-center items-center bg-blue-600 hover:bg-blue-800 text-white text-xl'>
    <IoSearch />
    </button>

            </form>
            
        </div>
    );
};

export default Search;