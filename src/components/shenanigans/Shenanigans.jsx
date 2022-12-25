import React from 'react'
import './shenanigans.css'

const data = [
  {
    id: 1,
    title: 'AG Intern Museum',
    paragraph: '2nd personal project created during my internship at American Greetings. It is a museum created in Unity to showcase all the work I have done during my time in American Greetings.',
    github: 'https://github.com/Iouie/AG-Museum?',
    demo: 'https://github.com/Iouie/AG-Museum?',
  },
  {
    id: 2,
    title: 'Aframe-Project',
    paragraph: 'Personal project created during my internship at American Greetings. It is an iSpy game created using Aframe, an open-source web framework for building VR experiences.  ',
    github: 'https://github.com/Iouie/AFrame?',
    demo: 'https://people.rit.edu/sxl7953/AFrame/Aframe_Project/?',
  },
  {
    id: 3,
    title: 'The Heist',
    paragraph: 'The Heist is a recreated 2D multi-directional shooter game from the classic game Asteroids. The player must avoid and shoot down as many enemy cars as possible and in order to rack up points. Developed with Unity and C#.',
    github: 'https://github.com/Iouie/The-Heist',
    demo: 'https://github.com/Iouie/The-Heist'
  }
]

const Shenanigans = () => {
  return (
    <section id='shenanigans'>
      <h5>Other</h5>
      <h2>Shenanigans</h2>

      <div className='container shenanigans__container'>
        {
          data.map(({id, title, paragraph, github, demo}) => {
            return(
              <article key={id} className='shenanigans__item'>
                <div className='shenanigans__item-image'>
                  <p>{paragraph}</p>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href= {github} className='btn' target='_blank'>Github</a>
                  <a href= {demo} className='btn btn-primary' target='_blank'>Live</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Shenanigans