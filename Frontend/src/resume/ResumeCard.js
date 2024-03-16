import React from 'react'

import { Link } from 'react-router-dom'

const ResumeCard = (props) => {
    return (
        <div>
            <div className="card" style={{width: "18rem",backgroundColor:"#ccd9ff"}}>
                <img alt="Card image cap" src={props.src} top height={300} width={288} />
                
                <div className="card-body text-center text-justify">
                    {   /* <h6 className="card-subtitle mb-2 text-muted">{props.name}</h6>
                    <p className="card-text">{props.desc}</p> */}

                    <p>
                        <Link to={props.visit} className="btn btn-primary my-2">{props.btn}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard