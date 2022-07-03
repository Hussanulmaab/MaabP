import React from 'react'
import './topbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
              <a href="#intro" className='logo'>Maab.</a>
              <div className="itemContainer">
                <FontAwesomeIcon className='icon' icon={faUser} />
                <span> +92 341 6443338</span>
              </div>
              <div className='itemContainer'>
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                <span> h.ulmaab431@gmail.com</span>
              </div>
          </div>
          <div className="right">
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
          </div>
        </div>
    </div>
  )
}
