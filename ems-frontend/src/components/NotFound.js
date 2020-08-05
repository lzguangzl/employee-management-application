import React, { Component, Fragment } from "react";

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <div className='row'>
          <div className='col-md-12 notfound'>
            <div className='text-center notfound-items'>
              <h1 className='font-weight-bolder'>404</h1>
              <h3 className='text-uppercase'>Page Not Found</h3>
              <div className='mt-1 mb-1'>
                The page you are looking for might have been removed, had its
                name changed or is temporarily unavailable.
              </div>
              <a href='/' className='btn btn-secondary'>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default NotFound;
