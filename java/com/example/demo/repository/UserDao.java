package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.restController.Users;

@Repository
public interface UserDao extends MongoRepository <Users, String> {
	//Needs an implementation for this for Mongo
	Users findByUsername(String username);
}
