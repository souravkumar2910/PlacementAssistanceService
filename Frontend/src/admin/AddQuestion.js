import React, { useState,useEffect } from 'react'
import { Button, Container, Form, FormGroup, Input, Col, Row, Label } from 'reactstrap'
import QuestionService from '../services/QuestionService';
// import { ToastContainer, toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';
import { useParams } from 'react-router';
// import './style.css';

const AddQuestion = () => {

    const navigate = useNavigate();
    // const {quizId,quesId} = useParams();
    const [quizId,setQuizId] = useState(0);
    // console.log(quizId,quesId);

    const questionId = useParams();
    const quesId = questionId["id"];
    // console.log(quesId);

    useEffect(() => {
        const qId = localStorage.getItem("quizId");
        (qId !==null) ? setQuizId(qId) : setQuizId(0);
    },[])


    const inputFields = {
        content: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        // "quiz":{
        //     "qid":quizId
        //     // "qid":(quizId || quesId )? quizId : parseInt(qid['id'],10)
        // },
    }

    const [question, setQuestion] = useState(inputFields);

    useEffect(() => {
        if(quesId){
            QuestionService.getSIngleQuestion(quesId)
            .then((question) => {
                // console.log(question.data)
                setQuestion({content:question.data.content,option1:question.data.option1,
                    option2:question.data.option2,option3:question.data.option3,
                    option4:question.data.option4,answer:question.data.answer});
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    },[quesId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(quesId && quizId){
        //     alert(quesId);
        // alert(quizId);
            //   // Update the Question
            const obj = question;
            obj["quesId"] = parseInt(quesId,10);
            obj["quiz"] = {qid:parseInt(quizId,10)}
            console.log(obj);
              QuestionService.update(obj)
              .then((response) => {
                console.log(response.data)
                navigate(`/admin/quiz`);

            })
            .catch((error) => {
                console.log(error);
            })
        }else{
              // Add New Question
            const obj = question;
            obj["quiz"] = {qid:quizId}
              console.log(obj);
            QuestionService.create(obj)
            .then((response) => {
                navigate(`/admin/quiz`);

            })
            .catch((error) => {
                console.log(error);
            })
        }



        // if (!question) {
        //     alert("Fields are Empty");
        // } else {
        //     QuestionService.create(question)
        //         .then((response) => {
        //             navigate(`/view-question`);
        //             // toast.success("Question Added Successfully", {
        //             //     position: "top-bottom",
        //             // });
        //             // setQuestion(inputFields);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         })
        // }
    };

    return (
        <div>

            <h1 className='text-center'>Add Question</h1>
            {/* <ToastContainer /> */}
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

                        {JSON.stringify(question)}
                        <Form>
                            <FormGroup>
                                <Label for='content'>Enter Content</Label>
                                <Input type='textarea' placeholder='Enter Question' name="content" id="content"
                                    value={question.content}
                                    onChange={(e) => { setQuestion({ ...question, content: e.target.value }) }}
                                />
                            </FormGroup>

                            <FormGroup row>
                                <Col sm={6}>
                                    <Label for="option1">
                                        Option:1
                                    </Label>
                                    <Input
                                        id="option1"
                                        name="option1"
                                        placeholder="Option 1"
                                        type="textarea"
                                        value={question.option1}
                                        onChange={(e) => { setQuestion({ ...question, option1: e.target.value }) }}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Label for="option2">
                                        Option:2
                                    </Label>
                                    <Input
                                        id="option2"
                                        name="option2"
                                        placeholder="Option 2"
                                        type="textarea"
                                        value={question.option2}
                                        onChange={(e) => { setQuestion({ ...question, option2: e.target.value }) }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col sm={6}>
                                    <Label for="option3">
                                        Option:3
                                    </Label>
                                    <Input
                                        id="option3"
                                        name="option3"
                                        placeholder="Option 3"
                                        type="textarea"
                                        value={question.option3}
                                        onChange={(e) => { setQuestion({ ...question, option3: e.target.value }) }}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Label for="option4">
                                        Option:4
                                    </Label>
                                    <Input
                                        id="option4"
                                        name="option4"
                                        placeholder="Option 4"
                                        type="textarea"
                                        value={question.option4}
                                        onChange={(e) => { setQuestion({ ...question, option4: e.target.value }) }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label for="answer">
                                    Answer
                                </Label>
                                <Input
                                    id="answer"
                                    name="answer"
                                    placeholder="Enter Answer"
                                    type="textarea"
                                    value={question.answer}
                                    onChange={(e) => { setQuestion({ ...question, answer: e.target.value }) }}
                                >
                                </Input>
                            </FormGroup>

                            <Container>
                                <Link to={`/quiz/question`} className='btn btn-success' onClick={handleSubmit}>ADD</Link>
                                <Button type='reset' color='warning' style={{ marginLeft: "10px" }}>Clear</Button>
                            </Container>
                        </Form>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default AddQuestion