package com.quiz.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.model.Question;
import com.quiz.model.Quiz;

public interface QuestionRepository extends JpaRepository<Question,Long> {

	Set<Question> findByQuiz(Quiz quiz);

}
