import React, {useEffect, useState, useRef} from 'react'
import './secondStyle.css'
import  {useReactToPrint} from 'react-to-print';

import PersonalDetailsService from '../../services/PersonalDetailsService';
import SocialService from '../../services/SocialService';
import ExperienceService from '../../services/ExperienceService';
import EducationService from '../../services/EducationService';
import HobbiesService from '../../services/HobbiesService';
import ProjectService from '../../services/ProjectService';
import AddSkillsService from '../../services/AddSkillsService';
import ObjectiveService from '../../services/ObjectiveService';
import GenericPdfDownloader from '../GenericPdfDownloader';

const SecondTemplate = () => {
  
    const [userPersonal, setUserPersonal] = useState([]);
    const [userSocial, setUserSocial] = useState([]);
    const [userExperience, setUserExperience] = useState([]);
    const [userEducation, setUserEducation] = useState([]);
    const [userHobbies, setUserHobbies] = useState([]);
    const [userProject, setUserProject] = useState([]);
    const [userSkills, setUserSkills] = useState([]);
    const [userObjective, setUserObjective] = useState([]);

    const uId=localStorage.getItem("personalId");

    // const componentRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //   });

    const loadPersonalData = () =>{

        PersonalDetailsService.getUserDetails(uId)
                .then((response) => {
                    setUserPersonal(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadSocailLinkData = () =>{
        SocialService.getUserSocailLink(uId)
                .then((response) => {
                    setUserSocial(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadExperienceData = () =>{

        ExperienceService.getUserExperience(uId)
                .then((response) => {
                    setUserExperience(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadEducationData = () =>{

        EducationService.getUserEducation(uId)
                .then((response) => {
                    setUserEducation(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    
    const loadHobbiesData = () =>{

        HobbiesService.getUserHobbies(uId)
                .then((response) => {
                    setUserHobbies(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadProjectData = () =>{

        ProjectService.getUserProject(uId)
                .then((response) => {
                    setUserProject(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadSkillData = () =>{

        AddSkillsService.getUserSkills(uId)
                .then((response) => {
                    setUserSkills(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadObjectiveData = () =>{

        ObjectiveService.getUserObjective(uId)
                .then((response) => {
                    setUserObjective(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }



    useEffect(() => {

        loadPersonalData();
        loadSocailLinkData();
        loadExperienceData();
        loadEducationData();
        loadHobbiesData();
        loadProjectData();
        loadSkillData();
        loadObjectiveData();
    }, []);
  
    return (
    <div>
        <div className="wrapper">
            <div className="resume" id="resume">
                <div className="resume-left">
                    <div className="profile">
                        {/* <img alt="profile-photo" /> */}
                    </div>
                    <div className="contact">
                        <div className="title">
                            <div className="name">Contact</div>
                        </div>
                        <div className="contact-content pb">
                            <ul>
                                <li>
                                    <div className="list-wrap">
                                        <div className="icon">
                                            <i className="fa fa-mobile" aria-hidden="true"></i>
                                        </div>
                                        <div className="info">+91 {userPersonal.phone}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-wrap">
                                        <div className="icon">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div className="info">{userPersonal.email}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-wrap">
                                        <div className="icon">
                                            <i className="fa fa-address-book" aria-hidden="true"></i>
                                        </div>
                                        <div className="info">{userPersonal.address}</div>
                                    </div>
                                </li>
                                <li>
                                    {
                                        (userSocial.length !==0) && userSocial.map((item) => (
                                            <div key={item.id} className="list-wrap">
                                                <div className="icon">
                                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                </div>
                                                <a
                                                    href="#">{item.linkd}</a>
                                            </div>
                                        ))
                                    }
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hobbies">
                        <div className="title">
                            <div className="name">Hobbies</div>
                        </div>
                        <div className="hobbies-content pb">
                            <ul>
                                <li>
                                    {
                                        (userHobbies.length !==0) && userHobbies.map((item) => (
                                            <div key={item.id} className="list-wrap">
                                                <div className="icon">
                                                    <i className="fa fa-gamepad" aria-hidden="true"></i>
                                                </div>
                                                <div className="info">{item.hobbies}</div>
                                            </div>
                                        ))
                                    }
                                
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resume-right">
                    <div className="header">
                        <div className="name-role">
                            <div className="name">
                                {userPersonal.fullName}
                            </div>
                            <div className="role">
                                {userPersonal.jobTitle}
                            </div>
                        </div>
                        <div className="about-obj">
                            <h5>OBJECTIVE</h5>
                            {
                                (userObjective.length !==0) && userObjective.map((item) => (
                                    <div key={item.id}>
                                        <p>
                                            {item.objective}
                                        </p>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>

                    <div className="inner-right">
                        <div className="education">
                            <div className="title">
                                Education
                            </div>
                            <div className="edu-content">
                                <ul>
                                    <li>
                                        {
                                            (userEducation.length !==0) && userEducation.map((item) => (
                                                <div key={item.id} className="list-wrap">
                                                    <div className="date">{item.startDate} to {item.endDate}</div>
                                                    <div className="info">
                                                        <p className="info-title">{item.course}</p>
                                                        <p className="info-from">{item.universityName}</p>
                                                        <p className="info-clg">{item.collegeName} </p>
                                                        <p className="info-clg">Percentage: {item.score}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="work-exp">
                            <div className="title">
                                Experience
                            </div>
                            <div className="exp-content">
                                <ul>
                                    <li>
                                        {
                                            (userExperience.length !==0) && userExperience.map((item) => (
                                                <div key={item.id} className="list-wrap">
                                                    <div className="date">{item.startDate} to {item.endDate}</div>
                                                    <div className="info">
                                                        <p className="info-title">{item.projTitle}</p>
                                                        <p className="info-clg">{item.compProjDesc}
            
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="technical-skill">
                            <div className="title">
                                TECHNICAL SKILLS
                            </div>
                            <div className="tech-content">
                                <ul>
                                    <li>
                                        {
                                            (userSkills.length !==0) && userSkills.map((item) => (
                                                <div key={item.id} className="list-wraps">
                                                    <div className="info">
                                                        <p className="info-clg">
                                                            {item.skillName}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="project">
                            <div className="title">
                                Project
                            </div>
                            <div className="project-content">
                                <ul>
                                    <li>
                                        {
                                            (userProject.length !== 0) && userProject.map((item) => (
                                                <div key={item.id} className="list-wraps">
                                                    <div className="info">
                                                        <p className="info-title">{item.projTitle}</p>
                                                        <p className="info-clg">
                                                            {item.projDesc}
                                                        </p>

                                                    </div>
                                                </div>
                                            ))
                                        }
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div><center>
            <GenericPdfDownloader 
                downloadFileName={userPersonal.fullName} 
                rootElementId="resume" 
            /></center>
        </div>
    </div>
  )
}

export default SecondTemplate