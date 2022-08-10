import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/a.jpeg'
import IMG2 from '../../assets/kree8.png'
import IMG3 from '../../assets/asteroids.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'YGO Card Generator',
    paragraph: 'YGO Card Generator is an API that I developed that lets users create their own Yu-Gi-Oh cards. This was created because of nostalgia.',
    github: 'https://github.com/Iouie/430Proj1',
    demo: 'https://ogyugioh.herokuapp.com/?',
  },
  {
    id: 2,
    image: IMG2,
    title: 'KREE-8',
    paragraph: 'KR33-8 is a team created for our final Capstone Project. It involves the idea of teaching people about terraforming. There are 3 educational minigames that explain the processes of terraforming and how to create the perfect planet.',
    github: 'https://github.com/IrvinTehDo/capstonegame1',
    demo: 'https://fullpagescroll-kr33-8.webflow.io/?',
  },
  {
    id: 3,
    image: IMG3,
    title: 'The Heist',
    paragraph: 'The Heist is a recreated 2D multi-directional shooter game from the classic game Asteroids. The player must avoid and shoot down as many enemy cars as possible and in order to rack up points. Developed with Unity and C#.',
    github: 'https://github.com/Iouie/The-Heist',
    demo: 'https://github.com/Iouie/The-Heist'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, paragraph, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
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

export default Portfolio