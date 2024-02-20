package com.tunehub.app.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tunehub.app.Entity.Users;
import com.tunehub.app.Repositories.UserRepository;

@Service
public class UserServiceImplementation implements UserServices {
	@Autowired
	UserRepository ur;

	// body for all abstract method
	@Override
	public String newUser(Users user) {
		ur.save(user);// this method save data in db by using repositories
		return "home";
	}

	@Override
	public boolean checkUser(String email) {
		if (ur.findByEmail(email) == null) {// this method ckeck the use is present in db
			// if no
			return false;
		} else {
			// if yes
			return true;
		}
	}

	@Override
	public String GetPassword(String email) {
		Users u = ur.findByEmail(email);
		// this method is used get password from user
		if (u == null) {
			return null;
		} else {
			return u.getPassword();
		}
	}

	@Override
	public String GetRoal(String email) {
		String roal = ur.findByEmail(email).getRoal();// this method is used to get roal
		if (roal.equals("admin")) {
			return "adminHome"; // if admin
		} else {
			return "customer";// if customer
		}

	}

	@Override
	public Users GetUser(String email) {
		// TODO Auto-generated method stub
		return ur.findByEmail(email);
	}

	@Override
	public String UpdateUser(Users u) {
		ur.save(u);
		return "login";
	}

	@Override
	public String resetPass(String email, String password) {
		// TODO Auto-generated method stub
		try {
			Users u = ur.findByEmail(email);
			u.setPassword(password);
			ur.save(u);
		} catch (Exception e) {
			System.err.println(e);
		}
		return "success";
	}

}
