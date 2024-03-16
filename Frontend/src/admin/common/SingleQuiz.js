import React from 'react'
import { Link} from 'react-router-dom';

const SingleQuiz = ({ quizzes }) => {
    
    const QuestionFunc = () =>{
        localStorage.setItem("quizId",quizzes.qid);
    }



    return (
        <div>
                <div className="card mb-1 bg-lightgrey shadow-sm rounded">
                    <div className="card-body">
                        <h5 className="card-title">{quizzes.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Programming</h6>
                        <p className="card-text">{quizzes.description}</p>
                        {/* <button className="btn btn-info" onClick={routeChange} >Questions</button> */}
                        <Link to={`/admin/quiz`} onClick={QuestionFunc} className="btn btn-success">Question</Link>
                        <button type="button" className="btn btn-light">Max-Marks:{quizzes.maxMarks}</button>
                        <button type="button" className="btn btn-light">No Of Questions: {quizzes.noOfQuestions}</button>
                    </div>
                </div>
        </div>
    )
}

export default SingleQuiz