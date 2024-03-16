package com.quiz.controller;

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
import com.quiz.model.Quiz;
import com.quiz.service.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/quiz")
public class QuizController {
	
	@Autowired
	private QuizAuth quizAuth;
	
	@Autowired
    private QuizService quizService;
	
	//add Quiz
	@PostMapping("/")
	public ResponseEntity<?> add(@RequestHeader String jwtToken, @RequestBody Quiz quiz)
			throws AccessForbiddenException {
		
		quizAuth.isTokenValid(jwtToken);
		Quiz quiz1 = this.quizService.addQuiz(quiz);
		return ResponseEntity.ok(quiz1);
	}
	
	//get Single Quiz
	@GetMapping("/{quizId}")
	public Quiz getSingleQuiz(@RequestHeader String jwtToken, @PathVariable("quizId") Long quizId) 
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		return this.quizService.getSingleQuiz(quizId);
	}
	
	//get all Quiz
	@GetMapping("/")
	public ResponseEntity<?> getQuizzes(@RequestHeader String jwtToken)
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}
	
	//update Quiz
	
	@PutMapping("/")
	public ResponseEntity<Quiz> update(@RequestHeader String jwtToken, @RequestBody Quiz quiz) 
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		Quiz updateQuiz =  this.quizService.updateQuiz(quiz);
		return ResponseEntity.ok(updateQuiz);
	}
	
	//delete Quiz by using Id
	
	@DeleteMapping("/{quizId}")
	public void deleteCategory(@RequestHeader String jwtToken, @PathVariable("quizId") Long quizId)
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		this.quizService.deleteQuiz(quizId);
	}
	
	

}
