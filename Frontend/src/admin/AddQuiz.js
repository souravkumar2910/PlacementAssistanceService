import React from 'react'
import { Button, Container, Form, FormGroup, Input, Col, Row, Label } from 'reactstrap'
import CategoryService from '../services/CategoryService';
import QuizService from '../services/QuizService';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import './style.css';

const AddQuiz = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [category, setcategory]=useState('');

    const [quiz,setQuiz] = useState({
        title:'',
        description:'',
        maxMarks:'',
        noOfQuestions:'',
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        // alert(quiz);
        const obj = quiz;
        obj["category"] = {cid:parseInt(category,10)};
        // alert(JSON.stringify(obj));


        if(!obj){
            alert("Fields are Empty");
        }else{
        QuizService.addQuiz(obj)
        .then((response) => {
            // console.log(obj)
            navigate("/admin/all-quiz");
              console.log(response)
              //setQuiz()
        })
        .catch((error) => {
            console.log(error);
        })
        }
    }

    useEffect(() => {
        CategoryService.getAllCategory()
            .then((response) => {
                console.log(response);
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            {/* <ToastContainer/> */}
            <h1 className='text-center'>Add Quiz</h1>
            <Container>

                <Row>
                    <Col
                        className="bg-info border p-3"
                        md={{
                            offset: 2,
                            size: 8
                        }}
                        sm="12"
                    >
                        {JSON.stringify(quiz)}
                        <Form>
                            <FormGroup>
                                <Label for='title'>Title</Label>
                                <Input type='text' placeholder='Enter Title' name="title" id="title"
                                 value={quiz.title} 
                                 onChange={(e) => {setQuiz({...quiz,title:e.target.value})} } />
                            </FormGroup>
                            <FormGroup>
                                <Label for='description'>Description</Label>
                                <Input type='textarea' placeholder='Enter Description' name="description" id="description"
                                 value={quiz.description} 
                                 onChange={(e) => {setQuiz({...quiz,description:e.target.value})} } />
                            </FormGroup>

                            <FormGroup row>
                                <Col sm={6}>
                                    <Label for="marks">
                                        Max Marks
                                    </Label>
                                    <Input
                                        id="marks"
                                        name="maxMarks"
                                        placeholder="Enter Marks"
                                        type="text"
                                        value={quiz.maxMarks}
                                        onChange={(e) => {setQuiz({...quiz,maxMarks:e.target.value})} }
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Label for="noOfQues">
                                        No. Of Question
                                    </Label>
                                    <Input
                                        id="noOfQues"
                                        name="noOfQuestions"
                                        placeholder="Enter No Of Questions"
                                        type="text"
                                        value={quiz.noOfQuestions}
                                        onChange={(e) => {setQuiz({...quiz,noOfQuestions:e.target.value})} }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="categories">
                                    Categories
                                </Label>
                                <Input
                                    id="category"
                                    name="category"
                                    type="select"
                                    value={category}
                                    onChange={(e) => {
                                        setcategory(e.target.value);
                                     } }
                                >
                                    <option>--Select--</option>
                                    {
                                        categories.map((item) => (

                                            <option key={item.cid} value={item.cid}>
                                                {item.title}
                                                {/* {console.log(item.title)} */}
                                            </option>
                                        ))
                                    }
                                </Input>
                            </FormGroup>



                            <Container>
                                <Button type='submit' onClick={handleSubmit} color='success'>ADD</Button>
                                <Button type='reset' color='warning' style={{ marginLeft: "10px" }}>Clear</Button>
                            </Container>
                        </Form>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default AddQuiz