import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/stanley-louie-523136127/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Iouie" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials