import React from 'react';
import '../header/header.css';
import logo from '../../assets/img/logo.png';

function Header() {
  return(
    <header className='header'>
      <img className='logo' src={logo} alt='logo'></img>
    </header>
  );
}
export default Header;