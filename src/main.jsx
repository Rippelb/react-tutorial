import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tema.css'
import App from './App.jsx'
import AppTarefas from './pages/Tarefas/AppTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppTarefas /> */}
    <App />
  </StrictMode>,
)
