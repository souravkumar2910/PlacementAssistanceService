package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
