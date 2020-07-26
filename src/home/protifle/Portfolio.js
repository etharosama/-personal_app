//Portfolio
import React from 'react';
import PortfolioBox from './PortfolioBox'
import ReactProtif from './ReactProtif'
//{src , name , projectName , link}
class Portfolio extends React.Component {
  state = {
    project : [
      {
        link : 'https://etharosama.github.io/cpp_traks/home.html' ,
        projectName : 'cpp traks laanding page' ,
      },
      {
        link : 'https://etharosama.github.io/sys-gate/index2.html' ,
        projectName : 'sys-gate laanding page' ,
      },
      {
        link : 'https://etharosama.github.io/space/' ,
        projectName : 'space landing page' ,
      },
    ],
    react : [
      {
        link : 'https://ethar-creation-game-store.netlify.app/' ,
        projectName : 'Game Store' ,
        dic : 'This is a game store with supporting online paying as a natural .'
      },
      {
        link : 'https://master--todolistv1.netlify.app/' ,
        projectName : 'to do list' ,
        dic : 'This is a to do using react & reduxs.'
      },
      {
        link : 'https://burgershop1.netlify.app/' ,
        projectName : 'burger app  list' ,
        dic : 'This is a burger app using react & reduxs.'
      }
    ],
    js : [
      {
        link : 'https://etharosama.github.io/Dicee_Challenge/dicee.html' ,
        projectName : 'Dicee Challenge' ,
        dic : 'This is a Dicee Challenge with js'
      },
      {
        link : 'https://etharosama.github.io/Simon_Game_Challenge/index.html' ,
        projectName : 'Simon Game Challenge' ,
        dic : 'Simon Game Challenge with jquary'
        },
    ]
  }
  render(){
    return(
      <section id="portfolio">
      <div className="container-fluid p-0 mb-5">

      <h2 className= ''> React project </h2>
      <hr className="divider my-4"/>
      {this.state.react.map(i =>
          <ReactProtif {...i}/>)}
      </div>
          <div className="container-fluid p-0 mb-5">

          <h2 className= ''> js project </h2>
          <hr className="divider my-4"/>
          {this.state.js.map(i =>
              <ReactProtif {...i}/>)}
          </div>

          <div className="container-fluid p-0 mb-5">
          <h2> landing page </h2>
          <hr className="divider my-4"/>
              <div className="row no-gutters">
                {this.state.project.map(i =>
                    <ReactProtif {...i}/>)}
              </div>
          </div>
      </section>
    )
  }
}
export default Portfolio
