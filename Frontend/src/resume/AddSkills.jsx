import React,{useState} from 'react'
import { Button, Container, Form, FormGroup, Input, Label} from 'reactstrap'
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';
import axios from 'axios';

const AddSkills = () => {

    const [userSkills, setUserSkills] = useState({
        // id: "",
        skillName: "",
      });

      const personalId = localStorage.getItem("personalId");
    
      const handleChange = (e) => {
        const value = e.target.value;
        setUserSkills({ ...userSkills, [e.target.name]: value });
      };
    
      const saveSkills = (e) => {
        
        e.preventDefault();
        let object = Object.assign({}, userSkills);
        object["personal"] = {id:personalId};
        axios.post(`${base_url}/user-service/skill`,object,
        {
            headers:{
              jwtToken: JwtToken, 
            }
        }).then((response) => {
            console.log(response)
            alert("Data saved successfully! Please click on next menu for filling more details");
            setUserSkills({skillName: "",});
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const resetDetails = (e) => {
        e.preventDefault();
        setUserSkills({
            // id: "",
            skillName: "",
        });
      };

    return (
        <div>
            <h3>Add Skills</h3>
            <Form onSubmit={saveSkills}>
                <Container className='mb-3'>


                </Container>
                <FormGroup>
                    <Label for='skillName'>Add Skills</Label>
                    <Input type='text' placeholder='Add Skills' name="skillName" id="skillName"
                        value={userSkills.skillName} onChange={(e) => handleChange(e)} />
                </FormGroup>

                <Container>
                    <Button type='submit' onClick={saveSkills} color='success'>Save</Button>
                    {/* <Button type='reset' onClick={resetDetails} color='warning' style={{ marginLeft: "10px" }}>Clear</Button> */}
                </Container>
            </Form>
        </div>
    )
}

export default AddSkills