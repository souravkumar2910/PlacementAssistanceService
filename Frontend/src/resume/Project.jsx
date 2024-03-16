import React, { useState } from 'react'
import { FaPlusCircle,FaTrashAlt } from 'react-icons/fa';
import { Button, Container, Form, FormGroup, Input, Col, Label } from 'reactstrap'
import axios from 'axios';
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';

const Project = () => {

    const [inputFields, setInputFields] = useState([
        { projTitle: '', projDesc: '', skillUsed: '', startDate: '', endDate: '' }
    ]);

    const personalId = localStorage.getItem("personalId");

    const handleChangeInput = (index, event) => {

        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let object = Object.assign({}, inputFields);

        for(let i=0;i<inputFields.length;i++){
            
            object[i]["personal"] = {id:personalId};
            axios.post(`${base_url}/user-service/project`,object[i.toString()],
            {
                headers:{
                  jwtToken: JwtToken, 
                }
            }).then((response) => {
                console.log(response)
                alert("Data saved successfully! Please click on next menu for filling more details");
              })
              .catch((error) => {
                console.log(error);
              });
        }
    };

    const handleAddFields = () => {
        setInputFields([...inputFields, { projTitle: '', projDesc: '', skillUsed: '', startDate: '', endDate: '' }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };
    
    return (
        <div>
            <h3>Project</h3>
            <Form onSubmit={handleSubmit}>
                {
                    inputFields.map((inputField, index) => (

                        <div key={index}>
                            <Container style={{ textAlign: 'right' }} >
                                {
                                    inputFields.length === 1 ?
                                        <FaPlusCircle className='text-warning fs-4 me-2' onClick={() => { handleAddFields() }} /> :
                                        <>
                                            <FaPlusCircle className='text-warning fs-4 me-2' onClick={() => { handleAddFields() }} />
                                            <FaTrashAlt className='text-danger fs-4' onClick={() => { handleRemoveFields(index) }} />
                                        </>
                                }
                            </Container>

                            <FormGroup>
                                <Label for='projTitle'>Title</Label>
                                <Input type='text' placeholder='Enter Title' name="projTitle" id="projTitle"
                                    value={inputField.projTitle} onChange={event => handleChangeInput(index, event)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='projDesc'>Description</Label>
                                <Input type='textarea' placeholder='Enter Description' name="projDesc" id="projDesc"
                                    value={inputField.projDesc} onChange={event => handleChangeInput(index, event)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='skillUsed'>Skills Used</Label>
                                <Input type='text' placeholder='Enter Used Skills' name="skillUsed" id="skillUsed"
                                    value={inputField.skillUsed} onChange={event => handleChangeInput(index, event)} />
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
                                        value={inputField.startDate}
                                        onChange={event => handleChangeInput(index, event)}
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
                                        value={inputField.endDate}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Col>
                            </FormGroup>
                        </div>

                    ))
                }
                <Container>
                    <Button type='submit' color='success' onClick={handleSubmit}>Save</Button>
                    {/* <Button type='reset' color='warning' style={{ marginLeft: "10px" }}>Clear</Button> */}
                </Container>
            </Form>
        </div>
    )
}

export default Project

