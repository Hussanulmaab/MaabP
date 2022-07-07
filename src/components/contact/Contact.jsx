import React, { useState } from 'react'
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

  const [message,setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
          <div className="left">
            <img src="https://www.enigmafellowship.com/wp-content/uploads/2020/10/contact-header-art-1.png" alt="" />
          </div>
          <div className="right">
            <h2>Contact.</h2>
            <form action="">
              <input type="text" placeholder='Email'/>
              <input type="numbers" placeholder='Number'/>
              <textarea name="message" id="" cols="30" rows="10" placeholder='Message Us'></textarea>
              <button type='submit'>Send</button>
              {message && <span> Thanks, I will reply ASAP </span>}
              <FontAwesomeIcon className='icon' icon={faUser} />
              <h3>+92 341 6443338</h3>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <h3>h.ulmaab431@gmail.com</h3>
            </form>
          </div>
    </div>
  )
}
 