//ReactProtif
import React from 'react';

class ReactProtif extends React.Component {
  render(){
    const {link ,projectName , src , dic }=this.props
    return(
      <div className="row no-gutters col-lg-8 col-10 mx-auto mt-3"  >
        <a href = {link} className= 'd-inline col-md-4 portfolio-box' style = {{height : ' 150px'}}>
            <iframe src={link}  className="img-fluid img-pro card-img " style={{ overflow:'hidden' , height : '100%' , objectFit:'cover'}} scrolling="no" ></iframe>

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
