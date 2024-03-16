import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';
import axios from 'axios';

const Objective = () => {

    const [userObjective, setUserObjective] = useState({
        // id: "",
        objective: "",
      });

      const personalId = localStorage.getItem("personalId");
    
      const handleChange = (e) => {
        const value = e.target.value;
        setUserObjective({ ...userObjective, [e.target.name]: value });
      };
    
      const saveUserSkills = (e) => {
        e.preventDefault();
        let object = Object.assign({}, userObjective);
        object["personal"] = {id:personalId};

        axios.post(`${base_url}/user-service/objective`,object,
        {
            headers:{
              jwtToken: JwtToken, 
            }
        }).then((response) => {
            console.log(response)
            alert("Data saved successfully! Please click on next menu for filling more details");
            setUserObjective({objective: "",});
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const resetDetails = (e) => {
        e.preventDefault();
        setUserObjective({
            id: "",
            objective: "",
        });
      };

    return (
        <div>
            <h3>Objective</h3>
            <Form onSubmit={saveUserSkills}>
            <FormGroup>
                <Label for='objective'>Objective</Label>
                <Input type='textarea' style={{height:120}} placeholder='Enter Objective' name="objective" id="objective" 
                  value={userObjective.objective} onChange={(e) => handleChange(e)} />
            </FormGroup>

                <Container>
                    <Button type='submit' onClick={saveUserSkills} color='success'>Save</Button>
                    {/* <Button type='reset' onClick={resetDetails} color='warning' style={{ marginLeft: "10px" }}>Clear</Button> */}
                </Container>
            </Form>
        </div>
    )
}

export default Objective