import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Skills</h5>
    <h2>Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Interactive Developer Intern @ American Greetings</h3>
        <h4>August 2021 - May 2022</h4>

<div className="experience__content">
        <article className='experience__details'>
        <div> <BsPatchCheckFill className='experience__details-icon'/> Collaborated with other developers and designers to produce, maintain,
and secure the functionality and accessibility of web applications </div>
<div><BsPatchCheckFill className='experience__details-icon'/>  Designed and deployed 10+ highly interactive electronic-cards for Jacquie
Lawson using JavaScript, TypeScript, and PixiJS </div>
<div><BsPatchCheckFill className='experience__details-icon'/>  Revised and updated code for web applications to accompany WCAG </div>
<div><BsPatchCheckFill className='experience__details-icon'/>  Communicated and collaborated with multi-disciplinary teams of engineers,
designers and producers on a daily basis </div>
        </article>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Experience