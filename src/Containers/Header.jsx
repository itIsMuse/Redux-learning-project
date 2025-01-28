import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div> 
    <div className = "fixed top-0 left-0 w-full bg-white p-4  text-black shadow-md z-50 ">
    <div className = "container mx-auto flex justify-between items-center px-4 py-3">
      {/*  Logo  */}
      <div className = "text-xl font-bold">
      <Link to={'/'}className = "hover:grow">My store </Link>
      </div>
      {/*  Nav  */}
      <nav className = "flex space-x-4">
       <Link to={'/'}className = "hover:grow">Home </Link>
       <Link to={'/about'}className = "hover:grow">About </Link>
       <Link to={'/services'}className = "hover:grow">Services </Link>
       <Link to={'/contact'}className = "hover:grow">Contact  </Link>
      </nav>
    </div>
  </div>

  </div>
  )
}
//work on the header component
export default Header
