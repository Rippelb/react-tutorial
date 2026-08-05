import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Paragrafo from './Paragrafo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Paragrafo />
    <App />
  </StrictMode>,
)
