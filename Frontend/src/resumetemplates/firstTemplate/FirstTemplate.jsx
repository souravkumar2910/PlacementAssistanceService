import React,{ref, useEffect, useState, useRef} from 'react';
import './firstStyle.css'
import PersonalDetailsService from '../../services/PersonalDetailsService';
import SocialService from '../../services/SocialService';
import ExperienceService from '../../services/ExperienceService';
import EducationService from '../../services/EducationService';
import HobbiesService from '../../services/HobbiesService';
import ProjectService from '../../services/ProjectService';
import AddSkillsService from '../../services/AddSkillsService';
// import  {useReactToPrint} from 'react-to-print';
import GenericPdfDownloader from '../GenericPdfDownloader';

// React.forwardRef((props,ref)

export const FirstTemplate = () => {
    
    const [userPersonal, setUserPersonal] = useState([]);
    const [userSocial, setUserSocial] = useState([]);
    const [userExperience, setUserExperience] = useState([]);
    const [userEducation, setUserEducation] = useState([]);
    const [userHobbies, setUserHobbies] = useState([]);
    const [userProject, setUserProject] = useState([]);
    const [userSkills, setUserSkills] = useState([]);

    const uId=localStorage.getItem("personalId");
    // var PrintTemplate = require ('react-print');
    // const componentRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //   });
    
    
    // const emailId = "vivek@gmail.com"

    const loadPersonalData = () =>{

        PersonalDetailsService.getUserDetails(uId)
                .then((response) => {
                    console.log(response.data);
                    setUserPersonal(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadSocailLinkData = () =>{
        SocialService.getUserSocailLink(uId)
                .then((response) => {
                    console.log(response.data);
                    setUserSocial(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadExperienceData = () =>{
        // const eId = 1;
        ExperienceService.getUserExperience(uId)
                .then((response) => {
                    console.log(response.data);
                    setUserExperience(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadEducationData = () =>{
        // const uId=1;
        EducationService.getUserEducation(uId)
                .then((response) => {
                    // console.log(response.data);
                    setUserEducation(response.data);
                    console.log(response.data)
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    
    const loadHobbiesData = () =>{

        HobbiesService.getUserHobbies(uId)
                .then((response) => {
                    console.log(response.data);
                    setUserHobbies(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadProjectData = () =>{
        // const pId=1;
        ProjectService.getUserProject(uId)
                .then((response) => {
                    console.log(response.data);
                    setUserProject(response.data);
                })

                .catch((error) => {
                    console.log(error);
                })
    }

    const loadSkillData = () =>{

        AddSkillsService.getUserSkills(uId)
                .then((response) => {
                    console.log(response.data);
                    setUserSkills(response.data);
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
    }, []);

    return (
        <div ref={ref}>             
                
                

                <div className="offset-md-2 col-md-8" id="wrapper">
                            <div id="header" style={{padding: "0 20px"}} >
                                <div>
                                    {/* <img id="image" /> */}
                                </div>
                                <div>
                                    <h2 id="name">{userPersonal.fullName}</h2>
                                    <div className="underline"></div>
                                    <h4 id="profile">{userPersonal.jobTitle}</h4>
                                </div>
                                <div id='contact-info'>
                                    <h6>+91-{userPersonal.phone}</h6>
                                    <h6>{userSocial.email}</h6>
                                    {
                                        (userSocial.length !==0) && userSocial.map((item) => (
                                            <div key={item.id}>
                                                <h6>{item.linkd}</h6>
                                            </div>
                                        ))
                                    }
                                    <h6>{userPersonal.address}</h6>
                                </div>
                            </div>
                        {/* ))
                    } */}
                    {/* <!-- End Header --> */}

                    {/* <!-- Start Experience --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h4 id="exp-heading">Experience</h4>
                            {/* <!-- Start Experience --> */}
                            {
                                (userExperience.length !==0) && userExperience.map((item) =>(
                                    <div key={item.id} id="experience">
                                        <div className="dot"></div>
                                        <div className="experi">
                                            <span id="head">{item.projTitle}</span>
                                            <p>{item.startDate} to {item.endDate}</p>
                                        </div>
                                        <div>
                                            <h5>{item.compName}</h5>
                                            <p>{item.compProjDesc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <!-- End experience --> */}


                    {/* <!-- Start Education --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h4 id="exp-heading">Education</h4>
                            {/* <!-- Start Education --> */}
                            {
                                (userEducation.length!=0) && userEducation.map((item) => (
                                    <div key={item.id}>
                                        <div id="experience">
                                            <div className="dot"></div>
                                            <div className="experi">
                                                <span id="head">{item.course}</span>
                                                <p>{item.startDate} to {item.endDate}</p>
                                            </div>
                                            <div>
                                            <h5 style={{margin: "0px"}}>{item.collegeName}</h5>
                                                <h6 style={{margin: "0px"}}>{item.universityName}</h6>
                                                <div id="stream">
                                                    <span>Stream: {item.stream}</span>
                                                    <span>percent/CGPA : {item.score}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <!-- End Education --> */}

                    {/* <!-- Start Project --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h4 id="exp-heading">Project</h4>
                            {/* <!-- Start Project --> */}
                            {
                                (userProject.lenght !==0) && userProject.map((item) => (
                                    <div key={item.id} id="experience">
                                        <div className="dot"></div>
                                        <div className="experi">
                                            <span id="head">{item.projTitle}</span>
                                            <p>{item.startDate} to {item.endDate}</p>
                                        </div>
                                        <div>
                                            <p>{item.projDesc}
                                                <span style={{fontSize: "16px", fontWeight: "500", marginTop: "0", paddingLeft: "10px"}}>Skill Used: </span>{item.skillUsed}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <!-- End Education --> */}

                    {/* <!-- Start Skill and Hobbies --> */}
                    <div className="row">
                        <div className="col-md-6">
                            <h4 id="exp-heading">Skill</h4>
                            {
                                (userSkills.length !==0) && userSkills.map((item) => (
                                    <div className="skill ms-4 pe-2">
                                        <span className="badge rounded-pill bg-secondary" style={{fontSize: "14px"}}>{item.skillName}</span>
                                    </div>
                                ))
                            }
                            <div className="skill ms-4 pe-2">
                                <span className="badge rounded-pill bg-secondary" style={{fontSize: "14px"}}>{userSkills.skillName}</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 id="exp-heading">Hobbies</h4>
                            {
                                (userHobbies.length !==0) && userHobbies.map((item) => (
                                    <div key={item.id} className="hobbies ms-4 pe-2">
                                        <span className="badge rounded-pill bg-secondary" style={{fontSize: "14px"}}>{item.hobbies}</span>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    {/* End Skill and Hobbies */}


                    {/* <!-- Start Declaration --> */}
                    <div className="row">
                        <div className="col-md-12 my-5 ">
                            <h4 id="exp-heading">Declaration</h4>
                            <p className="mx-4">I hereby declare that all above mentioned information is true with the best of my knowledge.</p>
                        </div>
                    </div>
                    {/* <!-- End Declaration  --> */}
                </div>
                {/* <Button onClick={handlePrint}>Print this out!</Button> */}
                <div><center>
                <GenericPdfDownloader 
                    downloadFileName={userPersonal.fullName} 
                    rootElementId="wrapper" 
                /></center>
                </div>
                
        </div>
        
    );
};

// export default FirstTemplate

