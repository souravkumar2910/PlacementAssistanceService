import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import QuizShow from '../quiz/QuizShow';
import StartQuiz from '../quiz/StartQuiz';


import AddSkills from '../resume/AddSkills';
import Education from '../resume/Education';
import Experience from '../resume/Experience';
import Hobbies from '../resume/Hobbies';
import Home from '../resume/Home';
import Objective from '../resume/Objective';
import PersonalDetails from '../resume/PersonalDetails';
import Project from '../resume/Project';
import {FirstTemplate } from '../resumetemplates/firstTemplate/FirstTemplate'


import ResumeMain from '../resume/ResumeMain';

import Social from '../resume/Social';
import NavbarPage from './NavbarPage'

// import Footer from './Footer'
// import NavbarPage from './NavbarPage';

const MainPage = () => {
    return (
        <div>
           {/* <Demo /> */}
            {/* <NavbarPage /> */}
            {/* <NavbarPage /> */}
            <Router>
                <NavbarPage />
                <Routes>
                    <Route path="quiz" element={<QuizShow />} exact />
                    <Route path="quiz/:id" element={<StartQuiz />} exact />
                    <Route path="resumetemplates" element={<FirstTemplate />} />
            
                    
                </Routes>
                {/* <Route path="/" element={<Home />} exact />
                                    <Route path="/personal-details" element={<PersonalDetails />} exact />
                                    <Route path="/education" element={<Education />} exact />
                                    <Route path="/add-skills" element={<AddSkills />} exact />
                                    <Route path="/objective" element={<Objective />} exact />
                                    <Route path="/experience" element={<Experience />} exact />
                                    <Route path="/project" element={<Project />} exact />
                                    <Route path="/hobbies" element={<Hobbies />} exact />
                                    <Route path="/social-links" element={<Social />} exact /> */}
                {/* <Route path="/about" element={<About />} exact />
                    <Route path="/service" element={<Services />} exact />
                    <Route path="/register" element={<Register />} exact />
                    <Route path="/login" element={<Login />} exact /> */}
            </Router>
            
        </div>
    )
}

export default MainPage