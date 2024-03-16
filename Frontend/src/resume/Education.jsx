import React, { useState } from 'react'
import { FaPlusCircle,FaTrashAlt } from 'react-icons/fa';
import { Button, Container, Form, FormGroup, Input, Col, Label } from 'reactstrap'
import axios from 'axios';
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';



const Education = () => {

    const [inputFields, setInputFields] = useState([
        { course: '', collegeName: '', universityName: '', stream: '', score: '', startDate: '', endDate: '' }
    ]);


    const personalId = localStorage.getItem("personalId");


    const handleChangeInput = (index,event) => {
        
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let object = Object.assign({}, inputFields);


        for(let i=0;i<inputFields.length;i++){
            object[i]["personal"] = {id:personalId};

        console.log(object);
        axios.post(`${base_url}/user-service/education`,object[i.toString()],
        {
            headers:{
              jwtToken: JwtToken, 
            }
        }).then((response) => {
            console.log(response)
            alert("Data saved successfully! Please click on next menu for filling more details");
            // const values = [...inputFields];
            // values[index][event.target.name] = "";
            // setInputFields(values);
          })
          .catch((error) => {
            console.log(error);
          });
        }

       
    };

    const handleAddFields = () => {
        setInputFields([...inputFields,{ course: '', collegeName: '', universityName: '', stream:'', score: '', startDate: '', endDate: '' }]);
    };
    
    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index,1);
        setInputFields(values);
    };

    return (
        <div>
            <h3>Education Details</h3>
            <Form onSubmit={handleSubmit}>
                {
                    inputFields.map((inputField, index) => (

                        <div key={index}>
                            <Container style={{textAlign:'right'}} >
                                {
                                    inputFields.length === 1 ? 
                                    <FaPlusCircle className='text-warning fs-4 me-2' onClick={() =>{handleAddFields()}}/> :
                                    <>
                                    <FaPlusCircle className='text-warning fs-4 me-2' onClick={() =>{handleAddFields()}}/>
                                    <FaTrashAlt className='text-danger fs-4' onClick={() =>{handleRemoveFields(index)}} />
                                    </>
                                }
                            </Container>
                            <FormGroup>
                                <Label for='course'>Course/Degree</Label>
                                <Input type='text' placeholder='Enter Course/Degree' name="course" id="course"
                                 value={inputFields.course} onChange={event => handleChangeInput(index,event)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='school'>College</Label>
                                <Input type='text' placeholder='Enter College Name' name="collegeName" id="school"
                                 value={inputFields.collegeName} onChange={event => handleChangeInput(index,event)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='universityName'>University</Label>
                                <Input type='text' placeholder='Enter University Name' name="universityName" id="universityName"
                                 value={inputFields.universityName} onChange={event => handleChangeInput(index,event)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='stream'>Stream/Branch</Label>
                                <Input type='text' placeholder='Enter Stram/Branch' name="stream" id="stream"
                                 value={inputFields.stream} onChange={event => handleChangeInput(index,event)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='grade'>Grade/Score</Label>
                                <Input type='text' placeholder='Enter Grade/Score' name="score" id="score"
                                 value={inputFields.score} onChange={event => handleChangeInput(index,event)} />
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={6}>
                                    <Label for="startDate">
                                        Start Date
                                    </Label>
                                    <Input
                                        id="startDate"
                                        name="startDate"
                                        placeholder="date placeholder"
                                        type="date"
                                        value={inputFields.startDate}
                                        onChange={event => handleChangeInput(index,event)}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Label for="endDate">
                                        End Date
                                    </Label>
                                    <Input
                                        id="endDate"
                                        name="endDate"
                                        placeholder="date placeholder"
                                        type="date"
                                        value={inputFields.endDate}
                                        onChange={event => handleChangeInput(index,event)}
                                    />
                                </Col>
                            </FormGroup>
                        </div>

                    ))
                }
                <Button color='success' onClick={handleSubmit} type='submit'>Save</Button>
            </Form>
        </div>
    )
}

export default Education