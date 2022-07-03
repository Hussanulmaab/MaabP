import React from 'react'
import "./menu.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faTasks, faStar,faEnvelope} from "@fortawesome/free-solid-svg-icons"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
                {/* <FontAwesomeIcon icon={faHome} className="faHome" /> */}
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
                {/* <FontAwesomeIcon icon={faBriefcase} className="faBriefcase" /> */}
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
                {/* <FontAwesomeIcon icon={faEnvelope} className="faEnvelope" /> */}
            </li>
        </ul>
    </div>
  )
}


// <li onClick={() => setMenuOpen(false)}> 
// <a href="#works">Works</a>
// {/* <FontAwesomeIcon icon={faTasks} className="faTasks" /> */}
// </li>
// <li onClick={() => setMenuOpen(false)}>
// <a href="#testimonials">Testimonials</a>
// {/* <FontAwesomeIcon icon={faStar} className="faStar" /> */}
// </li>