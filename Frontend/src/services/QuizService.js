import axios from 'axios';
import {base_url} from './base_url';
import { JwtToken } from './JwtToken';

class QuizService{

    addQuiz(quiz){
        return axios.post(`${base_url}/quiz-service/quiz/`,quiz,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    GetAllQuiz(){
        return axios.get(`${base_url}/quiz-service/quiz/`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

}

export default new QuizService();