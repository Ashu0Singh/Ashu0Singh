import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/Experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contacts from './components/contacts/contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Portfolio/>
        <Services/>
        <Experience/>
        <Contacts/>
        <Footer/>
    </>
  )
}

export default App