//ReactProtif
import React from 'react';

class ReactProtif extends React.Component {
  render(){
    const {link ,projectName , src , dic }=this.props
    return(
      <div className="row no-gutters col-8 mx-auto"  >
        <a href = {link} className= 'd-inline col-md-4 portfolio-box' style = {{height : ' 150px'}}>
            <img src={src} className="card-img img-fluid "
            style = {{height : '100%' , objectFit:'cover'}}
            alt={projectName}/>
            <div className="portfolio-box-caption">
                <button className="project-name btn-light btn"
                style = {{color : ' #dc3545'}}>see more </button>
            </div>
        </a>
        <div className="col-md-8">
            <div className="card-body text-left">
               <h5 className="card-title text-left">{projectName} using react</h5>
               <p className="card-text text-left">{dic }</p>
            </div>
        </div>
    </div>
    )
  }
}
export default ReactProtif
