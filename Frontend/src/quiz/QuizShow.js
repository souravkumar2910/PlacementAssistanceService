import React, { useState, useEffect } from 'react'
import {
    Link,
    // Route,
    // Routes
} from "react-router-dom";
// import StartQuiz from './StartQuiz'
import QuizService from '../services/QuizService';


const QuizShow = () => {

    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        QuizService.GetAllQuiz()
            .then((response) => {
                // console.log(response);
                setQuiz(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    return (
        <div>

            {/* <nav className="navbar navbar-light bg-info">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Quizzes</span>
                    </div>
                </nav> */}

            {/* <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className="d-flex">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div> */}

            <section className="container mt-5">
                <div className="row">

                    {

                        (quiz.length !== 0) && quiz.map((item) => (

                            <div key={item.qid} className="col-md-3 col-sm-6 col-12 mb-3">
                                <div className="card" style={{ backgroundColor: "#f2f2f2",textAlign:'center',padding:'10px 10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <Link to={`/quiz/${item.qid}`} className="btn btn-outline-info">View</Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </section>

        </div>


    )
}

export default QuizShow