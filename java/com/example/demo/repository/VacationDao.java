package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.restController.Vacation;

@Repository
public interface VacationDao extends MongoRepository <Vacation, String>{

}
