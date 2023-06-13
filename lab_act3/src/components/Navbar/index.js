import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'
 
export default function Navbar () {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='container nav'>
                <h1 className='logo' >BIGLANG GWAPO</h1><i className='fab fa-react'></i>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Portfolio</a>
                    </li>
                    <li>
                        <a href='/'>Blog</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>BECAME A MEMBER</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                     
                </div>
            </div>
        </div>
    )
}