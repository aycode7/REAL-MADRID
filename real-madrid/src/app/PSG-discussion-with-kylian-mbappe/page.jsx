'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import logo2 from './Image/madrid-logo-black.jpeg'
import './page.css'
import kylian from './Image/kylian.webp'

const page = () => {

  const [click, setClick] = useState(true)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)

  const [tap, setTap] = useState(false)

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

          <a href="/">
            <div className="left">
              <h2>Real Madrid</h2>
              <Image width={50} height={40} className='img' src={logo2} alt='Real Madrid' />
            </div>
          </a>

          <div className="middle">
              <a href="/">
                <span className='paragraph' onClick={handleClick}>
                  <p className={click === true ? ('tap') : ''}>News</p>
                </span>
              </a>

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
            <Image className='stadium' src={kylian} alt='PSG discussion with Kylian Mbappe' />
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

        <div className="text">
            <h1>PSG told me I would not play any more, Luis Enrique saved me</h1>

            <h3>Kylian Mbappe has revealed that Paris Saint-Germain manager Luis Enrique and director of football Luis Campos “saved” him from being ostracised for the entire 2023/24 campaign. The France captain told PSG at the start of the season that he would not be renewing his contract, meaning he would leave on a free transfer at the end of 23/24.</h3>

            <h3>Kylian Mbappe has claimed that Paris Saint-Germain told him that he would not play at all last season. According to him, he was “saved” by the club’s manager Luis Enrique and sporting director Luis Campos. Mbappé was involved in a contract standoff last summer with PSG president Nasser Al-Khelaifi.</h3>

            <h3>“They [the club] made me understand that I would not play, they told me to my face, they told me violently. “Luis Enrique and Luis Campos saved me. I wouldn’t have set foot on the pitch again without them. “Just the fact I was playing was a great source of pride, but it’s certain that next year I won’t be satisfied with a year like that,” Mbappe told reporters.</h3>
        </div>
      
    </div>
  )
}

export default page
