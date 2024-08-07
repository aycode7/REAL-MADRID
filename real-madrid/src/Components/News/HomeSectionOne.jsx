'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import logo2 from './Image/madrid-logo-black.jpeg'
import champions from './Image/champions.webp'
import stadium from './Image/night-stadium.jpg'
import beckham from './Image/david.webp'
import kylian from './Image/kylian.webp'
import { useState } from 'react'

const HomeSectionOne = () => {

  const [click, setClick] = useState(true)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)

  const handleShow = () => {
    setShow(true)
    setShow2(false)

  }

  const handleShow2 = () => {
    setShow(false)
    setShow2(true)
    
  }

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
            <h2>Real Madrid</h2>
            <Image width={50} height={40} className='img' src={logo2} alt='Real Madrid' />
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
                <p>Standings</p>
                <a href="players">
                  <p>players</p>
                </a>
              </div>
            }
          </div>

        </div>
      </div>

      <div>
        <Image className='stadium' priority src={stadium} alt='Stadium' />
      </div>

      <div className='news'>
        <h2>News</h2>
      </div>

      {show === true && 
        <div onClick={handleShow2} title='more content like this' className='moveTop'>
          <p>🤍</p>

          <div className='pc'>
            <p>more content like this</p>
          </div>
        </div>
      }
      
      {show2 === true &&
        <div onClick={handleShow} title='thanks for the likes' className='moveTop'>
          <p>💙</p>

          <div className='pc'>
            <p>thanks for the likes</p>
          </div>
        </div>
      }

      <div className='one'>
        <a href="Real-madrid-have-been-crowned-2023-2024-UEFA-CHAMPIONS-LEAGUE-winners">
          <div className='left2'>
            <Image className='champions' src={champions} alt='Real Madrid have been crowned 2024/2025 UCL winners' />

            <h3>Real Madrid have been crowned 2023/2024 UEFA CHAMPIONS LEAGUE winners</h3>
          </div>
        </a>

        <a href="Mbappe-Leaves-Psg-To-RealMadrid">
          <div className='left2'>
            <Image className='champions' src={beckham} alt='David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: Its a very special moment' />

            <h3>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: Its a very special moment</h3>
          </div>
        </a>
      </div>

      <div className='one'>
        <a href="PSG-discussion-with-kylian-mbappe">
          <div className='left2'>
            <Image className='champions' src={kylian} alt='PSG discussion with Kylian Mbappe' />

            <h3>Mbappe: PSG told me I was not going to play any more, Luis Enrique saved me</h3>
          </div>
        </a>

        <div className='left2'>
          <Image className='champions' src={champions} alt='Real Madrid have been crowned 2024/2025 winners' />

          <h3>Real Madrid have been crowned 2024/2025 UEFA CHAMPIONS LEAGUE winners</h3>
        </div>
      </div>

    </div>
  )
}

export default HomeSectionOne
