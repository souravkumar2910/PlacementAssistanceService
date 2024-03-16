import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { Col, Container, Row, Alert, Badge, Button, Card, CardBody, CardSubtitle, CardText, FormGroup, Input, Label } from 'reactstrap';
// import ReactPaginate from 'react-paginate';
import QuestionService from '../services/QuestionService';
import Swal from 'sweetalert2';
// import './App.css'


const StartQuiz = () => {

    const {id} = useParams();

    // alert(id)

    const [questions, setQuestions] = useState([]);
    // const [error, setError] = useState("");
    const [inputData, setInputData] = useState({});
    // const [answer,setAnswer] = useState([]);

    useEffect(() => {
        // const id = 1;
        // alert(id);
        // alert(id);
        QuestionService.get(id)
            .then((response) => {
                console.log(response.data);
                setQuestions(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    // console.log(inputData);
    // const ansArray = Object.values(inputData);
    // console.log(ansArray);

    // for (let i = 0; i < questions.length; i++) {
    //     questions[i]["givenAnswer"] = inputData[questions.quesId];
    // }

    // const a = [];
    // for (let i = 1; i < questions.length + 1; i++) {
    //     a.push(i);
    // }

    // console.log(a);

    let unAttempt = 0;
    let attempt =0;
    let gotMarks = 0;
    let corretAns = 0;
    let wrongAns =0;
    let otherWise =0;

    const submitQuestion = (e) => {
        e.preventDefault();
        console.log(questions);
        // console.log("click");
        console.log(inputData)
        const marks = questions[0].quiz.maxMarks;
        //  console.log(marks)
        let singleMarks = marks / questions.length;
        questions.forEach((ques) => {


            if(inputData[ques["quesId"]] === ques["answer"]){
                corretAns++;
                gotMarks += singleMarks;
            }else{
                otherWise++;
            }

            if(inputData[ques["quesId"]] === undefined){
                unAttempt++;
            }

        })

        wrongAns = otherWise - unAttempt;
        attempt = questions.length - unAttempt;


        // console.log("correct=", corretAns);
        // console.log("marks=", gotMarks);
        // console.log("Attempt=", attempt);
        // console.log("Attempt=", wrongAns);

        Swal.fire({
            title: "You have completed your test",
            text: "Attempted Questions= "+attempt+" , Correct Answer= "+corretAns+" , Total Marks= "+gotMarks+" , Wrong Answer= "+wrongAns,
            // icon: "success",
            confirmButtonText: "OK",
          }).then(function () {
              // Redirect the user , 
              window.location.href = "/quiz";
            });

    }

    return (
        <div style={{ height: '100%', backgroundColor: '#c5d0e3', padding: "20px 0" }}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Alert
                            color="primary"
                        >
                            Java Basic Quiz
                        </Alert>
                        {questions !== null ? questions.map((question) => {

                            return (
                                <Card key={question.quesId} style={{ backgroundColor: "#c3dffa", padding: '15px', marginBottom: '10px' }}
                                >
                                    <CardBody>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {question.quesId} ) {question.content}
                                        </CardSubtitle>
                                        <CardText>
                                            <FormGroup tag="fieldset">
                                                <FormGroup check>
                                                    <Input
                                                        name={question.quesId.toString()}
                                                        type="radio"
                                                        id="option1"
                                                        value={question.option1}
                                                        onChange={(e) => { setInputData({ ...inputData, [question.quesId]: e.target.value }) }}

                                                    />
                                                    {' '}
                                                    <Label for="option1" check>
                                                        {question.option1}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Input
                                                        name={question.quesId.toString()}
                                                        type="radio"
                                                        id="option2"
                                                        value={question.option2}
                                                        onChange={(e) => { setInputData({ ...inputData, [question.quesId]: e.target.value }) }}
                                                    />
                                                    {' '}
                                                    <Label for="option2" check>
                                                        {question.option2}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Input
                                                        name={question.quesId.toString()}
                                                        type="radio"
                                                        id="option3"
                                                        value={question.option3}
                                                        onChange={(e) => { setInputData({ ...inputData, [question.quesId]: e.target.value }) }}
                                                    />
                                                    <Label for="option3" check>
                                                        {question.option3}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check >
                                                    <Input
                                                        name={question.quesId.toString()}
                                                        type="radio"
                                                        id="option4"
                                                        value={question.option4}
                                                        onChange={(e) => { setInputData({ ...inputData, [question.quesId]: e.target.value }) }}
                                                    />
                                                    <Label for="option4" check>
                                                        {question.option4}
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            )
                        }) : ""}

                        <Container>
                            <Button onClick={submitQuestion}>Submit</Button>
                        </Container>

                    </Col>
                    {/* <Col color="success" sm={4}>
                        <Alert
                            color="success"
                        >
                            {
                    
                                (a != null) ? a.map((index) => {
                                    return (
                                        <Badge
                                            color="primary"
                                            pill
                                            style={{ fontSize: "25px", marginRight: '6px', marginBottom:"6px" }}
                                        >
                                            {index}
                                        </Badge>
                                    )

                                }) : ""
                            }

                        </Alert>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default StartQuiz