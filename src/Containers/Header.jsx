import React from 'react'

const Header = () => {
  return (
   <div> 
    <div className = "fixed top-0 left-0 w-full bg-transparent p-4  text-black shadow-md z-50">
    <div className = "container mx-auto flex justify-between items-center px-4 py-3">
      {/*  Logo  */}
      <div className = "text-xl font-bold">
        <a href="#">Logo</a>
      </div>
      {/*  Nav  */}
      <nav className = "flex space-x-4">
        <a href="#home" className = "hover:underline">Home</a>
        <a href="#about" className = "hover:underline">About</a>
        <a href="#services" className = "hover:underline">Services</a>
        <a href="#contact" className = "hover:underline">Contact</a>
      </nav>
    </div>
  </div>

  </div>
  )
}
//work on the header component
export default Header
