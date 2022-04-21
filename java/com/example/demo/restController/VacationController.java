package com.example.demo.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VacationController {

	@Autowired
	private VacationService vacationService;

	@GetMapping("/Vacations")
	public List<Vacation> getAllVacations() {
		return vacationService.getAllVacations();
	}

	//Get vacation by their ID in database
	@GetMapping("/Vacations/{vacationId}")
	public Vacation getVacation(@PathVariable String vacationId) {
		if (vacationService.getVacation(vacationId)!=null) {
			return vacationService.getVacation(vacationId);
		} else {
			return new Vacation();
		}
	}
	

	@PostMapping("/Vacations")
	public Vacation createVacation(@RequestBody Vacation vacation) {
		return vacationService.createVacation(vacation);
	}

	@PutMapping("/Vacations/{vacationId}")
	public Vacation updateVacation(@RequestBody Vacation vacation, @PathVariable String vacationId) {
		vacation.setId(vacationId);
		return vacationService.updateVacation(vacation);
	}
	
	@DeleteMapping("/Vacations/{vacationId}")
	public String deleteVacation(@PathVariable String vacationId) {
		if (vacationService.getVacation(vacationId) != null) {
			 vacationService.deleteVacation(vacationId);
			 return "Vacation entry deleted " + vacationId;
		}else {
			return "Vacation not found with ID " + vacationId;
		}
	}

}
