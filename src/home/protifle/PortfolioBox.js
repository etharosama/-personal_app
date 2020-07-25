//PortfolioBox
import React from 'react';

class PortfolioBox extends React.Component {
  render(){
    const {src , projectName , link} = this.props
    return(
      <div className="col-lg-4 col-12">
        <a className="portfolio-box" href={link}>
              <iframe src={link}  className="img-fluid img-pro" style={{ overflow:'hidden'}} scrolling="no" ></iframe>
              <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">{projectName}</div>
              </div>
        </a>
      </div>
    )
  }
}

export default PortfolioBox
