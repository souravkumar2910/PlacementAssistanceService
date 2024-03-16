import axios from "axios";
import {JwtToken} from './JwtToken';
import {RESUME_BASE_URL} from '../config/GlobalConstants';

// const USER_API_BASE_URL = "http://localhost:8082/placement/users/educations/";

class EducationService{

    // saveUserEducation(userEducation) {
    //     return axios.post(USER_API_BASE_URL+'education', userEducation);
    //   }

    getUserEducation(id){
        return axios.get(`${RESUME_BASE_URL}/education/${id}`,{
            headers:{
                jwtToken:JwtToken
            }
        });
    }
}

export default new EducationService();