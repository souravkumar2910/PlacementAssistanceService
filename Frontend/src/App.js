
import Admin from './admin/Admin';
// import { useState,useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import QuizShow from './quiz/QuizShow';
import StartQuiz from './quiz/StartQuiz';


import ResumeMain from './resume/ResumeMain';
import NavbarPage from './components/NavbarPage';
import Categories from './admin/Categories';
import AddCategory from './admin/AddCategory';
import AllQuizzes from './admin/AllQuizzes';
import AddQuiz from './admin/AddQuiz';
import AddQuestion from './admin/AddQuestion';
import ViewQuestion from './admin/ViewQuestion';
import CardTemplate from './resumetemplates/CardTemplate';
import { FirstTemplate } from './resumetemplates/firstTemplate/FirstTemplate';
import SecondTemplate from './resumetemplates/secondTemplate/SecondTemplate';
import Dashboard from './admin/Dashboard';
import AdminLogin from './admin/AdminLogin';


function App() {


  return (
<>
      <NavbarPage />
      <Routes>
        <Route path="quiz" element={<QuizShow />} exact />
        <Route path="quiz/:id" element={<StartQuiz />} exact />
        <Route path="resume" element={<ResumeMain />} exact />
        <Route path='/resume/templates' element={<CardTemplate />} exact />
        <Route path='/firsttemplate' element ={<FirstTemplate/>} exact />
        <Route path='/secondtemplate' element ={<SecondTemplate/>} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />

        <Route path="admin" element={<Admin />} exact >
            <Route path="" element={<Dashboard />} exact />
            <Route path="view-categories" element={<Categories />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="category/edit/:id" element={<AddCategory />} />
            <Route path="quiz" element={<ViewQuestion />} />
            <Route path="quiz/add-question" element={<AddQuestion />} />
            <Route path="quiz/question/:id" element={<AddQuestion />} />
            <Route path="all-quiz" element={<AllQuizzes />} />
            <Route path="add-quiz" element={<AddQuiz />} exact />
          </Route>
       </Routes>
  
</>
  );
}

export default App;
