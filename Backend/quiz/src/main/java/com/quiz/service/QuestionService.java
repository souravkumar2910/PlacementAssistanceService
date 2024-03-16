package com.quiz.service;

import java.util.*;

import com.quiz.model.Question;
import com.quiz.model.Quiz;

public interface QuestionService {

	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public Set<Question> getAllQuestions();
	
	public Question getSingleQuestion(Long questionId);
	
	public Set<Question> getQuestionOfQuiz(Quiz quiz);
	
	public void deleteQuestion(Long quesId);
}
