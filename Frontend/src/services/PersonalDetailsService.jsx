import axios from "axios";
import{ USER_API_BASE_URL }from '../config/GlobalConstants';
import {RESUME_BASE_URL} from '../config/GlobalConstants';
// import {base_url} from './base_url'
import {JwtToken} from './JwtToken';

// const JwtToken = localStorage.getItem("token");

// const PERSONAL_BASE_URL = `http://localhost:9090/user-service`;


class PersonalDetailsService{

    // savePersonalDetails(userPersonal) {
    //     return axios.post(`${RESUME_BASE_URL}/personal/`,userPersonal,
    //        {
    //         headers:{
    //             jwtToken:JwtToken
    //         }
    //        }
    //     );
    //   }

    getAllPersonalDetails(){
        return axios.get(USER_API_BASE_URL);
    }

    // getUserDetails(email){
    //     return axios.get(`${USER_API_BASE_URL}/auth/`+email);
    // }
    
    getUserDetails(id){
        return axios.get(`${RESUME_BASE_URL}/personal/${id}`,{
            headers:{
                jwtToken:JwtToken
            }
        });
    }
}

export default new PersonalDetailsService();