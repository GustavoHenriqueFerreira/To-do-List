import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import Home from './pages/Home/index'
import Header from './components/Header/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)