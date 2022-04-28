import React from 'react'
import './nav.css'
import {CgHome} from 'react-icons/cg'
import {IoPersonOutline} from 'react-icons/io5'
import {BiBookOpen} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CgHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoPersonOutline/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookOpen/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><CgWebsite/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav