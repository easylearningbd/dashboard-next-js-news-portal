import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
    return (
        <div>
            <Sidebar/>
            <div>
                <Header/>
            </div>
            <h1>Main Layout</h1>
        </div>
    ); 
};

export default MainLayout;