package com.example.demo.restController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.repository.UserDao;

@Service
public class UserService implements UserDetailsService{

	@Autowired
	UserDao userDao;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public List<Users> getAllUsers() {
		return userDao.findAll();
	}
	
	public Users getUsers(String userId) {
		Optional <Users> user=userDao.findById(userId);
		if (user.isPresent()) {
			return user.get();
		}
		else {
			return new Users();
		}
	}

	public Users createUser(Users user) {
		String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		Users insertedUser = userDao.insert(user);
		return insertedUser;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Users foundUser = userDao.findByUsername(username);
		
		String userN = foundUser.getUsername();
		String password = foundUser.getPassword();
		
		return new User(userN, password, new ArrayList<>());
	}

}


