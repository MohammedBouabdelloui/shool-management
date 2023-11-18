import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import logo from "../components/ui/logo.svg"
function GestLayout() {
  return (<>
        <header>
          <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
                  
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className=" h-10 w-auto" src={logo} alt="Your Company" />
                    <h1 className='text-blue-600 text-3xl '>school</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:block absolute right-0 ">
                    <div className="flex space-x-14 ">
                      <Link to={'/'} className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium '  >Home</Link>
                      <Link to={'/user'}  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">User</Link>
                      <Link to={'/login'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">login</Link>
                      <Link to={'/register'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">register</Link>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </nav>
      </header>
        <main className='container'><Outlet /></main>
       
    </>)
}

export default GestLayout