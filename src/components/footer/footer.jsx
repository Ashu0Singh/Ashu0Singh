import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs';
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shivansh Sharma</a>
      <ul className='permalinks'>
        <li><a href='#About'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contacts'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.instagram.com/shivanshh_sharmaa/'><BsInstagram /></a>
        <a href='https://www.linkedin.com/in/shivanshsharma15/'><BsLinkedin /></a>
              </div>
              <div className="footer__copyright">
                <small>&copy;SHIVANSH SHARMA. ALL rights  reserved</small>
              </div>
    </footer>
  )
}

export default footer