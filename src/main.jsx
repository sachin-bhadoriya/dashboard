import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(<App />)

const loading = document.getElementById("loading")

if(loading){
  loading.remove()
}