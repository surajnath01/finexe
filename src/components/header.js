import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import profile from '../img/Profile.svg'
import { LuMenu } from "react-icons/lu";
import finexelogo from '../img/finexe logo.png'



function Header() {
  return (
    <>
        <div className='header-1'>
            <div className='header-logo'>
                <img src={finexelogo} alt='Finexe'/>
            </div>
            <div className='header-list'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/todayshotpicks'>Today's Hot Pick</Link></li>
                    <li><Link to='/'>Recommended for you</Link></li>
                    <li><Link to='/'>Explore</Link></li>

                </ul>
            </div>
            <div className='header-side'>
                <div>
                <p> Welcome, <span>Darshan!</span></p>
                <img src={profile} alt='profile'/>
                </div>

                <div>
                    <Link><LuMenu/></Link>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Header;