'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import logo2 from './Image/madrid-logo-black.jpeg'
import champions from './Image/champions.webp'
import stadium from './Image/night-stadium.jpg'
import players from './Image/saka-control.jpg'
import { useState } from 'react'

const HomeSectionOne = () => {

  const [click, setClick] = useState(true)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)

  const [tap, setTap] = useState(false)

  const handleTap = () => {
    setTap(!tap)
  }

  const handleClick = () => {
    setClick(true)
    setClick2(false)
    setClick3(false)
    setClick4(false)
  }

  const handleClick2 = () => {
    setClick(false)
    setClick2(true)
    setClick3(false)
    setClick4(false)
  }

  const handleClick3 = () => {
    setClick(false)
    setClick2(false)
    setClick3(true)
    setClick4(false)
  }

  const handleClick4 = () => {
    setClick(false)
    setClick2(false)
    setClick3(false)
    setClick4(true)
    
  }
  
  return (
    <div>
      <div className='top'>
        <div className="navbar">

          <div className="left">
            <h2>Madridsta</h2>
            <Image width={50} height={40} className='img' src={logo2} alt='' />
          </div>

          <div className="middle">
              <span className='paragraph' onClick={handleClick}>
              <p className={click === true ? ('tap') : ''}>News</p>
              </span>

              <span className='paragraph' onClick={handleClick2}>
              <p className={click2 === true ? ('tap') : ''}>Fixtures</p>
              </span>

              <span className='paragraph' onClick={handleClick3}>
              <p className={click3 === true ? ('tap') : ''}>Standings</p>
              </span>

              <span className='paragraph' onClick={handleClick4}>
                <a href="players">
                  <p className={click4 === true ? ('tap') : ''}>Players</p>
                </a>
              </span>
          </div>

          <div className='drop-1'>
            <div className='icon'>
              <p onClick={handleTap}>▼</p>
            </div>

            {tap === true &&
              <div className='dropdown'>
                <p>News</p>
                <p>Fixtures</p>
                <p>Stadings</p>
                <p>players</p>
              </div>
            }
          </div>

        </div>
      </div>

      <div>
        <Image className='stadium' src={stadium} alt='' />
      </div>

      <div className='news'>
        <h2>News</h2>
      </div>
      
      <div className='one'>
        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>

        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>
      </div>

      <div className='one'>
        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>

        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>
      </div>

      <div className='one'>
        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>

        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>
      </div>

      <div className='two'>
        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>

        <div className='left2'>
          <Image className='champions' src={champions} alt='' />

          <h3>Real Madrid have been crowned 2024/2025 UCL winners</h3>
        </div>
      </div>

    </div>
  )
}

export default HomeSectionOne
