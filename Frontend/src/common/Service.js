import React from 'react'

import { Link } from 'react-router-dom'



const Service = (props) => {

    return (

        <div>

            <div className="card" style={{ width: "18rem", backgroundColor: "#ccd9ff" }}>

                <div className="card-body text-center text-justify">

                    {/* <h5 className="card-title">Service {props.service}</h5> */}

                    <h6 className="card-subtitle mb-2 text-muted">{props.name}</h6>

                    <p className="card-text">{props.desc}</p>

                    {

                        (props.name === "Coding") ?

                            <a target={props.page} className="btn btn-primary" href={props.to}>{props.name}</a>

                            :

                            <p>

                                <Link to={props.visit} className="btn btn-primary my-2">{props.btn}</Link>

                            </p>

                    }



                </div>

            </div>

        </div>

    )

}



export default Service