import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import StorePovider from './context/StorePovider.jsx'

createRoot(document.getElementById('root')).render(
  <StorePovider>
    <>
    <App />
    <Toaster/>
    </>
  </StorePovider>,
)
