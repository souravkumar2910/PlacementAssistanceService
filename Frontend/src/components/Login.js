import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    USER_API_BASE_URL
  } from "../config/GlobalConstants";
import {setUserSession} from '../config/Common';

const Login = () => {


    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [formErrors, setFormErrors]=useState({});
    const [isLogin, setIsLogin]=useState(false);


    const validateUser=()=>{
        // const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        // const regexPhone = /^[6-9]\d{9}$/;
        const error = {};
        if(user.email===undefined||user.email==="" && user.password === undefined || user.password===""){
            error.common="Username and Password is required";
        }
        return error;
    }

    const loginUser = (e) =>{
        e.preventDefault();
        // alert("login")
        setUser({...user});
        setIsLogin(true);
        setFormErrors(validateUser());
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length===0&&isLogin){
            console.log("Login Form");
            loginFun(user);
        }
    },[user]);

    const loginFun = (data) =>{
        axios.post(`${USER_API_BASE_URL}/login?username=${user.email}&password=${user.password}`,{
            data
        }).then(
            (response)=>{
                setUserSession(response.data.access_token,response.data.email)
                console.log(response);
                navigate("/",{replace:true});
            }
        ).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className='container bg-light py-5 my-5'>

                <div className='col-md-4 mx-auto' style={{ backgroundColor: "#adadad", padding: "20px" }}>
                    <h1 className='text-center'>Login</h1>
                    <form onSubmit={loginUser}>
                        <div>
                            <label for="email" class="form-label">UserName/Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder='Enter Your Username/Email'
                            onChange={(e) => {
                                setUser({...user,email:e.target.value})
                            }} />
                        </div>
                        <div>
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder='Enter Password'
                            onChange={(e) => {
                                setUser({...user,password:e.target.value})
                            }} />
                        </div>
                        <p style={{color: "red"}}>{formErrors.common}</p>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login