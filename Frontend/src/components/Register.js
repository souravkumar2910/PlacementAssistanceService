// import React from 'react'
import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import {
    USER_API_BASE_URL
  } from "../config/GlobalConstants";
import { useNavigate } from "react-router-dom";


const Register = () => {
    // const [user, setUser] = useState({
    //     id: "",
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //   });
    //   const navigate=useNavigate();
    
    // //   const navigaye = useNavigate();
    
    //   const handleChange = (e) => {
    //     const value = e.target.value;
    //     setUser({ ...user, [e.target.name]: value });
    //   };
    
    //   const saveUser = (e) => {
    //     e.preventDefault();
    //     UserService.saveUser(user)
    //       .then((response) => {
    //         console.log(response);
    //         // navigaye("/userList");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    
    //   const reset = (e) => {
    //     e.preventDefault();
    //     setUser({
    //       id: "",
    //       firstName: "",
    //       lastName: "",
    //       email: "",
    //       password: "",
    //       conf_password:"",
          
    //     });
    //   };
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);
    
    const validateUser=()=>{
        const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        // const regexPhone = /^[6-9]\d{9}$/;
        const error = {};
        if(user.firstName===undefined||user.firstName===""){
            error.firstName="First name is required";
        }
        else if(user.lastName===undefined||user.lastName===""){
            error.lastName="Last name is required"
        } else if(user.email===undefined||user.email===""){
            error.email="Email is required";
        } else if (!regexEmail.test(user.email)) {
            error.email = "Invalid email format!";
        } else if(user.password===undefined||user.password===""){
            error.password="Password required";
        } else if(user.cpassword===undefined||user.cpassword===""){
            error.cpassword="Confirm Password required";
        } else if(user.cpassword!==user.password){
            error.cpassword="Password in both fields doesn't match";
        } 
        return error;
    }

    //register user
    const registerUser = (e) => {
        setUser({
            ...user
        })
        setFormErrors(validateUser());
        setIsSubmit(true);
        console.log(user);
        e.preventDefault();
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length===0&&isSubmit){
            console.log("Submit Form");
            postDataToServer(user);
        }
    },[formErrors]);
    
    const postDataToServer=(data)=>{
        axios.post(`${USER_API_BASE_URL}/auth/register`,data).then(
            (response)=>{
                console.log(response);
                console.log("Success");
                navigate('/login');
            },(error)=>{
                console.log(error);
                console.log("Error");
            }
        )
    };


    return (
        <div className='container bg-light py-5 my-5'>

            <div className='col-md-4 mx-auto' style={{backgroundColor:"#adadad",padding:"20px"}}>
            <h1 className='text-center'>Register Page</h1>
                <form onSubmit={registerUser}>
                    <div>
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" 
                        id="firstName" 
                        name="firstName"
                        onChange={(e) => {
                            setUser({ ...user, firstName: e.target.value })
                        }}
                        placeholder='Enter First Name' required/>
                        <p style={{color: "red"}}>{formErrors.firstName}</p>
                    </div>
                    <div>
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" 
                        id="lastName" 
                        name="lastName"
                        onChange={(e) => {
                            setUser({ ...user, lastName: e.target.value })
                        }}
                        placeholder='Enter Last Name' required/>
                        <p style={{color: "red"}}>{formErrors.lastName}</p>
                    </div>
                    <div>
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" 
                        id="email" 
                        name="email"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }}
                        placeholder='Enter Your Email' />
                        <p style={{color: "red"}}>{formErrors.email}</p>
                    </div>
                    <div>
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" 
                        id="password" 
                        name="password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }}
                        placeholder='Enter Password' />
                        <p style={{color: "red"}}>{formErrors.password}</p>
                    </div>
                    <div>
                        <label for="cpassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" 
                        id="cpassword" 
                        name="cpassword"
                        onChange={(e) => {
                            setUser({ ...user, cpassword: e.target.value })
                        }}
                        placeholder='Enter Confirm Password' />
                        <p style={{color: "red"}}>{formErrors.cpassword}</p>
                    </div>
                    <div class="mt-2 d-flex">
                        <div class="d-inline-block">
                            <button type="submit" color="success" class="btn btn-primary">Sign up</button>
                        </div>
                    </div>
                    <div className="text-center">
                        Already a Member? <button color="primary" outline borderless onClick={()=>{
                            navigate("/login")
                        }}>Sign In</button>
                    </div>
                </form>
            </div>
            {/* <Form>
                <FormGroup>
                    <Label for='username'>UserName</Label>
                    <Input type='text' placeholder='Enter User name' name="username" id="username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' placeholder='Enter Your Email' name="email" id="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='text' placeholder='Enter Password' name="password" id="password"
                    />
                </FormGroup>
                <Container>
                    <Button type='submit' color='success'>Register</Button>
                </Container>
            </Form> */}
        </div>
    )
}

export default Register