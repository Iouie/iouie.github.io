import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs'
import {FaUserCog} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {BsNewspaper} from 'react-icons/bs'
import {BsEyeglasses} from 'react-icons/bs'
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><FaUserCog/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><BsNewspaper/></a>
      <a href="#shenanigans" onClick={() => setActiveNav('#shenanigans')} className={activeNav === '#shenanigans' ? 'active' : ''} ><BsEyeglasses/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiPhoneCall/></a>
    </nav>
  )
}

export default Nav