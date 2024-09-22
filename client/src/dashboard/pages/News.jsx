import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import NewsContent from '../components/NewsContent';
import storeContext from './../../context/storeContext';

const News = () => {

    const { store } = useContext(storeContext)

 
    return (
<div className='bg-white rounded-md'>
    <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'> News</h2>

        {
            store.userInfo.role !== 'admin' && <Link className='px-4 py-[8px] bg-blue-500 rounded-lg text-white hover:bg-blue-800' 
            to="/dashboard/news/create"> Create News 
            </Link>
        } 
    </div>
    <NewsContent/>
    
</div>
    );
};

export default News;