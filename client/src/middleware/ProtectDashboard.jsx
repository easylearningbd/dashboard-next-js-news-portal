import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import storeContext from '../context/storeContext';

const ProtectDashboard = () => {
     const {store} = useContext(storeContext)
     console.log(store)

    if (store.userInfo) {
        return <Outlet/>
    } else {
        return <Navigate to='/login' />
    }

     
};

export default ProtectDashboard;