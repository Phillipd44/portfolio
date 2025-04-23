import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to ="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transition-transform duration-200 hover:scale-110">
        <p className='name-gradient_text'>PD</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-black'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
