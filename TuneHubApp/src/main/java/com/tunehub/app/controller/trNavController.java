package com.tunehub.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
// this is controller from one html page to another
@Controller
@RequestMapping
public class trNavController {
	
//when a button is licked then controller mapped this method for opening a register page. 
	//controller map this method by annotation and path 
	@GetMapping("/map-register")
	public String PageR() {
		return "register";//this method return register page
	}
	//when a button is licked then controller mapped this method for opening a login page. 
	//controller map this method by annotation and path 
	@GetMapping("/map-login")
	public String PageL() {
		return "login";//this method returns login page
	}
	@GetMapping("/map-addsong")
	public String PageS() {
		return "addSong";
	}
	@GetMapping("/map-updatesong")
	public String PageUpdateSong() {
		return "updateSong";
	}
	@GetMapping("/map-reset")
	public String resetpass() {
		return "resetpass";
	}
}
