import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from './dashboard/pages/Login';
import MainLayout from './dashboard/layout/MainLayout';
import Adminindex from './dashboard/pages/Adminindex';
import ProtectDashboard from './middleware/ProtectDashboard';
import ProtectRole from './middleware/ProtectRole';
import Unable from './dashboard/pages/Unable';
 

function App() { 

  return (
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>} />
      
        <Route path='/dashboard' element={<ProtectDashboard/>}>
        <Route path='' element={<MainLayout/>} >
          <Route path='' element={<Navigate to='/dashboard/admin'/>}/>
          <Route path='unable-access' element={<Unable/>} />

          <Route path='' element={<ProtectRole role='admin' />}>
            <Route path='admin' element={<Adminindex/>} />
          </Route> 

          </Route>  
        </Route>
     </Routes>
     
     </BrowserRouter>
  )
}

export default App
