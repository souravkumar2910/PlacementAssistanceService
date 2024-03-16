import axios from 'axios';
import {base_url} from './base_url';
import { JwtToken } from './JwtToken';

class QuestionService{

    create(question){
        return axios.post(`${base_url}/quiz-service/question/`,question,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    get(qid){
        return axios.get(`${base_url}/quiz-service/question/quiz/${qid}`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    getSIngleQuestion(quesid){
        return axios.get(`${base_url}/quiz-service/question/${quesid}`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    delete(quesid){
        return axios.delete(`${base_url}/quiz-service/question/${quesid}`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }
    update(question){
        return axios.put(`${base_url}/quiz-service/question/`,question,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

}

export default new QuestionService();