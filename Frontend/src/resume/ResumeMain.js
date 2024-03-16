import React, { useEffect } from 'react'
import {
    // BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
// import { Container } from 'reactstrap';
import Home from './Home';
import {Nav, Tab,Row,Col, Container} from 'react-bootstrap'
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import AddSkills from './AddSkills';
import Hobbies from './Hobbies';
import Objective from './Objective';
import Project from './Project';
import Social from './Social';
import Header from './Header';
import './ResumeMain.css';
import {Link} from 'react-router-dom';
// import PersonalDetailsService from '../services/PersonalDetailsService';
// import { setUserIdSession } from '../config/Common';



const ResumeMain = () => {


    // const emailUser = JSON.parse(localStorage.getItem("user"));

    // useEffect(()=>{
    //     PersonalDetailsService.getUserDetails(emailUser)
    //     .then((response) => {
    //       console.log(response);
    //     //   navigate("/education",{state:{user : response.data}});
    //     setUserIdSession(response.data.id);
    //     console.log("Users =",response.data.id);
    
    //       // setUserDetails({fullName: "",email: "",jobTitle: "",address: "", phone: "",})
    
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },[emailUser]);

    return (
        <div>
            <div>
                <Header />
                
               <Container>
               <Tab.Container id="left-tabs-example" defaultActiveKey="home">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills"  className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="home" className="home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="personal" className="personal">Personal Details</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="education" id="education">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="add-skills" id="skill">Add Skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="objective" id="objective">Objective</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="experience">Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="project">Project</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="hobbies">Hobbies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="social-links">Social</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="home" title='home'>
                                    <Home />
                                </Tab.Pane>
                                <Tab.Pane eventKey="personal">
                                    <PersonalDetails />
                                </Tab.Pane>
                                <Tab.Pane eventKey="education">
                                    <Education />
                                </Tab.Pane>
                                <Tab.Pane eventKey="add-skills">
                                    <AddSkills />
                                </Tab.Pane>
                                <Tab.Pane eventKey="objective">
                                    <Objective />
                                </Tab.Pane>
                                <Tab.Pane eventKey="experience">
                                    <Experience />
                                </Tab.Pane>
                                <Tab.Pane eventKey="project">
                                    <Project />
                                </Tab.Pane>
                                <Tab.Pane eventKey="hobbies">
                                    <Hobbies />
                                </Tab.Pane>
                                <Tab.Pane eventKey="social-links">
                                    <Social />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    
                </Tab.Container>
                
               </Container>
               {/* <Container className='text-center'><Link className='btn btn-info' to="/resume/templates">Generate Resume</Link></Container> */}
            </div>
            
        </div>
    )
}

export default ResumeMain