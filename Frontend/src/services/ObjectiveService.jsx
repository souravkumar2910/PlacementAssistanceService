import axios from "axios";
import {RESUME_BASE_URL} from '../config/GlobalConstants';
import {JwtToken} from './JwtToken';

const USER_API_BASE_URL = "http://localhost:8082/placement/users/objectives/";

class ObjectiveService{

    saveUserObjective(userObjective) {
        return axios.post(USER_API_BASE_URL+'objective', userObjective);
      }

    getUserObjective(uId){
        return axios.get(`${RESUME_BASE_URL}/objective/${uId}`,{
            headers:{
                jwtToken:JwtToken
            }
        });
    }
}

export default new ObjectiveService();