import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from './dashboard/pages/Login';
import MainLayout from './dashboard/layout/MainLayout';
import Adminindex from './dashboard/pages/Adminindex';
import ProtectDashboard from './middleware/ProtectDashboard';
import ProtectRole from './middleware/ProtectRole';
import Unable from './dashboard/pages/Unable';
import Profile from './dashboard/pages/Profile';
import News from './dashboard/pages/News';
import AddWriter from './dashboard/pages/AddWriter';
import Writers from './dashboard/pages/Writers';
import Writerindex from './dashboard/pages/Writerindex';
import CreateNews from './dashboard/pages/CreateNews';
import storeContext from './context/storeContext';
import EditWriter from './dashboard/pages/EditWriter';
 

function App() { 

   const {store} = useContext(storeContext)

  return (
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>} />
      
        <Route path='/dashboard' element={<ProtectDashboard/>}>
        <Route path='' element={<MainLayout/>} >
          <Route path='' element={store.userInfo.role === 'admin' ? <Navigate to='/dashboard/admin'/> : <Navigate to='/dashboard/writer'/>}/>
          <Route path='unable-access' element={<Unable/>} />

          <Route path='profile' element={<Profile/>} />
          <Route path='news' element={<News/>} />

          <Route path='' element={<ProtectRole role='admin' />}>
            <Route path='admin' element={<Adminindex/>} />
            <Route path='writer/add' element={<AddWriter/>} />
            <Route path='writers' element={<Writers/>} />
            <Route path='writer/edit/:id' element={<EditWriter/>} />
          </Route> 

          <Route path='' element={<ProtectRole role='writer' />}>
            <Route path='writer' element={<Writerindex/>} />
            <Route path='news/create' element={<CreateNews/>} /> 
          </Route> 

          </Route>  
        </Route>
     </Routes>
     
     </BrowserRouter>
  )
}

export default App
