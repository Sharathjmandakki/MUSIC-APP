package BeatBoxify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BeatBoxify.Entity.*;
import BeatBoxify.Services.SongServicesImplementation;
import BeatBoxify.Services.UserServiceImplementation;
import jakarta.servlet.http.HttpSession;

import java.util.*;
import org.springframework.web.bind.annotation.RequestBody;
@CrossOrigin("*")
@RestController
@RequestMapping
public class SongController {
	@Autowired
	SongServicesImplementation ssi;
	@Autowired
	UserServiceImplementation usi;
	@PostMapping("/addsong")
	public String addSong(@RequestBody Songs s) {
		if(ssi.checkSong(s.getName())){
			return "failtoadd";
		}else {
			return ssi.addsong(s);
		}
	}
	@GetMapping("/songs")
	public List<Songs> viewSong() {
		List<Songs> ar=ssi.viewAllSong();
		return ar;		
	}
	@PostMapping("/searchsong")
	public List<Songs> getSong(@RequestBody Songs s ) {
		List<Songs> ls=ssi.findArtest(s.getName());
		if(ssi.findSong(s.getName())!=null) {
			ls.add(ssi.findSong(s.getName()));
		}
		return ls;
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
