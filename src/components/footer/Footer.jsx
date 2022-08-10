import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#'>Shenanigans</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

<div className="footer__copyright">
  <small><br></br><br></br>Built by Stanley Louie </small>
</div>
    </footer>
  )
}

export default Footer