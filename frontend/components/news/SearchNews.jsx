'use client'
import { base_api_url } from '@/config/config';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchNews = () => {

    const [news, setNews] = useState([])
    const searchValue = useSearchParams()
    const value = searchValue.get('value')
     
    const get_news = async () => {
        if (!value) return;
        try {
            const res = await fetch(`${base_api_url}/api/search/news?value=${value}`)
            const { news } = await res.json();
            setNews(news)
            
        } catch (error) {
            console.log(error)
        }  
    }

    useEffect(() => {
        get_news()
    },[value])


    return (
        <div>
            aaaa
        </div>
    );
};

export default SearchNews;