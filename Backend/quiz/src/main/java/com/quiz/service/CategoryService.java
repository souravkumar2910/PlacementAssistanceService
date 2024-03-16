package com.quiz.service;

import java.util.Set;

import com.quiz.model.Category;

public interface CategoryService {
	
    //	Add Category
	public Category addCategory(Category category);
	
    //	Update Category
	public Category updateCategory(Category category);
	
	//  Get All Categories
	public Set<Category> getCategory();
	
	//  Get Single Category
	public Category getSingleCategory(Long categoryId);
	
	//  Delete Category
	public void deleteCategory(Long categoryId);

}
