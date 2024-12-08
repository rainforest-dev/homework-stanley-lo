import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Detail from './pages/Detail'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex-col-center size-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cards/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
