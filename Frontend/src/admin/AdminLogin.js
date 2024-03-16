import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import { USER_API_BASE_URL } from '../config/GlobalConstants';

const AdminLogin = () => {

    const [admin, setAdmin] = useState({});

    const navigate = useNavigate();

    const adminLogin = (e) =>{
        e.preventDefault();
        axios.post(`${USER_API_BASE_URL}/auth/adminlogin`,{
            admin
        }).then(
            (response)=>{
                // setUserSession(response.data.access_token,response.data.email)
                console.log(response.data);
                navigate("/admin");
            }
        ).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link exact className='navbar-brand fw-bold' tag="a" to="/" action>
                        Admin
                    </Link>
                </div>
            </nav>

            <div className='container bg-light py-5 my-5'>
                <div className='col-md-4 mx-auto' style={{ backgroundColor: "#adadad", padding: "20px" }}>
                    <h1 className='text-center'>Admin Login</h1>
                    <form onSubmit={adminLogin}>
                        <div>
                            <label for="email" class="form-label">UserName</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder='Enter Your Username/Email'
                            onChange={(e) => {
                                setAdmin({...admin,email:e.target.value})
                            }} />
                        </div>
                        <div>
                            <label for="password" class="form-label">Password</label>
                            <input type="text" class="form-control" name="password" id="password" placeholder='Enter Password'
                            onChange={(e) => {
                                setAdmin({...admin,password:e.target.value})
                            }} />
                        </div>
                        {/* <p style={{color: "red"}}>{formErrors.common}</p> */}
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AdminLogin

