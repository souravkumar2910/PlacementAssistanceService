import React from 'react'
import './style.css';
import {
    Link
} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>

                {/* -------- Sidebar ------- */}

                <div className="offcanvas offcanvas-start sidebar-nav bg-dark text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-body py-0">
                        <nav className="navbar-dark">
                            <ul className="navbar-nav">
                                <li>
                                    <div className="text-muted small fw-bold text-uppercase px-2 ">
                                        Quiz
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <Link exact className='fs-6' tag="a" to="/admin/view-categories" action>
                                        <span>View Categories</span>
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link exact className='fs-6' tag="a" to="/admin/all-quiz" action>
                                        <span>Quizzess</span>
                                    </Link>
                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>

        </div>
    )
}

export default Sidebar