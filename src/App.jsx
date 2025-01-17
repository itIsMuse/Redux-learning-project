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
      <Header />
   <Routes>
      <Route path="/" element={<Navigate to = '/ProductListings' />} /> 
      <Route path="/ProductListings" element={<ProductListings />} /> 
      <Route path="/:productID" element={<ProductDetails />} /> 
      <Route path='*'> 404 Not Found ! </Route>
    </Routes>
    </div>
  )
}

export default App
