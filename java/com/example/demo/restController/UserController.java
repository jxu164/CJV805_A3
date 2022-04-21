package com.example.demo.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping("/Users")
	public List<Users> getAllUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/Users/{userId}")
	public Users getUsers(@PathVariable String userId) {
		if (userService.getUsers(userId)!=null) {
			return userService.getUsers(userId);
		} else {
			return new Users();
		}
	}
	

	@PostMapping("/Users")
	public Users createUser(@RequestBody Users users) {
		return userService.createUser(users);
	}


}
