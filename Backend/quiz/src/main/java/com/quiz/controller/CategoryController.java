package com.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.quiz.auth.QuizAuth;
import com.quiz.exception.AccessForbiddenException;
import com.quiz.model.Category;
import com.quiz.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private QuizAuth quizAuth;

	@Autowired
    private CategoryService categoryService;
	
	//add category
	@PostMapping("/")
	public ResponseEntity<?> addCategory(@RequestHeader String jwtToken, @RequestBody Category category)
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		Category category1 = this.categoryService.addCategory(category);
		return ResponseEntity.ok(category1);
	}
	
	//get category
	@GetMapping("/{categoryId}")
	public Category getCategory(@RequestHeader String jwtToken, @PathVariable("categoryId") Long categoryId) 
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		return this.categoryService.getSingleCategory(categoryId);
	}
	
	//get all Category
	@GetMapping("/")
	public ResponseEntity<?> getCategories(@RequestHeader String jwtToken)
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		return ResponseEntity.ok(this.categoryService.getCategory());
	}
	
	//update category
	
	@PutMapping("/")
	public Category updateCategory(@RequestHeader String jwtToken, @RequestBody Category category) 
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		return this.categoryService.updateCategory(category);
	}
	
	//delete category
	
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@RequestHeader String jwtToken, @PathVariable("categoryId") Long categoryId)
			throws AccessForbiddenException {
		quizAuth.isTokenValid(jwtToken);
		this.categoryService.deleteCategory(categoryId);
	}
	
	
	
}
