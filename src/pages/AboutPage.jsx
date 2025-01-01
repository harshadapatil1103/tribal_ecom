import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
         this website will help tribal prople and become the source of earning for them
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://plus.unsplash.com/premium_photo-1673853725284-076f71f8c5f2?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHRyaWJhbCUyMGNsb3Roc3xlbnwwfDB8fHwxNzE1OTQ5MDgyfDE&ixlib=rb-4.0.3" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://cdn.pixabay.com/photo/2017/07/24/18/47/zuni-2535675_640.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1517903803608-3821619f1320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJpYmFsfGVufDB8fDB8fHww" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Masks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.unsplash.com/photo-1576495169018-bd2414046c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyaWJhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Painting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage