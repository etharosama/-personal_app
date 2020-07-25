//Portfolio
import React from 'react';
import PortfolioBox from './PortfolioBox'
import ReactProtif from './ReactProtif'
//{src , name , projectName , link}
class Portfolio extends React.Component {
  state = {
    project : [
      {
        link : 'https://etharosama.github.io/space/' ,
        projectName : 'space landing page' ,
      },
      {
        link : 'https://etharosama.github.io/sys-gate/index2.html' ,
        projectName : 'sys-gate laanding page' ,
      },
      {
        link : 'https://etharosama.github.io/cpp_traks/home.html' ,
        projectName : 'cpp traks laanding page' ,
      }
    ],
    react : [
      {
        link : 'https://ethar-creation-game-store.netlify.app/' ,
        projectName : 'Game Store' ,
        src : '/assets/img/portfolio/fullsize/Capture.PNG' ,
        dic : 'This is a game store with supporting online paying as a natural .'
      }
    ]
  }
  render(){
    return(
      <section id="portfolio">
          <div className="container-fluid p-0">
          <h2> landing page </h2>
          <hr className="divider my-4"/>
              <div className="row no-gutters">
                {this.state.project.map(i =>
                    <PortfolioBox {...i}/>)}
              </div>
          </div>
          <div className="container-fluid py-5 mt-5 mb-3">

          <h2 className= ''> React project </h2>
          <hr className="divider my-4"/>
          {this.state.react.map(i =>
              <ReactProtif {...i}/>)}
          </div>
      </section>
    )
  }
}
export default Portfolio
