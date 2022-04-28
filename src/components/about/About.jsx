import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {IoFolderOpenOutline} from 'react-icons/io5' 
import {GrWorkshop} from 'react-icons/gr'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>
      <div className="container about_container">

        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon"/>
              <h5>Experience</h5>
              <small>Fresher(&#60;1Yr)</small>
              {/* <p className="small">'Fresher(&#60;1Yr)'</p> */}
            </article>
            <article className="about_card">
              <IoFolderOpenOutline className="about_icon"/>
              <h5>Projects</h5>
              <small>3+</small>
            </article>
            <article className="about_card">
              <GrWorkshop className="about_icon"/>
              <h5>Occupation</h5>
              <small>Feelancer</small>
            </article>
          </div>
          <p>Hi There, My Name is Samarth, I am a Junior Year Computer Science Student.
            I like to spend my time learning about the latest technologies and playing some music on my guitar. I like solving problems and making the solutions creative.
          </p>
          <a href="#contact"  className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>

  )
}

export default About