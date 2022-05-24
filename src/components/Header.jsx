import React from 'react'
import logo from '../img/logo.png'
const Header = () => {
  return (
    <header>
    <img src={logo}/>
    <a href='#'>HOME</a>
    <a href='#'>ABOUT</a>
    <a href='#'>SERVICES</a>
    <a href='#'>CONTACTS</a>
  <input type="search" placeholder='Поиск' />
  </header>
  )
}

export default Header