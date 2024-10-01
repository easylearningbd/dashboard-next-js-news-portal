'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

const Search = () => {

    const [state, setState] = useState('')
     const router = useRouter()

    const search = (e) => {
        e.preventDefault()
        router.push(`/search/news?value=${state}`)
        setState('')
    }

    return (
        <div className='p-4 bg-white'>
            <form onSubmit={search} className='flex'>
                <div className='w-[calc(100%-45px)] h-[45px]'>
                    <input type="text" required value={state} onChange={(e) => setState(e.target.value) } className='w-full h-full p-2 border border-l-slate-300 outline-none bg-slate-100' /> 
                </div>
    <button className='w-[45px] outline-none h-[45px] flex justify-center items-center bg-blue-600 hover:bg-blue-800 text-white text-xl'>
    <IoSearch />
    </button>

            </form>
            
        </div>
    );
};

export default Search;