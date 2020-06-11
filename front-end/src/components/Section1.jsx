import React from 'react';

class Secttion1 extends React.Component {
  render() {
    return (
      <div className="container">

      <div className="row">
        <div className="card text-center col-sm-12 col-md-6 col-lg-6 no-border">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>

        <div className="card text-center col-sm-12 col-md-6 col-lg-6 no-border">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Secttion1;