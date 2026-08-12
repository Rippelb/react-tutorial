import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import AppTarefas from './AppTarefas.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AppTarefas />
    {/* <App /> */}
  </StrictMode>,
)
