import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { MdDashboard } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { PiUsersFill } from "react-icons/pi";
import { FaHouseUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";


const Sidebar = () => {
    const { pathname } = useLocation();
    // console.log(pathname);
    const userInfo = {
        role: "writer"
      } 

    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-[#dadaff]'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link to='/'>
            <img className='w-[190px] h-[35px]' src="https://i.ibb.co.com/WcB36Jq/mainlogo.png" alt="" />
                </Link> 
            </div>
<ul className='px-3 flex flex-col gap-y-1 font-medium'>
    {
        userInfo.role === 'admin' ? <>
        <li>
        <Link to='/dashboard/admin' className={`px-3 ${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><MdDashboard /></span>
        <span className='text-[18px]'>Dashboard</span>
        </Link>
    </li>

    <li>
        <Link to='/dashboard/writer/add' className={`px-3 ${pathname === '/dashboard/writer/add' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><MdDashboard /></span>
        <span className='text-[18px]'>Add Writer</span>
        </Link>
    </li>

    <li>
        <Link to='/dashboard/writers' className={`px-3 ${pathname === '/dashboard/writers' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><PiUsersFill  /></span>
        <span className='text-[18px]'>Writers</span>
        </Link>
    </li>
        
        </> : <>
        <li>
        <Link to='/dashboard/writer' className={`px-3 ${pathname === '/dashboard/writer' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><MdDashboard /></span>
        <span className='text-[18px]'>Dashboard</span>
        </Link>
    </li>

    <li>
        <Link to='/dashboard/news/create' className={`px-3 ${pathname === '/dashboard/news/create' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><IoMdAdd  /></span>
        <span className='text-[18px]'>Add News</span>
        </Link>
    </li>
        
        </>
    }
 

    <li>
        <Link to='/dashboard/news' className={`px-3 ${pathname === '/dashboard/news' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><BiNews /></span>
        <span className='text-[18px]'>News</span>
        </Link>
    </li>
 
    <li>
        <Link to='/dashboard/profile' className={`px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `} >
        <span className='text-[18px]'><FaHouseUser   /></span>
        <span className='text-[18px]'>Profile</span>
        </Link>
    </li>





</ul>

           
        </div>
    );
};

export default Sidebar;