import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/a.jpeg'
import IMG2 from '../../assets/kree8.png'
import IMG3 from '../../assets/visualizer.png'

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
    title: 'Audio Visualizer Project',
    paragraph: 'A demon themed audio visualizer that displays visuals based on a music files frequency with many other options. Developed using Canvas API, Web Audio API, and JavaScript.',
    github: 'https://github.com/Iouie/AudioVisualizer?',
    demo: 'https://people.rit.edu/sxl7953/IGME330/Project/Visualizer/Visualizer.html?'

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