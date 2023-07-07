import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services__list'>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>User Research and Analysis</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Information Architecture</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Interaction Design</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className='services__list'>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Website Design and Development</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>E-commerce Development</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Custom Web Application Development</p>
            </li>
            <li> 
              <BiCheck className='services__list-icon'/>
              <p>Website Optimization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services