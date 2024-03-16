import React from 'react'
import {
    Outlet
} from "react-router-dom";

import Header from './common/Header';
import Sidebar from './common/Sidebar';
import './common/style.css';

const Admin = () => {
    return (
        <div>
            {/* <Router> */}

            {/*   Navbar  */}
            <Header />
            {/* -------- Sidebar ------- */}
          <Sidebar />

            {/*   ---------- End Sidebar  ---------- */}


            <main className="mt-2 ps-2">
                <div className="container-fluid">
                    <div className="row">

                        <Outlet />
                        {/* <Routes>
                            <Route path="/view-categories" element={<Categories />} exact />
                            <Route path="/" element={<Dashboard />} exact />
                            <Route path="/add-category" element={<AddCategory />} exact />
                            <Route path="/all-quiz" element={<AllQuizzes />} exact />
                            <Route path="/add-quiz" element={<AddQuiz />} exact />
                            <Route path="/quiz/add-question/:id" element={<AddQuestion />} exact />
                            <Route path="/add-question/edit/:quesId/:quizId" element={<AddQuestion />} exact />
                            <Route path="/view-question" element={<ViewQuestion />} exact />
                            
                            <Route path="/category/edit/:id" element={<AddCategory />} exact />

                            <Route path="/add-question" element={<AddQuestion />} exact />
                            <Route path="/view-question/quiz" element={<ViewQuestion />} exact />
                            <Route path="/quiz/question/:id" element={<ViewQuestion />} exact />
                        </Routes> */}
                    </div>
                </div>
            </main>


            {/* <Container>
               <Tab.Container id="left-tabs-example" defaultActiveKey="home">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills"  className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="home" className="category">Category</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="personal" className="personal">Quiz</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="education" id="education">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="add-skills" id="skill">Add Skills</Nav.Link>
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
               </Container> */}


            {/* </Router> */}
        </div>
    )
}

export default Admin