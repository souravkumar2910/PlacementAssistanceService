import React, { useState } from 'react'
import {
    // BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import About from './About';
import Login from './Login';
import HomePage from './HomePage';
import Register from './Register';
import Services from './Services';
import Home from './HomePage'
import { removeUserSession } from '../config/Common';
import { useNavigate } from 'react-router-dom';

const NavbarPage = () => {

//    const emailUser = JSON.parse(localStorage.getItem("user"));
//     const [item1,setItem1] = useState("About");
//    if(window.location.href === "http://localhost:3000/login" || window.location.href === "/register"){
//        setItem1("Login")
//    }

    const emailUser = localStorage.getItem("user");

    const navigate = useNavigate();

    const handleLogout = () => {
        removeUserSession();
        navigate("/");

    }

    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <Link exact className='navbar-brand' tag="a" to="/" action>
                            PAS
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {
                                    (emailUser!== null) ?
                                    <>
                                    <li className="nav-item">
                                    <Link exact className='nav-link' tag="a" to="/about" action>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link exact className='nav-link' tag="a" to="/service" action>
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link exact className='nav-link' onClick={handleLogout} tag="a" to="/" action>
                                       Logout
                                    </Link>
                                </li>
                                    </>
                                    : 
                                    <>
                                     <li className="nav-item">
                                    <Link exact className='nav-link' tag="a" to="/register" action>
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link exact className='nav-link' tag="a" to="/login" action>
                                       Login
                                    </Link>
                                </li>
                                    </>

                                }
                                {/* // <li className="nav-item">
                                //     <Link exact className='nav-link' tag="a" to="/about" action>
                                //         About
                                //     </Link>
                                // </li>
                                // <li className="nav-item dropdown">
                                //     <Link exact className='nav-link' tag="a" to="/service" action>
                                //         Services
                                //     </Link>
                                // </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/about" element={<About />} exact />
                    <Route path="/service" element={<Services />} exact />
                    <Route path="/register" element={<Register />} exact />
                    <Route path="/login" element={<Login />} exact />
                    {/* <Route path="/logout" element={<Home />} exact /> */}
                </Routes>
        </div>
    )
}

export default NavbarPage