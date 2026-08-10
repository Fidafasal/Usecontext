import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sample from './components/Sample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sample>
      <App />
    </Sample>

  </StrictMode>,
)
