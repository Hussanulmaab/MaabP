import React, { useEffect, useRef } from 'react'
import './intro.scss'
import{ FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faHtml5, faReact, faShopify, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { init } from 'ityped'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false, 
      backDelay : 1000,
      backSpeed : 60,
      strings: ['Developer', 'Designer', "freelancer"], })
  }, [])

  return (
    <div className='intro' id='intro'>
        <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className='face'>
                <FontAwesomeIcon icon={faWordpress}  id='face1'/>
              </div>
              <div className='face'>
                <FontAwesomeIcon icon={faReact} id='face2'/>
              </div>
              <div className='face'>
                <FontAwesomeIcon icon={faHtml5} id='face3'/>
              </div>
              <div className='face'>
                <FontAwesomeIcon icon={faCss3} id='face4'/>
              </div>
              <div className='face'>
                <FontAwesomeIcon icon={faShopify} id='face5'/>
              </div>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
              <h1>Hi There,</h1>
              <h2>I am Hussan ul Maab</h2>
              <h3>Freelance <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
              <img src="assets/down.png" alt="" />
            </a>
        </div>
    </div>
  )
}
