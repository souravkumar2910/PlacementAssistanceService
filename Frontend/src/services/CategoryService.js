import axios from 'axios';
import {base_url} from './base_url';
import {JwtToken} from './JwtToken';

class CategoryService{

    create(category){
        return axios.post(`${base_url}/quiz-service/category/`,category,{
            headers:{
                jwtToken: JwtToken
            }
        });
    }

    getAllCategory(){
        return axios.get(`${base_url}/quiz-service/category/`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    get(cid){
        return axios.get(`${base_url}/quiz-service/category/${cid}`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    delete(cid){
        return axios.delete(`${base_url}/quiz-service/category/${cid}`,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

    update(category){
        return axios.put(`${base_url}/quiz-service/category/`,category,
        {
            headers:{
                jwtToken:JwtToken
            }
        });
    }

}

export default new CategoryService();