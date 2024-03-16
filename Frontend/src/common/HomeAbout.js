import React from 'react'
import {
    // BrowserRouter as Router,
    // Route,
    // Routes,
    Link
} from "react-router-dom";

const HomeAbout = (props) => {
  return (
    <div>
        <section className='container py-5 text-center bg-light'>
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h2 className="fw-light">{props.name}</h2>
                    <p>{props.para}</p>
                    {/* <p>
                        <Link to={props.visit} className="btn btn-primary my-2">{props.btn}</Link>
                    </p> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeAbout