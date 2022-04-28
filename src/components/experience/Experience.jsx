import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {FaGuitar} from 'react-icons/fa'
import {IoMan} from 'react-icons/io5'
import {BsPeople} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>

      <div className="container experience_container">
        
        <div className="experience_technical">
          <h3>Technical Skills</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>

                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                < BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="exp_icon"/>
                <div>
                <h4>C</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience_non_technical">
        <h3>Other Skills</h3>     
              <article className="experience_details">
              <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>Music</h4>
                <small className="text-light">View my covers on </small>
                <FaGuitar/>
                <small><a href="https://instagram.com/sams_acoustics" target="_blank">@sams_acoustics</a></small>
                </div>
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>Public Speaking</h4>
                <small className="text-light">Experienced</small>
                <IoMan/>
                </div>
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill classname="experience_details-icons"/>
              <div>
                <h4>Team Player</h4>
                <small className="text-light"> I gel with people easily  </small>
                <BsPeople/>
              </div>
              </article>
        </div>

      </div>
    </section>
  )
}

export default Experience