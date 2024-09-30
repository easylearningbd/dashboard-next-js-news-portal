import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { base_url } from '../../config/config';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext';

const AddWriter = () => {


    const [loader, setLoader] = useState(false);

    const navigate = useNavigate()
    const { store } = useContext(storeContext)

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        category: ""
    })
   console.log(state)

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault() 
        try {
            setLoader(true)
            const { data } = await axios.post(`${base_url}/api/writer/add`,state, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            } )              
            setLoader(false) 
            toast.success(data.message)
            navigate('/dashboard/writers') 
        } catch (error) {
            setLoader(false)
            toast.error(error.response.data.message)
        }
    }


    return (
<div className='bg-white rounded-md'>
    <div className='flex justify-between p-4'>
        <h2 className='text-xl font-semibold'>Add Writers</h2>
        <Link className='px-3 py-[6px] bg-blue-500 rounded-md text-white hover:bg-blue-800' to='/dashboard/writers'>
        Writers
        </Link> 
    </div>

<div className='p-4'>
    <form onSubmit={submit}>
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
            <option value="Business">Business</option>
            </select> 
            </div> 
        </div> 

    <div className='grid grid-cols-2 gap-x-8 mb-3'>
        
        <div className='flex flex-col gap-y-2'>
        <label htmlFor="email" className='text-md font-semibold text-gray-600'>Email</label>
        <input onChange={inputHandle} value={state.email} required type="email" placeholder='Email' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10' id='email' /> 
        </div>

        <div className='flex flex-col gap-y-2'>
        <label htmlFor="password" className='text-md font-semibold text-gray-600'>Password</label>
        <input onChange={inputHandle} value={state.password} required type="password" placeholder='Password' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10' id='password' /> 
        </div> 
    </div>

    <div className='mt-4'>
        <button disabled={loader} className='px-3 py-[6px] bg-blue-500 rounded-md text-white hover:bg-blue-800'>
        {loader ? 'Loading...' : 'Add Writer'}
        </button>

    </div>

    </form>

</div>

    
</div>
    );
};

export default AddWriter;