import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Master from './component/Master.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <Master/>
 </BrowserRouter>
  </StrictMode>,
)