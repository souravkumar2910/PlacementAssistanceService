package com.quiz.service;

import java.util.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.quiz.model.Category;
import com.quiz.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepository.save(category);
	}

	@Override
	public Set<Category> getCategory() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.categoryRepository.findAll());
	}

	@Override
	public Category getSingleCategory(Long categoryId) {
		// TODO Auto-generated method stub
		return this.categoryRepository.findById(categoryId).get();
	}

	@Override
	public void deleteCategory(Long categoryId) {
		// TODO Auto-generated method stub
		this.categoryRepository.deleteById(categoryId);

	}

}
