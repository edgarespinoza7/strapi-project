import React from 'react'
import NavLink from './NavLink'

const Header = () => {
  return (
    <header className=' bg-white/50'>
      <div className='max-w-5xl mx-auto  flex justify-between items-center p-4'>
        <h2 className='font-bold text-2xl text-blue-800'>Strapi</h2>
        <nav>
          <ul className='flex gap-4'>
            <li><NavLink text='Home' path='/' /></li>
            <li><NavLink text='About' path='/about' /></li>
            <li><NavLink text='Contact' path='#' /></li>

          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header