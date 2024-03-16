import React, { useState, useEffect } from 'react'
import QuizService from '../services/QuizService';
import SingleQuiz from './common/SingleQuiz'
import {
    Link
} from 'react-router-dom';
// import ViewQuestion from './ViewQuestion';


const AllQuizzes = () => {

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        QuizService.GetAllQuiz()
            .then((response) => {
                // console.log(response);
                setQuizzes(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);


    return (
        <div>
            <h4>All Quizzes</h4>
            <hr />
            <Link to="/admin/add-quiz" className="btn btn-success px-4 fw-bold mb-2">Add Quiz</Link>

            {

                (quizzes.length !== 0) && quizzes.map((item) => (
                    <SingleQuiz key={item.qid} quizzes={item} />
                ))
            }

        </div>
    )
}

export default AllQuizzes