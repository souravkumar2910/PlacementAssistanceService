import React, { useState,useEffect} from 'react';
import { Button, Container, Form, FormGroup, Input, Label} from 'reactstrap'
import PersonalDetailsService from '../services/PersonalDetailsService';
import axios from 'axios';
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';

const PersonalDetails = () => {

    const [userPersonal, setUserPersonal] = useState({
        fullName: "",
        email: "",
        jobTitle: "",
        address: "",
        phone: "",
      });

    // const emailUser = JSON.parse(localStorage.getItem("user"));

    // useEffect(()=>{
    //     PersonalDetailsService.getUserDetails(emailUser)
    //     .then((response) => {
    //     setUserPersonal({...userPersonal ,email:response.data.email})
    
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },[emailUser]);
    

      const handleChange = (e) => {
        const value = e.target.value;
        setUserPersonal({ ...userPersonal, [e.target.name]: value });
      };
   

      const saveUserDetails = (e) => {
        e.preventDefault();
        console.log(userPersonal);
        axios.post(`${base_url}/user-service/personal`,userPersonal,
        {
            headers:{
              jwtToken: JwtToken, 
            }
        }).then((response) => {
            localStorage.setItem("personalId",response.data.id);
            alert("Data saved successfully! Please click on next menu for filling more details");
            setUserPersonal({fullName: "",
            email: "",
            jobTitle: "",
            address: "",
            phone: "",})
          })
          .catch((error) => {
            console.log(error);
            console.log("error");
          });
      };
    
      const resetDetails = (e) => {
        e.preventDefault();
        setUserPersonal({
            id: "",
            fullName: "",
            email: "",
            jobTitle: "",
            address: "",
            phone: "",
        });
      };
    
    return (
        <div>
            <h3>Personal Details</h3>
            <Form onSubmit={saveUserDetails}>
                <FormGroup>
                    <Label for='fullName'>Full Name</Label>
                    <Input type='text' placeholder='Enter Your Name' name="fullName" id="fullName"
                    value={userPersonal.fullName} onChange={(e) => handleChange(e)} />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='text' name="email" id="email"
                    value={userPersonal.email} onChange={(e) => handleChange(e)}  />
                </FormGroup>
                <FormGroup>
                    <Label for='jobTitle'>Job Title</Label>
                    <Input type='text' placeholder='Enter your current Job Title' name="jobTitle" id="jobTitle"
                    value={userPersonal.jobTitle} onChange={(e) => {handleChange(e)}}  />
                </FormGroup>
                <FormGroup>
                    <Label for='address'>Address</Label>
                    <Input type='textarea' style={{ height: 150 }} placeholder='Enter Address' name="address" id="address"
                    value={userPersonal.address} onChange={(e) => handleChange(e)}   />
                </FormGroup>
                <FormGroup>
                    <Label for='phone'>Phone No.</Label>
                    <Input type='text' placeholder='9876543210' name="phone" id="phone"
                    value={userPersonal.phone} onChange={(e) => handleChange(e)}   />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="profileImg">
                        Photo(optional)
                    </Label>
                    <Input
                        id="profileImg"
                        name="file"
                        type="file"
                    />
                    <FormText>
                        image size must be 1mb.
                    </FormText>
                </FormGroup> */}
                <Container>
                    <Button type="submit" onClick={saveUserDetails}  color='success'>Save</Button>
                    {/* <Button type='reset' onClick={resetDetails} color='warning' style={{ marginLeft: "10px" }}>Clear</Button> */}
                </Container>
            </Form>
        </div>
    )
}

export default PersonalDetails