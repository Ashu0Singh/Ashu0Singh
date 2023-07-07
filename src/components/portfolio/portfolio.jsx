import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
const data = [
  {
    id : 1,
    image : IMG1,
    title:"Bankist",
    github:"https://github.com/shivansh1507/Project-Bankist",
    },
    {
    id:2,
    image:IMG2,
    title:"Mapty",
    github:"https://github.com/shivansh1507/Project-Mapty",
    },
    {
    id:3,
    image:IMG3,
    title:"Tsunami Cafe",
    github:"",
    },
    {
    id:4,
    image:IMG4,
    title : "The Image Pixel",
    github:"https://shivansh1507.github.io/shivanshsharma.github.io/",
    }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github})=>{
          return(
            <article key={id} className='portfolio__item'>   
            <div className="portfolio__item-image">
                       <img src={image} alt={title}></img>
                       </div>
                       <h3>{title}</h3>
                       <div className="portfolio__item-cta">
                       <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                     </div>
                   </article>
          )
        })
       }

        
      </div>
    </section>
  )
}

export default portfolio