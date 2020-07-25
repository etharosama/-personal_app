//Header
import React from 'react';
import Nav from './Nav'

class Header extends React.Component {
  render (){
    return (
      <header className="masthead mt-0" style = {{  paddingBottom:' 4.5rem'}}>
      <Nav/>
          <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-lg-10 align-self-end">
                      <h1 className="text-uppercase text-white font-weight-bold">Get Your Web site done</h1>
                      <hr className="divider my-4" />
                  </div>
                  <div className="col-lg-8 align-self-baseline">
                      <p className="text-white-75 font-weight-light mb-5">Start get your own website that can help you grow your business  using the libary react ! Just contact us and start your business online !</p>
                      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                  </div>
              </div>
          </div>
      </header>
    )
  }
}
export default Header
