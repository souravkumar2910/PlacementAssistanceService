import axios from "axios";
import {RESUME_BASE_URL} from '../config/GlobalConstants';
import {JwtToken} from './JwtToken';

const USER_API_BASE_URL = "http://localhost:8082/placement/users/experiences/";

class ExperienceService{

    saveUserExperience(userExperience) {
        return axios.post(USER_API_BASE_URL+"experience", userExperience);
      }

      getUserExperience(uId){
        return axios.get(`${RESUME_BASE_URL}/experience/${uId}`,{
          headers:{
              jwtToken:JwtToken
          }
      });
    }
}

export default new ExperienceService();