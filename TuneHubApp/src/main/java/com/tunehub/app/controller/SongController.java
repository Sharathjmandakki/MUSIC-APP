package com.tunehub.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.tunehub.app.Entity.*;
import com.tunehub.app.Services.SongServicesImplementation;
import com.tunehub.app.Services.UserServiceImplementation;

import jakarta.servlet.http.HttpSession;

import java.util.*;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequestMapping
public class SongController {
	@Autowired
	SongServicesImplementation ssi;
	@Autowired
	UserServiceImplementation usi;
	@PostMapping("addsong")
	public String addSong(@ModelAttribute Songs s) {
		if(ssi.checkSong(s.getName())){
			return "failtoadd";
		}else {
			return ssi.addsong(s);
		}
	}
	@GetMapping("/map-viewSongs")
	public String viewSong(Model model) {
		List<Songs> ar=ssi.viewAllSong();
		model.addAttribute("songs", ar);
		return "viewSong";		
	}
	@PostMapping("/map-getsong")
	public String getSong(String name,Model model) {
		model.addAttribute("songs",ssi.findSong(name));
		return "viewSong";
	}
	
	// Customer Controllers
	
//	@GetMapping("/viewSong")
//	public String songsForCustomer(Model model) {
//		boolean payment=false;
//		if(payment) {
//			model.addAttribute("songs",ssi.viewAllSong());
//			return "viewSong";
//		}else {
//			return "makePayment";
//		}
//	}
	
	@PostMapping("/updateSong")
	public String updateSong(String name,String link) {
		//TODO: process POST request
		return ssi.updateSong(name, link);
	}	
}
