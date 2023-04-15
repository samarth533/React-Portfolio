import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {FaGuitar} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {IoMan} from 'react-icons/io5'
import {FiTarget} from 'react-icons/fi'
import {BsPeopleFill} from 'react-icons/bs'
import {IoLogoYoutube} from 'react-icons/io'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Summary about me</h5>
      <h2>What Skills I have</h2>

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
                <h4>Hugo</h4><h5>(JamStack)</h5>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>React JS</h4>
                <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h5>Wordpress 6</h5> <h5>(Guttenberg)</h5>
                <small className="text-light">Intermediate</small>
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
              <article className="experience_details">
                <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h5>Data Structures</h5>
                <h5>and Algo</h5>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience_non_technical">
        <h3>Other Skills</h3>     
              <article className="experience_details">
              <BsFillPatchCheckFill classname="experience_details-icons"/>
              <div>
                <h4>Problem Solving</h4>
                <small className="text-light"> I tackle the problems efficently </small>
                <FiTarget/>
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
                <BsPeopleFill/>
              </div>
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill classname="experience_details-icons"/>
                <div>
                <h4>Music <FaGuitar/></h4>
                <small className="text-light">Checkout my covers on <br></br>Instagram <RiInstagramFill/> <a href="https://instagram.com/sams_acoustics" target="_blank">@sams_acoustics</a></small>
                <br></br>
                <small className="text-light">Youtube <IoLogoYoutube/> <a href="https://www.youtube.com/channel/UCxjLmW54fK627f6q5BzRyeA/featured" target="_blank">Sam's Acoustics</a> </small>
                </div>
              </article>              
        </div>

      </div>
    </section>
  )
}

export default Experience