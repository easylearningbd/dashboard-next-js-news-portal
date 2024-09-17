import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { base_url } from '../../config/config';
import axios from 'axios'
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast'

const EditWriter = () => {

    const {id} = useParams()
    const {store} = useContext(storeContext)
    const [loader, setLoader] = useState(false); 
    const navigate = useNavigate()  

    const [state, setState] = useState({
        name: "",
        email: "",
        category: "",
        role: ""
    })
//    console.log(state)

const getWriterData = async () => { 
    try { 
        const { data } = 
        await axios.get(`${base_url}/api/news/writer/${id}`, {
            headers: {
                'Authorization' : `Bearer ${store.token}`
            }
        } )      
        setState({
            name: data.writer.name,
            email: data.writer.email,
            category: data.writer.category,
            role: data.writer.role,
        })        
          
    } catch (error) { 
        toast.error('Failed to load writer data')
    }
}

    useEffect(() => {
        getWriterData();
    },[id]);

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateWriter = async (e) => {
        e.preventDefault() 
        try {
            setLoader(true)
            await axios.put(`${base_url}/api/update/writer/${id}`,state, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            } )              
            setLoader(false) 
            toast.success('Writer Update Success')
            navigate('/dashboard/writers') 
        } catch (error) {
            setLoader(false)
            toast.error(error.response.data.message)
        }
    }


    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-semibold'>Edit Writers</h2>
                <Link className='px-3 py-[6px] bg-blue-500 rounded-md text-white hover:bg-blue-800' to='/dashboard/writers'>
                Writers
                </Link> 
            </div>
        
        <div className='p-4'>
            <form onSubmit={handleUpdateWriter}>
                <div className='grid grid-cols-2 gap-x-8 mb-3'>
                    
                    <div className='flex flex-col gap-y-2'>
                    <label htmlFor="name" className='text-md font-semibold text-gray-600'>Name</label>
                    <input onChange={inputHandle} value={state.name} required type="text" placeholder='Name' name='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10' id='name' /> 
                    </div>
        
                    <div className='flex flex-col gap-y-2'>
                    <label htmlFor="name" className='text-md font-semibold text-gray-600'>Category</label>
                    <select  onChange={inputHandle} value={state.category} required name="category" id='category' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10'>
                    <option value="">--- Select Category ---</option>
                    <option value="Education">Education</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                    <option value="International">International</option>
                    <option value="Sports">Sports</option>
                    <option value="Technology">Technology</option>
                    </select> 
                    </div> 
                </div> 
        
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
                
                <div className='flex flex-col gap-y-2'>
                <label htmlFor="email" className='text-md font-semibold text-gray-600'>Email</label>
                <input onChange={inputHandle} value={state.email} required type="email" placeholder='Email' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10' id='email' /> 
                </div>
        
                <div className='flex flex-col gap-y-2'>
                <label htmlFor="role" className='text-md font-semibold text-gray-600'>Role</label>
                <input onChange={inputHandle} value={state.role} required type="text" placeholder='Role' name='role' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10' id='role' /> 
                </div> 
            </div>
        
            <div className='mt-4'>
                <button disabled={loader} className='px-3 py-[6px] bg-blue-500 rounded-md text-white hover:bg-blue-800'>
                {loader ? 'Loading...' : 'Update Writer'}
                </button>
        
            </div>
        
            </form>
        
        </div>
        
            
        </div>
            );
};

export default EditWriter;