import React from 'react'
import {
    // BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div>

            {/* *************   Header    **************  */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link exact className='navbar-brand fw-bold' tag="a" to="/" action>
                        Admin
                    </Link>
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample" ></span>
                    </button>

                </div>
            </nav>


        </div>
    )
}

export default Header