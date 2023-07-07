import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='About'>
       <h5>Get to Know</h5>
       <h2>About ME</h2>
       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>0-1 years working</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4</small>
            </article>
          </div>
          <p>
Shivansh is a 4th year Student at VIT-AP, studying towards a Bachelor's degree in Technology with a focus on Computer Science and Engineering, specializing in Artificial Intelligence. He has a strong background in event organization, which has honed his teamwork skills and developed his leadership and time management abilities. Alongside his excellent interpersonal skills, Shivansh possesses exceptional critical thinking and problem-solving capabilities.

His experience in event planning has equipped him with the necessary skills to thrive in team environments. He excels at coordinating efforts, managing resources effectively, and leading teams to achieve common goals. Additionally, Shivansh's time management skills allow him to prioritize tasks efficiently and meet deadlines consistently.

In addition to his organizational skills, Shivansh demonstrates exemplary critical thinking and problem-solving aptitude. He exhibits a logical and analytical approach to challenges, enabling him to identify innovative solutions and implement them successfully. His ability to assess complex situations and propose effective strategies contributes to his overall effectiveness in various scenarios.

Shivansh's commitment to continuous learning and pursuit of excellence is evident in his academic endeavors and extracurricular activities. His technical proficiency, coupled with his keen attention to detail, positions him as a valuable asset in any professional setting. With his combination of technical expertise, leadership capabilities, and critical thinking prowess, Shivansh possesses the potential to make a significant impact in the field of computer science and artificial intelligence.

Overall, Shivansh's experience, skills, and personal attributes make him a highly capable individual with immense potential for success in his chosen field.</p>
<a href='#contact'className='btn btn-primary'>Lets's Talk</a>
        </div>
       </div>
    </section>
   
  )
}

export default about