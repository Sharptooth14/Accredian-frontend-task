import React, { useState } from 'react'
import Logo from "../../assets/logo.webp"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Courses Button */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <img src={Logo} alt="logo" className='w-24 md:w-30' />
          <button className="hidden lg:block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Courses
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            For Business
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Resources
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            More
          </a>
          <button className="px-4 py-2 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Try for free
          </button>
        </div>

        {/* Mobile Right Section */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Courses
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute w-full bg-white border-t shadow-lg z-50`}>
        <div className="flex flex-col space-y-3 p-4">
          <a href="#" className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            For Business
          </a>
          <a href="#" className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            Resources
          </a>
          <a href="#" className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            About Us
          </a>
          <a href="#" className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            More
          </a>
          <button className="w-full px-4 py-2 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            Login
          </button>
          <button className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar