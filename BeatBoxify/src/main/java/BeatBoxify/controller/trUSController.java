package BeatBoxify.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import BeatBoxify.Entity.*;
import BeatBoxify.Services.UserServiceImplementation;
import BeatBoxify.Services.UserServices;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
@CrossOrigin("*")
@RestController
@RequestMapping
public class trUSController {
	@Autowired
	UserServices usi;
	HttpSession hs;
//when a register button clicked then the data of user passed as a parameter to this method	
//controller map this method by annotation and path 
	@PostMapping("/adduser")
	public String adduser(@RequestBody Users u) {
		return usi.newUser(u);
	}

//when a login button clicked then the data email and password passed as a parameter to this method	
//controller map this method by annotation and path 
	@PostMapping("/loginuser")
	public String logIn(@RequestBody Users u , HttpSession hs) {
		if (u.getEmail()!=null&&u!=null) {
			hs.setAttribute("email", u.getEmail());
			this.hs=hs;
			return usi.login(u);// this return customer or AdminHome
		} else {
//		hs.removeAttribute("email");
			return "loginFail";// loginfail page
		}
	}
	
	@GetMapping("/user")
	public Users view() {
		return usi.GetUser(hs.getAttribute("email").toString());
	}
	@PostMapping("/getuser")
	public Users view(@RequestBody Users u) {
		return usi.GetUser(u.getEmail());
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession hs) {
		hs.removeAttribute("email");
		return "login";
	}

	@PutMapping("/reset")
	public String ResetPassword(@RequestBody Users user ) {
		// TODO: process PUT request
//		Users usr = usi.GetUser(user.getEmail());
		return usi.resetPass(user.getEmail(), user.getPassword());
		
	}
	@GetMapping("/users")
	public List<Users> getUser(@RequestParam String sort){
		return usi.getUsers(sort);
	}
	@GetMapping("/allusers")
	public List<Users> getAllUser(){
		return usi.getAllUsers();
	}
	
	public Users user() {
		Users u=usi.GetUser(hs.getAttribute("email").toString());
		return u;
	}
	//Admin page
	@PostMapping("/edituser")
	public String updateUser(@RequestBody Users u) {
		return usi.UpdateUser(u);
	}
	@PostMapping("/deleteuser")
	public String deleteUser(@RequestBody Users u) {
		return usi.deleteUser(u);
	}
	
//	user counts	
	@GetMapping("/counts")
	public Counts counts() {
		return usi.count();
	}

	@PostMapping("/search")
	public List<Users> searchedusers(@RequestBody Users u) {
		List<Users> user= new ArrayList<Users>();
		user.add(usi.GetUser(u.getEmail()));		
		return user;
	}
}
