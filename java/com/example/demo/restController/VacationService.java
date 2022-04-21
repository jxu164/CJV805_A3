package com.example.demo.restController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.VacationDao;

@Service
public class VacationService {

	@Autowired
	VacationDao vacationDao;
	
	public List<Vacation> getAllVacations() {
		return vacationDao.findAll();
	}
	
	//Get vacation by their ID in database
	public Vacation getVacation(String vacationId) {
		Optional <Vacation> vacation=vacationDao.findById(vacationId);
		if (vacation.isPresent()) {
			return vacation.get();
		}
		else {
			return new Vacation();
		}
	}
	
	

	public Vacation createVacation(Vacation vacation) {
		return vacationDao.save(vacation);
	}

	public Vacation updateVacation(Vacation vacation) {
		return vacationDao.save(vacation);
	}
	
	public void deleteVacation(String vacationId) {
		vacationDao.deleteById(vacationId);
	}

}
