import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { useRoute } from './router.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'

function Root() {
  const path = useRoute()
  return path === '/contact' ? <Contact /> : <Home />
}

createRoot(document.getElementById('root')).render(<Root />)
