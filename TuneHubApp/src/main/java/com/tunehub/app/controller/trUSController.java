package com.tunehub.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.tunehub.app.Entity.*;
import com.tunehub.app.Services.UserServiceImplementation;
import com.tunehub.app.Services.UserServices;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
@RequestMapping
public class trUSController {
	@Autowired
	UserServices usi;

//when a register button clicked then the data of user passed as a parameter to this method	
//controller map this method by annotation and path 
	@PostMapping("register")
	public String adduser(@ModelAttribute Users u, Model model) {
		if (!usi.checkUser(u.getEmail())) {// this method check the user is present id db are not by using
											// UserServiceImplementation service
			System.out.println("User Name :" + u.getUsername() + "\nPassword : " + u.getPassword() + "\nEmail : "
					+ u.getEmail() + "\nDob" + u.getDob() + "\nGender : " + u.getGender() + "\nRoal : " + u.getRoal()
					+ "\nAddress : " + u.getAddress());
			usi.newUser(u);// this method will call new user in service for store the data to db
			model.addAttribute("name", usi.GetUser(u.getEmail()));
			return "registerSuccess";// register success page
		} else {
			System.out.println("User Alrady exist");
			return "registerFail";// register fail page
		}
	}

//when a login button clicked then the data email and password passed as a parameter to this method	
//controller map this method by annotation and path 
	@PostMapping("login")
	public String logIn(String email, String password, Model model, HttpSession hs) {
		// this method get password by passing email as a parameter the checking
		// conduction
		if (usi.GetPassword(email) != null && usi.GetPassword(email).equals(password)) {
			hs.setAttribute("email", email);
			model.addAttribute("name", usi.GetUser(email));
			return usi.GetRoal(email);// this return customer or AdminHome
		} else {
//		hs.removeAttribute("email");
			return "loginFail";// loginfail page
		}
	}

	@GetMapping("logout")
	public String logout(HttpSession hs) {
		hs.removeAttribute("email");
		return "login";
	}

	@PostMapping("reset")
	public String ResetPassword(String username, String email, String password) {
		// TODO: process PUT request
		Users u = usi.GetUser(email);
		if (u.getEmail().equals(email) && u.getUsername().equals(username)) {
			return usi.resetPass(email, password);
		} else {
			return "loginFail";
		}
	}

}
