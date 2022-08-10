import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Shenanigans from './components/shenanigans/Shenanigans'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Shenanigans />
    <Contact />
    <Footer />
    </>
  )
}

export default App