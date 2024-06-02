'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import logo2 from './Image/madrid-logo-black.jpeg'
import stadium from './Image/champions.webp'
import players from './Image/saka-control.jpg'
import { useState } from 'react'

const HomeSectionOne = () => {

  const [click, setClick] = useState(true)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)

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
            <h2>Arsenal</h2>
            <Image width={50} height={40} className='img' src={logo2} alt='' />
          </div>

          <div className="middle">
              <span onClick={handleClick}>
              <p className={click === true ? ('tap') : ''}>News</p>
              </span>

              <span onClick={handleClick2}>
              <p className={click2 === true ? ('tap') : ''}>Fixtures</p>
              </span>

              <span onClick={handleClick3}>
              <p className={click3 === true ? ('tap') : ''}>Standings</p>
              </span>

              <span onClick={handleClick4}>
              <p className={click4 === true ? ('tap') : ''}>Players</p>
              </span>
          </div>

        </div>
      </div>

      <div>
        <Image className='players' src={stadium} alt='' />
      </div>

      <div>
        <div>
          <Image src={stadium} />
        </div>
      </div>

    </div>
  )
}

export default HomeSectionOne
