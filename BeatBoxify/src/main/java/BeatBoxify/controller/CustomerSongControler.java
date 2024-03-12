package BeatBoxify.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BeatBoxify.Entity.Users;
import BeatBoxify.Services.PlayListServiceInmplementtion;
import BeatBoxify.Services.SongServicesImplementation;
import BeatBoxify.Services.UserServiceImplementation;
import jakarta.servlet.http.HttpSession;
@CrossOrigin("*")
@RequestMapping
@RestController
public class CustomerSongControler {
	@Autowired
	SongServicesImplementation ssi;
	@Autowired
	UserServiceImplementation usi;
	@Autowired
	PlayListServiceInmplementtion psi;
	@GetMapping("/viewSong")
	public String songsForCustomer(HttpSession hs,Model model) {
		String email=hs.getAttribute("email").toString();
		Users u=usi.GetUser(email);
		boolean payment=u.getPaid();
		if(payment) {
			model.addAttribute("songs",ssi.viewAllSong());
			return "viewSong";
		}else {
			return "makePayment";
		}
	}
	@GetMapping("/viewPlaylist")
	public String CViewPlayList(HttpSession hs ,Model model) {
		String email=hs.getAttribute("email").toString();
		Users u=usi.GetUser(email);
		if(u.getPaid()) {
			model.addAttribute("playlist", psi.ViewAllPlayList());
			return "viewplayList";
		}else {
			return "makePayment";
		}
	}
	@PostMapping("/getsong")
	public String getSong(HttpSession hs,String name,Model model) {
		String email=hs.getAttribute("email").toString();
		Users u=usi.GetUser(email);
		if(u.getPaid()){
			model.addAttribute("songs",ssi.findSong(name));
			return "viewSong";
		}else {
			return "makePayment";
		}
	}
	
	
}
