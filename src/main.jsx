import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import VotingApp from './components/VotingApp/VotingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <VotingApp/>
  </StrictMode>,
)
