import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title : 'Portfolio - React,Html & CSS',
    github: "https://github.com",
    demo: "https://samarth533.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title : 'Resume WebPage - Using Html,CSS & Bootstrap',
    github: "https://github.com/samarth533/samarth533.github.io/tree/main/Resume%202.0",
    demo: "https://samarth533.github.io/Resume%202.0/index.html",
  },
  {
    id: 3,
    image: IMG3,
    title : 'Snake Game - Python',
    github: "https://github.com",
    // demo: "https://github.com",
  },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title : 'More Comming Soon...',
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

        <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
          <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <div className="portfolio_item-image">
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
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