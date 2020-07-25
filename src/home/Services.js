//Services
import React from 'react';

class Services extends React.Component {
  render(){
    return(
      <section className="page-section mx-auto" id="services">
          <div className="container mx-auto">
              <h2 className="text-center mt-0">At Your Service</h2>
              <hr className="divider my-4" />
              <div className="row mx-auto">
                  <div className="col-lg-3 col-md-6 text-center mx-auto">
                      <div className="mt-5">
                          <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                          <h3 className="h4 mb-2">Sturdy Themes</h3>
                          <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center mx-auto">
                      <div className="mt-5">
                          <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                          <h3 className="h4 mb-2">Up to Date</h3>
                          <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-6 text-center mx-auto">
                      <div className="mt-5">
                          <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                          <h3 className="h4 mb-2">Made with Love</h3>
                          <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Services
