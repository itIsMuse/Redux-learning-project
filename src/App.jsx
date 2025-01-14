import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Containers/Header'
import ProductListings from './Containers/ProductListings'
import ProductDetails from './Containers/ProductDetails'
import Product from './Containers/Product'

function App() {
  return (
    <div className='App'>
   <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/:productID" element={<ProductDetails />} /> 
    </Routes>
    </div>
  )
}

export default App
