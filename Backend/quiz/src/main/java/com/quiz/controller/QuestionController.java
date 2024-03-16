package com.quiz.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.auth.QuizAuth;
import com.quiz.exception.AccessForbiddenException;
//import com.quiz.model.Category;
import com.quiz.model.Question;
import com.quiz.model.Quiz;
import com.quiz.service.QuestionService;
//import com.quiz.service.QuizService;

@RestController
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired
	private QuizAuth quizAuth;
	
	@Autowired
	private QuestionService questionService;
	
//	@Autowired
//	private QuizService quizService;
	
	//add question
		@PostMapping("/")
		public ResponseEntity<Question> add(@RequestHeader String jwtToken, @RequestBody Question question)
				throws AccessForbiddenException {
			quizAuth.isTokenValid(jwtToken);
			Question addQues = this.questionService.addQuestion(question);
			return ResponseEntity.ok(addQues);
		}
		
		// update Question
		@PutMapping("/")
		public ResponseEntity<Question> update(@RequestHeader String jwtToken, @RequestBody Question question) 
				throws AccessForbiddenException {
			quizAuth.isTokenValid(jwtToken);
			Question updateQues = this.questionService.updateQuestion(question);
			return ResponseEntity.ok(updateQues);
		}
		
		
		//delete Question
		
		@DeleteMapping("/{quesId}")
		public void deleteQuestion(@RequestHeader String jwtToken, @PathVariable("quesId") Long quesId)
				throws AccessForbiddenException {
			quizAuth.isTokenValid(jwtToken);
			this.questionService.deleteQuestion(quesId);
		}
		
		//get all Question by using Quiz
		@GetMapping("/quiz/{quizId}")
		public ResponseEntity<?> getQuestion(@RequestHeader String jwtToken, @PathVariable("quizId") Long quizId)
				throws AccessForbiddenException {
			quizAuth.isTokenValid(jwtToken);
			Quiz quiz = new Quiz();
			quiz.setQid(quizId);
			Set<Question> questionsOfQuiz = this.questionService.getQuestionOfQuiz(quiz);
			return ResponseEntity.ok(questionsOfQuiz);
		
		}
		
		//get Single Question
		@GetMapping("/{quesId}")
		public Question get(@RequestHeader String jwtToken, @PathVariable("quesId") Long quesId)
				throws AccessForbiddenException {
			quizAuth.isTokenValid(jwtToken);
			return this.questionService.getSingleQuestion(quesId);	
		}
		
		
		

}
