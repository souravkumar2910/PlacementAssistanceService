import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios';
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';

const Hobbies = () => {

    const [userHobbies, setUserHobbies] = useState({
        // id: "",
        hobbies: "",
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setUserHobbies({ ...userHobbies, [e.target.name]: value });
      };

      const personalId = localStorage.getItem("personalId");
    
      const saveUserHobbies = (e) => {
        e.preventDefault();
        
        let object = Object.assign({}, userHobbies);
        object["personal"] = {id:personalId};

        axios.post(`${base_url}/user-service/hobbies`,object,
        {
            headers:{
              jwtToken: JwtToken, 
            }
        }).then((response) => {
            console.log(response)
            alert("Data saved successfully! Please click on next menu for filling more details");
            setUserHobbies({hobbies: "",})
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const resetDetails = (e) => {
        e.preventDefault();
        setUserHobbies({
            id: "",
            hobbies: "",
        });
      };

    return (
        <div>
            <h3>Hobbies</h3>
            <Form onSubmit={saveUserHobbies}>
                {/* <Container className='mb-3'>

                    {
                        items.map((curItem, index) => {
                            return (
                                <Badge key={index}
                                    color="info" className='fs-6 me-1 mb-1'
                                    pill>
                                    {curItem}
                                </Badge>
                            )
                        })
                    }

                </Container> */}
                <FormGroup>
                    <Label for='hobbies'>Hobbies</Label>
                    <Input type='text' placeholder='Enter Hobbies' name="hobbies" id="hobbies"
                        value={userHobbies.hobbies} onChange={(e) => handleChange(e) } />
                </FormGroup>

                <Container>
                    <Button type='submit' onClick={saveUserHobbies} color='success'>Save</Button>
                    {/* <Button type='reset' onClick={resetDetails} color='warning' style={{ marginLeft: "10px" }}>Clear</Button> */}
                </Container>
            </Form>
        </div>
    )
}

export default Hobbies