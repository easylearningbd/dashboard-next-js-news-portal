import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaImages } from "react-icons/fa6";
import JoditEditor from 'jodit-react';
import Gallery from '../components/Gallery';
import { base_url } from '../../config/config';
import axios from 'axios'
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext';

const CreateNews = () => {

    const { store } = useContext(storeContext)


    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(false);

    const editor = useRef(null)
    const [title,setTitle] = useState('')
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const imageHandle = (e) => {
        const {files } = e.target
        if (files.length > 0) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    const added = async (e) => {
        e.preventDefault()
        const formData  = new FormData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('image',image)
        
        try {
            setLoader(true)
            const { data } = await axios.post(`${base_url}/api/news/add`,formData, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            } )              
            setLoader(false) 
            toast.success(data.message)
            setTitle('')
            setDescription('')
            setImage('')
            setImg('')
        } catch (error) {
            setLoader(false)
            toast.error(error.response.data.message)
        }  
    }

    
    const [images, setImages] = useState([]);

    const get_images = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/images`, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            })   
            console.log(data.images)
            setImages(data.images)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        get_images()
    },[])



    return (
<div className='bg-white shadow-md rounded-md p-6'>
    <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-gray-700'>Add News</h2>
        <Link className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-300' to='/dashboard/news'>View All
        </Link> 
    </div>

    <form onSubmit={added}>
        <div>
            <label htmlFor="title" className='block text-md font-medium text-gray-600 mb-2'>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value) } type="text" placeholder='Enter News Title' name='title' id='title' className='w-full px-4 py-2 border rounded-md border-gray-300 focus:border-blue-500 outline-none transition h-10' required/>
        </div>

        <div>
            <label htmlFor="img" className='w-full h-[240px] flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-500 rounded-lg text-gray-500 hover:border-blue-500 transition mt-4'>
            
            {
                img ? <img src={img} className='w-full h-full' alt='image' /> : <div className='flex justify-center items-center flex-col gap-y-2'>
                <FaImages className='text-4xl mb-2' />
                <span className='font-medium'>Select Image</span>
                </div>
            } 
            </label>
            <input onChange={imageHandle} type="file" className='hidden' id='img' required /> 
        </div>

        <div>
            <div className='flex justify-between items-center mb-2 mt-4'>
                <label htmlFor="description" className='block text-md font-medium text-gray-600'>Description </label>
                <div onClick={() => setShow(true)} className='text-blue-500 hover:text-blue-800 cursor-pointer'>
                <FaImages className='text-2xl ' />
                </div> 
            </div>
            <JoditEditor
             ref={editor}
             value={description}
             tabIndex={1}
             onBlur={value => setDescription(value)}
             onChange={() => {}}
             className='w-full border border-gray-400 rounded-md' />
        </div>

        <div className='mt-4'>
        <button type='submit' disabled={loader} className='px-3 py-[6px] bg-blue-500 rounded-md text-white hover:bg-blue-800'>
        {loader ? 'Loading...' : 'Add News'}
        </button>

    </div>  
    </form>

    {show && <Gallery setShow={setShow} images={images} />}
        <input type="file" multiple id="images" className='hidden' />
</div>



    );
};

export default CreateNews;