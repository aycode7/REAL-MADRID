'use client'
import React from 'react'
import { useState } from 'react'
import './page.css'
import Image from 'next/image'
import logo2 from './Image/madrid-logo-black.jpeg'
import modric from './Image/Modric.png'
import kroos from './Image/Kroos.jpeg'
import alaba from './Image/Alaba.jpeg'
import joselu from './Image/Mato Joselu.jpeg'
import nacho from './Image/Nacho.jpeg'
import courtois from './Image/Thibaut Courtois.png'
import stadium from './Image/night-stadium.jpg'

const page = () => {

  const [click, setClick] = useState(true)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)

  const [show, setShow] = useState(false)

  const[show2, setShow2] = useState(true)
  const[show3, setShow3] = useState(false)

  const handleShow2 = () => {
    setShow2(true)
    setShow3(false)

  }

  const handleShow3 = () => {
    setShow2(false)
    setShow3(true)

  }

  const handleShow = () => {
    setShow(true)
    
  }

  const handleShowNot = () => {
    setShow(false)

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
    <div id='movetop'>
      <div className='top'>
        <div className="navbar">

          <a href="/">
            <div className="left">
              <h2>Real Madrid</h2>
              <Image width={50} height={40} className='img' src={logo2} alt='Real Madrid' />
            </div>
          </a>

          <div className="middle">
              <span className='paragraph' onClick={handleClick4}>

              <a href="/">
                <p className={click4 === true ? ('tap') : ''}>News</p>
              </a>

              </span>

              <span className='paragraph' onClick={handleClick2}>
                <p className={click2 === true ? ('tap') : ''}>Fixtures</p>
              </span>

              <span className='paragraph' onClick={handleClick3}>
              <p className={click3 === true ? ('tap') : ''}>Standings</p>
              </span>

              <span className='paragraph' onClick={handleClick}>
                <a href="players">
                  <p className={click === true ? ('tap') : ''}>Players</p>
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
        <Image src={stadium} className='stadium' />
      </div>


      <div className="flex">
        <div className="ctn">
          <div className="head-1">
            <div className='madrid-head'>
              <Image src={logo2} width={50} alt='Real Madrid' />

              <h2>Real Madrid</h2>
            </div>
          </div>

          <div className="data-head">
              <h3 className='name'>Name</h3>
              <h3 className='position'>Position</h3>
              <h3 className='age'>Age</h3>
              <h3 className='height'>Ht</h3>
              <h3 className='weight'>Wt(kg)</h3>
          </div>

          <div className="player-data">
            <div className='one'>
              <div className="player-name">
                <Image className='play' width={50} src={modric} alt='Luka Modric' />

                <h3>Luka Modric</h3>

                <h3>#10</h3>
              </div>

              <h3 className='play-pst'>Midfielder</h3>

              <h3 className='play-age'>39</h3>

              <p className='play-height'>5'7"</p>

              <h3 className='play-width'>66</h3>
            </div>
          </div>

          <div className="player-data">
            <div className='one'>
              <div className="player-name">
                <Image className='play' width={50} src={kroos} alt='Toni Kroos' />

                <h3>Toni Kroos</h3>

                <h3>#8</h3>
              </div>

              <h3 className='play-pst'>Midfielder</h3>

              <h3 className='play-age'>34</h3>

              <p className='play-height'>6'0"</p>

              <h3 className='play-width'>76</h3>
            </div>
          </div>

          <div className="player-data">
            <div className='one'>
              <div className="player-name">
                <Image className='play' width={50} src={alaba} alt='David Alaba' />

                <h3>David Alaba</h3>

                <h3>#4</h3>
              </div>

              <h3 className='play-pst'>Defender</h3>

              <h3 className='play-age'>32</h3>

              <p className='play-height'>5'10"</p>

              <h3 className='play-width'>78</h3>
            </div>
          </div>

          <div className="player-data">
            <div className='one'>
              <div className="player-name">
                <Image className='play' width={50} src={nacho} alt='Nacho' />

                <h3>Nacho</h3>

                <h3>#6</h3>
              </div>

              <h3 className='play-pst'>Defender</h3>

              <h3 className='play-age'>34</h3>

              <p className='play-height'>5'10"</p>

              <h3 className='play-width'>76</h3>
            </div>
          </div>

          <div className="player-data">
            <div className='one'>
              <div className="player-name">
                <Image className='play' width={50} src={joselu} alt='Mato Joselu' />

                <h3>Mato Joselu</h3>

                <h3>#14</h3>
              </div>

              <h3 className='play-pst'>Forward</h3>

              <h3 className='play-age'>34</h3>

              <p className='play-height'>6'3"</p>

              <h3 className='play-width'>80</h3>
            </div>
          </div>

          <div className="player-data">
            <div className='one'>
              <div className="player-name">
                <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                <h3>Thibaut Courtois</h3>

                <h3>#1</h3>
              </div>

              <h3 className='play-pst'>GoalKeeper</h3>

              <h3 className='play-age'>32</h3>

              <p className='play-height'>6'6"</p>

              <h3 className='play-width'>96</h3>
            </div>
          </div>

          {show === true &&
          <div>
            <div className="player-data">
              <div className='one'>
                <div className="player-name">
                  <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                  <h3>Jude Bellingham</h3>

                  <h3>#5</h3>
                </div>

                <h3 className='play-pst'>Midfielder</h3>

                <h3 className='play-age'>32</h3>

                <p className='play-height'>5'10"</p>

                <h3 className='play-width'>78</h3>
              </div>
            </div>

            <div className="player-data">
              <div className='one'>
                <div className="player-name">
                  <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                  <h3>Jude Bellingham</h3>

                  <h3>#5</h3>
                </div>

                <h3 className='play-pst'>Midfielder</h3>

                <h3 className='play-age'>32</h3>

                <p className='play-height'>5'10"</p>

                <h3 className='play-width'>78</h3>
              </div>
            </div>

            <div className="player-data">
              <div className='one'>
                <div className="player-name">
                  <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                  <h3>Jude Bellingham</h3>

                  <h3>#5</h3>
                </div>

                <h3 className='play-pst'>Midfielder</h3>

                <h3 className='play-age'>32</h3>

                <p className='play-height'>5'10"</p>

                <h3 className='play-width'>78</h3>
              </div>
            </div>

            <div className="player-data">
              <div className='one'>
                <div className="player-name">
                  <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                  <h3>Jude Bellingham</h3>

                  <h3>#5</h3>
                </div>

                <h3 className='play-pst'>Midfielder</h3>

                <h3 className='play-age'>32</h3>

                <p className='play-height'>5'10"</p>

                <h3 className='play-width'>78</h3>
              </div>
            </div>

            <div className="player-data">
              <div className='one'>
                <div className="player-name">
                  <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                  <h3>Jude Bellingham</h3>

                  <h3>#5</h3>
                </div>

                <h3 className='play-pst'>Midfielder</h3>

                <h3 className='play-age'>32</h3>

                <p className='play-height'>5'10"</p>

                <h3 className='play-width'>78</h3>
              </div>
            </div>
          </div>
          }

        {show2 === true &&
        <div className="btn-ctn">
          <span onClick={handleShow3}><button onClick={handleShow} className='btn' title='See More'>See more</button></span>
        </div>
        }

        {show3 === true &&
        <div className="btn-ctn">
          <span onClick={handleShow2}><button onClick={handleShowNot} className='btn' title='See More'>See less</button></span>
        </div>
        }

        </div>

        <a href="#movetop">
        <div title='click to go to navbar' className='moveTop'>
          <p>☝🏽</p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default page
