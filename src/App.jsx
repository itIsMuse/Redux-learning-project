import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Containers/Header'
import ProductListings from './Containers/ProductListings'
import ProductDetails from './Containers/ProductDetails'
import Product from './Containers/Product'
import AboutPage from './Components/AboutPage.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  return (
    <div className='App'>
      <Header />
   <Routes>
      <Route path="/" element={<Navigate to = '/productListings' />} /> 
      <Route path="/productListings" element={<ProductListings />} /> 
      <Route path="/product" element={<Product />} /> 
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='*'> 404 Not Found ! </Route>
    </Routes>
    </div>
  )
}

export default App
