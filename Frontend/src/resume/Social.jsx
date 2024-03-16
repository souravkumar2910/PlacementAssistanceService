import React, {useState} from 'react'
import { Button, Container, Form, FormGroup, Input, Col, Label } from 'reactstrap'
import axios from 'axios';
import { base_url } from '../services/base_url';
import {JwtToken} from '../services/JwtToken';
import {Link} from 'react-router-dom';
// import CardTemplate from 

const Social = () => {
    
    const [userSocial, setUserSocial] = useState({
        // id: "",
        fb: "",
        linkd: "",
        codePlatform: "",
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setUserSocial({ ...userSocial, [e.target.name]: value });
      };

      const personalId = localStorage.getItem("personalId");
    
      const saveUserSocialLink = (e) => {
        e.preventDefault();
        let object = Object.assign({}, userSocial);
        object["personal"] = {id:personalId};

        axios.post(`${base_url}/user-service/social`,object,
        {
            headers:{
              jwtToken: JwtToken, 
            }
        }).then((response) => {
            console.log(response)
            alert("Data saved successfully! Please click Generate Resume button for download the resume");
            setUserSocial({fb: "",
            linkd: "",
            codePlatform: "",});
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const resetDetails = (e) => {
        e.preventDefault();
        setUserSocial({
            id: "",
            fb: "",
            linkd: "",
            codePlatform: "",
        });
      };
    
    return (
        <div>
              <h3>Social Links</h3>
              <Form onSubmit={saveUserSocialLink}>
                  <FormGroup row>
                      <Col sm={6}>
                          <Label for='facebook'>Facebook</Label>
                          <Input type='text' placeholder='Enter FaceBook Url' name="fb" id="facebook"
                          value={userSocial.fb} onChange={(e) => handleChange(e)} />
                      </Col>
                      <Col sm={6}>
                          <Label for='instagram'>LinkedIn</Label>
                          <Input type='text' placeholder='Enter LinkedIn Url' name="linkd" id="linkdin"
                          value={userSocial.linkd} onChange={(e) => handleChange(e)} />
                      </Col>
                  </FormGroup>
                  <FormGroup >
                          <Label for='twitter'>HackerRank/HackerEarth/LeetCode</Label>
                          <Input type='text' placeholder='Enter HackerRank/HackerEarth/LeetCode Url' 
                          name="codePlatform" id="hackerrank"
                          value={userSocial.codePlatform} onChange={(e) => handleChange(e)} />
                  </FormGroup>
                  <Container>
                      <Button type='submit' onClick={saveUserSocialLink} color='success'>Save</Button>
                      {/* <Button type='reset' onClick={resetDetails} color='warning' style={{ marginLeft: "10px" }}>Clear</Button> */}
                  </Container>

                  {/* <Container className='text-center'><Link className='btn btn-info' to="/resume/templates">Generate Resume</Link></Container> */}
              </Form>
        </div>
    )
}

export default Social