import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Container, Col, Row, CardHeader, CardSubtitle, CardText } from 'reactstrap'
import QuestionService from '../services/QuestionService';
// import {  useParams } from 'react-router';
import { FaTrashAlt } from 'react-icons/fa';
// import './style.css';

const ViewQuestion = () => {

    // let location = useLocation();
    // console.log(location);
    // const quizId = location.state.qid;
    // console.log(quizId);


    // const id = useParams();
    // const quizId = id["id"];
    // console.log(quizId);

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     navigate('/add-question', { state: { quizId: location.state.qid } }, { replace: true });
    // }

    const [questions, setQuestions] = useState([]);

    let [quizId,setQuizId] = useState(0);

    // useEffect(() => {
    //     if(id){
    //         QuestionService.get(id)
    //         .then((response) => {
    //             console.log(response);
    //             setQuestions(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //     }
    // }, [id]);

    useEffect(() => {
      const qId = localStorage.getItem("quizId");
      (qId!==null ) ? setQuizId(qId) : setQuizId(0);
    },[]);

    const loadQuestion = (quizId) =>{
        QuestionService.get(quizId)
            .then((response) => {
                // console.log(response);
                setQuestions(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadQuestion(quizId);
    }, [quizId]);

    const deleteQuestion = (id) =>{
        QuestionService.delete(id)
        .then((response) => {
           loadQuestion(quizId);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const TrashFunc = () => {
        localStorage.removeItem("quizId");
    }


    return (
        <div>
            <h1 className='text-center'>View Question</h1>
            <Container className='text-center'>
                <Link to="/admin/all-quiz" onClick={TrashFunc} className="btn btn-info">Back</Link>
                <Link to={`/admin/quiz/add-question`} className="btn btn-success">Add Question</Link>
            </Container>

            {

                (questions.length !== 0) && questions.map((item) => (
                    
                    <div key={item.quesId}>
                        <Card >
                            <CardHeader>
                                <CardBody>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {item.quesId} ) {item.content}
                                    </CardSubtitle>

                                    <Row className="m-1">
                                        <Col sm='6'>
                                            <CardText> {item.option1} </CardText>
                                        </Col>
                                        <Col sm='6'>
                                            <CardText> {item.option2} </CardText>
                                        </Col>
                                    </Row>

                                    <Row className="m-1">
                                        <Col sm='6'>
                                            <CardText> {item.option3} </CardText>
                                        </Col>
                                        <Col sm='6'>
                                            <CardText> {item.option4} </CardText>
                                        </Col>
                                    </Row>
                                    <Row className="m-1">
                                    <Link to={`/admin/quiz/question/${item.quesId}`} >Edit</Link>
                                    {/* <Link to={`/question/quiz`} onClick={() => deleteQuestion(item.quesId)} >Delete</Link> */}
                                    <FaTrashAlt onClick={() => deleteQuestion(item.quesId)}/>
                                    </Row>
                                </CardBody>
                            </CardHeader>
                        </Card>
                    </div>
                ))
            }    

        </div>
    )
}

export default ViewQuestion