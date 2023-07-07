import React from 'react'
import './header.css'
import CTA from './CTA'
import Shiv from '../../assets/me.jpg'
import Headersocial from './Headersocial'
const header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm </h5>
      <h1>Shivansh Sharma</h1>
      <h5 className="text-light">Software Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className='shiv'>
        <img src={Shiv} alt='shiv'/>
      </div>
      <a href='#contacts' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header