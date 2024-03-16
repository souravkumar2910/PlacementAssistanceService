import axios from "axios";
import {RESUME_BASE_URL} from '../config/GlobalConstants';
import {JwtToken} from './JwtToken';

// const USER_API_BASE_URL = "http://localhost:8082/placement/users/skills/";


class AddSkillsService{

    saveUserSkills(userSkills) {
        return axios.post(`${RESUME_BASE_URL}/skill/`, userSkills);
      }

    getUserSkills(uId){
        return axios.get(`${RESUME_BASE_URL}/skill/${uId}`,{
            headers:{
                jwtToken:JwtToken
            }
        });
    }
}

export default new AddSkillsService();