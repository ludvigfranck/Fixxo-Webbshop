import React from 'react'
import Navbar from './Navbar'
import Showcase from './Showcase'


function Header() {
  return (
    <header className="__gradient-gray">
      <Navbar />
      <Showcase />
    </header>
  )
}

export default Header