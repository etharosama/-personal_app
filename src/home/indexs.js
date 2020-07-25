import React from 'react';
import Header from './header/Header'
import About from './About'
import Services from './Services'
import Portfolio from './protifle/Portfolio'
import CallToAction from './CallToAction'
import  Footer from './Footer'

function home() {
  return (
    <div className="App"  id="page-top">
      <Header/>
      <Services/>

      <Portfolio/>
        <About/>
      <CallToAction/>
      < Footer/>
    </div>
  );
}

export default home;
