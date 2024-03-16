package com.quiz.service;

import java.util.*;

import com.quiz.model.Quiz;

public interface QuizService {
	
	// Add Quiz
	public Quiz addQuiz(Quiz quiz);
	
	// Update Quiz
	public Quiz updateQuiz(Quiz quiz);
	
	// Get All Quizzes
	public Set<Quiz> getQuizzes();
	
	// Get Single Quiz
	public Quiz getSingleQuiz(Long quizId);
	
	// Delete Quiz By Id
	public void deleteQuiz(Long quizId);

}
