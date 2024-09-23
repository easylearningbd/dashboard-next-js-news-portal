import React, { useContext, useEffect, useState } from 'react';
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import storeContext from '../../context/storeContext';
import { base_url } from '../../config/config';
import axios from 'axios'
import { convert } from 'html-to-text'
import { toast } from 'react-hot-toast';

const NewsContent = () => {

    const { store } = useContext(storeContext)
    const [news,setNews] = useState([])
    const [ all_news, set_all_news] = useState([])

    const [parPage, setParPage] = useState(5)
    const [pages,setPages] = useState(0)
    const [page,setPage] = useState(1)
    

    const get_news = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/news`, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            })   
            set_all_news(data.news)
            setNews(data.news)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        get_news()
    },[])

    useEffect(() => {
        if (news.length > 0) {
            const calculate_page = Math.ceil(news.length / parPage)
            setPages(calculate_page)
        }
    },[news,parPage])

    const deleteNews = async (newsId) => {
        if (window.confirm('Are you sure to delete?')) {
            try {
                const { data } = await axios.delete(`${base_url}/api/news/delete/${newsId}`, {
                    headers: {
                        'Authorization' : `Bearer ${store.token}`
                    }
                })   
                toast.success(data.message)
                get_news();
            } catch (error) {
                console.log(error)
            } 
        } 
    }

    const search_news  = (e) => {
        const tempNews = all_news.filter(n => n.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
        setNews(tempNews)
        setPage(1)
        setParPage(5)
    }

    const type_filter = (e) => {
        if (e.target.value === '') {
            setNews(all_news)
            setPage(1)
            setParPage(5)

        } else {
            const tempNews = all_news.filter(n => n.status === e.target.value)
            setNews(tempNews)
            setPage(1)
            setParPage(5)
        }
    }

    const [res,set_res] = useState({
        id: '',
        loader: false
    })

    const update_status = async (status, news_id) => {

    }

    return (
<div className='bg-gray-50 min-h-screen p-6'>
    <div className='flex items-center gap-4 mb-6'>
        <select onChange={type_filter} name="status" className='w-48 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400'>
            <option value="">--- Select Status ---</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
        </select>
        <input onChange={search_news} type="text" placeholder='Search News' className='w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none' /> 
    </div>

    <div className='overflow-x-auto'>
<table className='w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden'>
    <thead className='bg-gray-100 text-gray-700 uppercase text-sm'>
        <tr>
            <th className='py-4 px-6 text-left'>No</th>
            <th className='py-4 px-6 text-left'>Title</th>
            <th className='py-4 px-6 text-left'>Image</th>
            <th className='py-4 px-6 text-left'>Category</th>
            <th className='py-4 px-6 text-left'>Description</th>
            <th className='py-4 px-6 text-left'>Date</th>
            <th className='py-4 px-6 text-left'>Status</th>
            <th className='py-4 px-6 text-left'>Action</th>
        </tr> 
    </thead>
    <tbody className='text-gray-600'>
        {
       news.length > 0 && news.slice((page - 1) * parPage, page * parPage).map((n,i) => (
            <tr key={i} className='border-t'>
                <td className='py-4 px-6'>{i+1}</td>
                <td className='py-4 px-6'>{ n.title.slice(0,15) }...</td>
                <td className='py-4 px-6'>
                    <img className='w-10 h-10 rounded-full object-cover' src={ n.image } alt="news" />
                </td>
                <td className='py-4 px-6'>{ n.category }</td>
                <td className='py-4 px-6'>{convert(n.description).slice(0,15)}...</td>
                <td className='py-4 px-6'>{ n.date }</td>
               
    {
        store?.userInfo?.role === 'admin' ? 
        <td className='py-4 px-6'>
        {
            n.status === 'pending' && <span onClick={() => update_status('active',n._id)} className='px-2 py-[2px] bg-blue-200 text-blue-800 rounded-md text-xs cursor-pointer'>{res.loader && res.id === n._id ? 'Loading..' : n.status} 
            </span>
        }
        {
            n.status === 'active' && <span onClick={() => update_status('deactive',n._id)} className='px-2 py-[2px] bg-green-200 text-green-800 rounded-md text-xs cursor-pointer'>{res.loader && res.id === n._id ? 'Loading..' : n.status} 
            </span>
        }
        {
            n.status === 'deactive' && <span onClick={() => update_status('active',n._id)} className='px-2 py-[2px] bg-red-200 text-red-800 rounded-md text-xs cursor-pointer'>{res.loader && res.id === n._id ? 'Loading..' : n.status} 
            </span>
        }
        </td>  
         :
        <td className='py-4 px-6'>
        {
            n.status === 'pending' && <span className='px-2 py-[2px] bg-blue-200 text-blue-800 rounded-md text-xs'>{n.status} 
            </span>
        }
         {
            n.status === 'active' && <span className='px-2 py-[2px] bg-blue-200 text-blue-800 rounded-md text-xs'>{n.status} 
            </span>
        }
         {
            n.status === 'deactive' && <span className='px-2 py-[2px] bg-blue-200 text-blue-800 rounded-md text-xs'>{n.status} 
            </span>
        }
        </td>
    
    }
               
               
                <td className='py-4 px-6'>
                    <div className='flex gap-3 text-gray-500'>
                        <Link to="#" className='p-2 bg-blue-500 text-white rounded hover:bg-blue-800'>
                        <FaEye />
                        </Link> 
                {
                    store?.userInfo?.role === 'writer' && <>
                     <Link to={`/dashboard/news/edit/${n._id}`} className='p-2 bg-yellow-500 text-white rounded hover:bg-yellow-800'>
                        <FaEdit />
                        </Link> 
                    </>
                }       
                       

                        <button onClick={() => deleteNews(n._id) } className='p-2 bg-red-500 text-white rounded hover:bg-red-800'>
                        <FaTrashAlt />
                        </button> 
                    </div>
                </td>
            </tr>
        ))

        }

    </tbody>
</table> 
    </div>

 
<div className='flex justify-between items-center py-6'>
    <div className='flex items-center gap-4'>
        <label className='text-sm font-semibold'>News Per Page:</label>
        <select value={parPage} onChange={(e) => {
            setParPage(parseInt(e.target.value))
            setPage(1)
        }} name="category" id="category" className='px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    </div>

    <div className='flex items-center gap-4 text-sm text-gray-600'>
        <span className='font-bold'> {(page - 1) * parPage + 1}/{news.length} - {pages} </span>
        <div className='flex gap-2'>
        <IoIosArrowBack onClick={() => {
            if (page > 1) setPage(page - 1)  
        }} className='w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800' />
        <IoIosArrowForward onClick={() => {
            if (page < pages) setPage(page + 1)  
        }} className='w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800' />
        </div> 
    </div> 
</div>

    
</div>
    );
};

export default NewsContent;