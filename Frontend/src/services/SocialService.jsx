import axios from "axios";
import {RESUME_BASE_URL} from '../config/GlobalConstants';
import {JwtToken} from './JwtToken';

const USER_API_BASE_URL = "http://localhost:8082/placement/users/social/";

class SocialService{

    saveUserSocial(userSocial) {
        return axios.post(USER_API_BASE_URL+'sociallink', userSocial);
      }

      getUserSocailLink(id){
        return axios.get(`${RESUME_BASE_URL}/social/${id}`,{
          headers:{
              jwtToken:JwtToken
          }
      });
    }
}

export default new SocialService();