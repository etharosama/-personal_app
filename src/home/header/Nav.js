import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark py-3" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger"
               href="#page-top">Ethar Elkarsh</a>
               <button className="navbar-toggler navbar-toggler-right" type="button"
               data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto my-2 my-lg-0">
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      </div>
    );
  }
}

export default Nav
