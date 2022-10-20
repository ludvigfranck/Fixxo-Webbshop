import React from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase'


function Header() {
  return (
    <header className="__gradient-gray">
      <Navbar />
      <Showcase />
    </header>
  )
}

export default Header