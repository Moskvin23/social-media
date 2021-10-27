import React from 'react'
import Logo from '../../img/Logo.png'
import style from './Header.module.css'

function Header() {
    return (
       <header className={style.header}>
       <img src={Logo} alt='logo'/>
     </header>
    )
}

export default Header
