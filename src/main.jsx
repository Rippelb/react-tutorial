import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import './tema.css'
import AppTarefas from './pages/tarefas/AppTarefas.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <AppTarefas /> */}
    <App />
  </StrictMode>,
)
