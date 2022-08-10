import React from 'react'
import './about.css'
import ME from '../../assets/meme.jpg'
import {MdWork} from 'react-icons/md'
import {MdSports} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
              <MdSports className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Video Games, Stock Market, Mahjong, Basketball</small>
            </article>

            <article className='about__card'>
              <FiHeart className='about__icon'/>
              <h5>Interests</h5>
              <small>Web/Mobile Applications, VR/AR, Gaming Applications</small>
            </article>
          </div>

          <p>Hello! My name is Stanley but a lot of people usually call me by my last name (Louie). I'm interested in creating interactive applications for web and mobile! Outside of coding, I enjoy watching basketball, play Mahjong, and following the stock market. </p>
        
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About