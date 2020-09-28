import React from 'react'
import './header.component.scss'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {Link } from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to ='/'>
        <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/">CONTACT</Link>

        </div>
        

    </div>
)

export default Header