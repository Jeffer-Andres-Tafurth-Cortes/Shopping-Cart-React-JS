import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cart } from './Cart'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Cart />
    </React.StrictMode>,
  </BrowserRouter>
)
