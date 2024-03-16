import axios from "axios";
import {RESUME_BASE_URL} from '../config/GlobalConstants';
import {JwtToken} from './JwtToken';

const USER_API_BASE_URL = "http://localhost:8082/placement/users/hobbies/";

class HobbiesService{

    saveUserHobbies(userHobbies) {
        return axios.post(USER_API_BASE_URL+'hobby', userHobbies);
      }

      getUserHobbies(uId){
        return axios.get(`${RESUME_BASE_URL}/hobbies/${uId}`,{
          headers:{
              jwtToken:JwtToken
          }
      });
    }
}

export default new HobbiesService();